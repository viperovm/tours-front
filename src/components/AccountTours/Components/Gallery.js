import React, {useState, useEffect} from 'react'
import SingleWrapper from '../Wrappers/SingleWrapper'
import FileInput from '../FormFields/ObjectFileInput'
import Button from './Button'

import {connect} from 'react-redux'
import {
  tourToServer,
  setTourImages,
  setSecondaryNav,
  setEditing,
  clearCurrentTour,
  getTour,
} from '../../../redux/actions/toursActions'
import ToursEditLayout from "../../../layouts/account/ToursEditLayout";
import {Link, useHistory} from "react-router-dom";
import ObjectFileInput from "../FormFields/ObjectFileInput";
import isNotEmptyObject from "../../../helpers/isNotEmptyObject";
import PopUp from "../../PopUp/PopUp";

const Gallery = ({
                   tour,
                   setTourImages,
                   tourToServer,
                   secondary_nav,
                   getTour,
                   match,
                   res_status,
                   error,
                 }) => {

  const history = useHistory()

  const [loading, setLoading] = useState(false)

  const [url, setUrl] = useState('')

  const [submitted, setSubmitted] = useState(false)

  const [activePopUp, setActivePopUp] = useState(false)

  useEffect(() => {
    if(submitted && res_status && res_status >= 200 && res_status < 300) {
      handleRedirect()
    } else if(submitted && res_status >= 400 && res_status < 500) {
      let key = Object.keys(error)[0]
      let anchor = document.getElementById(key)
      anchor && anchor.scrollIntoView({block: "center", behavior: "smooth"})
    } else if(submitted && res_status >= 500 && res_status < 600) {
      setActivePopUp(true)
    }
  }, [submitted, res_status])

  const handleRedirect = () => {
    setSubmitted(false)
    history.push(url)
  }

  useEffect(() => {
    const loadTour = async () => {
      setLoading(true)
      await getTour(match.params.id)
      setLoading(false)
    }
    if(!isNotEmptyObject(tour)) {
      loadTour()
    }
  }, [tour])

  useEffect(() => {
    window.scrollTo(0, 0)
    return () => setUrl('')
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
    tourToServer({
      ...tour,
      section: 'gallery',
    }, tour.id)
    setSubmitted(true)
  }

  const [previews, setPreviews] = useState([])

  const handleInput = image => {
    setTourImages(image, tour.id)
  }

  useEffect(() => {
    let arr = []
    if (
      tour &&
      tour.tour_images &&
      tour.tour_images.length > 0
    ) {
      tour.tour_images.map(item => {
        if (!tour.tour_images.includes(item.tmb_image)) {
          arr.push(item.tmb_image)
        }
      })
      setPreviews(arr)
      setLoading(true)
    }
    if (tour && tour.tour_images) {
      setLoading(false)
    }
    if (tour) {
      if (Array.isArray(tour.tour_images) && tour.tour_images.length > 0) {
        let arr = secondary_nav
        setSecondaryNav(
          arr.map(item => {
            if (item.value === 'gallery') {
              return {
                ...item,
                active: true,
              }
            } else {
              return item
            }
          })
        )
      } else {
        let arr = secondary_nav
        setSecondaryNav(
          arr.map(item => {
            if (item.value === 'gallery') {
              return {
                ...item,
                active: false,
              }
            } else {
              return item
            }
          })
        )
      }
    }
  }, [tour])

  return (
    <>
      <ToursEditLayout secondary_item='gallery' secondary_name='Галерея' tour_id={match.params.id}>
        {activePopUp && <PopUp status={'cancel'} title={'Упс... Что-то пошло не так'}
                               text={'Попробуйте заново внести всю информацию на странице и нажать "Продолжить"'} button={'Ок'} action={() => {
          setActivePopUp(false)
          setSubmitted(false)
        }}/>}
        <div className='my-tours-section-heading'>
          <h4>Галерея</h4>
        </div>

        <form onSubmit={handleSubmit}>

          <SingleWrapper
            label='Добавить фото'
            comment='Добавьте не менее 7 фотографий, первая из них станет обложкой тура на предпросмотре. НЕ используйте стоковый контент и материалы других фотографов без их разрешения, так как это является нарушением авторского права и может привести к судебным разбирательствам и штрафам. Подробнее о том, где искать и как правильно использовать фото и видео для своих туров смотрите в статье. '
          >
            <ObjectFileInput
              position={'gallery'}
              tour={tour}
              action={handleInput}
              name='tour_images'
              type='file'
              error={error}
              value={tour &&
                tour.tour_images &&
                tour.tour_images.length > 0 && tour.tour_images}
            />
          </SingleWrapper>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '66%',
            }}
          >

            <Button
              text={'Назад'}
              color={'button-primary'}
              type='submit'
              action={() => setUrl(`/account/tours/${match.params.id}/edit/prices`)}
            />
            <Button
              text={'Продолжить'}
              color={'button-success'}
              type='submit'
              action={() => setUrl(`/account/tours/${match.params.id}/edit/route`)}
            />

          </div>

        </form>

      </ToursEditLayout>
    </>
  )
}

const mapStateToProps = state => ({
  secondary_nav: state.tours.secondary_nav,
  tour: state.tours.current_tour,
  res_status: state.tours.res_status,
  error: state.tours.error,
})

export default connect(mapStateToProps, {
  setSecondaryNav,
  setTourImages,
  setEditing,
  clearCurrentTour,
  tourToServer,
  getTour,
})(Gallery)

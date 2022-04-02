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
} from '../../../redux/actions/toursActions'
import ToursEditLayout from "../../../layouts/account/ToursEditLayout";
import {Link, useHistory} from "react-router-dom";
import ObjectFileInput from "../FormFields/ObjectFileInput";

const Gallery = ({
                   tour,
                   setTourImages,
                   tourToServer,
                   secondary_nav,
                 }) => {

  const history = useHistory()

  const [url, setUrl] = useState('')

  useEffect(() => {
    window.scrollTo(0, 0)
    return () => setUrl('')
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
    tourToServer(tour, tour.id)
    history.push(url)
  }

  const [loading, setLoading] = useState(false)
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
      <ToursEditLayout secondary_item='gallery' secondary_name='Галерея'>
        <div className='my-tours-section-heading'>
          <h4>Галерея</h4>
        </div>

        <form onSubmit={handleSubmit}>

          <SingleWrapper
            label='Добавить фото*'
            comment='Добавьте не менее 7 фотографий, первая из них станет обложкой тура на предпросмотре. НЕ используйте стоковый контент и материалы других фотографов без их разрешения, так как это является нарушением авторского права и может привести к судебным разбирательствам и штрафам. Подробнее о том, где искать и как правильно использовать фото и видео для своих туров смотрите в статье. '
          >
            <ObjectFileInput
              position={'gallery'}
              tour={tour}
              required={!previews}
              action={handleInput}
              name='tour_images'
              type='file'
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
              action={() => setUrl('/account/tours/edit/prices')}
            />
            <Button
              text={'Продолжить'}
              color={'button-success'}
              type='submit'
              action={() => setUrl('/account/tours/edit/route')}
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
})

export default connect(mapStateToProps, {
  setSecondaryNav,
  setTourImages,
  setEditing,
  clearCurrentTour,
  tourToServer,
})(Gallery)

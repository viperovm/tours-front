import React, {useState, useEffect} from 'react'
import SingleWrapper from '../Wrappers/SingleWrapper'
import ObjectFileInput from '../FormFields/ObjectFileInput'
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
import {Link} from "react-router-dom";

const Gallery = ({
                   tour,
                   setTourImages,
                   tourToServer,
                   clearCurrentTour,
                   secondary_nav,
                 }) => {

  const [loading, setLoading] = useState(false)
  const [previews, setPreviews] = useState([])

  const handleInput = image => {
    setTourImages(image, tour.id)
  }

  console.log(tour)

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
  }, [tour])

  useEffect(() => {
    if (tour && tour.tour_images) {
      setLoading(false)
    }
  }, [tour])

  useEffect(() => {
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

  const handleButtonSubmit = () => {
    tourToServer({...tour, on_moderation: true, is_draft: false}, tour.id)
    clearCurrentTour()
  }

  const handleButtonBack = () => {
    tourToServer(tour, tour.id)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <ToursEditLayout secondary_item='gallery' secondary_name='Галерея'>
        <div className='my-tours-section-heading'>
          <h4>Галерея</h4>
        </div>

        <SingleWrapper
          label='Добавить фото'
          comment='Добавьте не менее 7 фотографий, первая из них станет обложкой тура на предпросмотре. НЕ используйте стоковый контент и материалы других фотографов без их разрешения, так как это является нарушением авторского права и может привести к судебным разбирательствам и штрафам. Подробнее о том, где искать и как правильно использовать фото и видео для своих туров смотрите в статье. '
        >
          <FileInput
            required={true}
            action={handleInput}
            name='tour_images'
            type='file'
            value={previews}
          />

        </SingleWrapper>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '66%',
          }}
        >
          <Link
            className={`add-tour-button button-primary`}
            to='/account/tours/edit/prices'
            onClick={handleButtonBack}>
            Назад
          </Link>

          <Link
            className={`add-tour-button button-success`}
            to='/account/tours/edit/route'
            onClick={handleButtonSubmit}>
            Продолжить
          </Link>
        </div>
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

import React, { useState, useEffect } from 'react'
import SingleWrapper from '../Wrappers/SingleWrapper'
import ObjectFileInput from '../FormFields/ObjectFileInput'
import FileInput from '../FormFields/ObjectFileInput'
import Button from './Button'

import { connect } from 'react-redux'
import {
  tourToServer,
  setTourImages,
  setSecondaryNav,
  setEditing,
  clearCurrentTour,
} from '../../../redux/actions/toursActions'

const Photos = ({
  tour,
  action,
  secondary_nav,
  setSecondaryNav,
  // done,
  setTourImages,
  tourToServer,
  clearCurrentTour,
  setEditing,
}) => {
  const handleInput = image => {
    setTourImages(image, tour.id)
  }

  useEffect(() => {
    if (tour) {
      if (Array.isArray(tour.tour_images) && tour.tour_images.length > 0) {
        let arr = secondary_nav
        setSecondaryNav(
          arr.map(item => {
            if (item.value === 'photos') {
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
            if (item.value === 'photos') {
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
    tourToServer({ ...tour, on_moderation: true, is_draft: false }, tour.id)
    clearCurrentTour()
    setEditing(false)
    done()
  }

  const handleButtonBack = () => {
    action('important')
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className='my-tours-section-heading'>
        <h4>Фотографии</h4>
      </div>

      <SingleWrapper
        label='Добавить фото'
        comment='Добавьте не менее 7 фотографий, первая из них станет обложкой тура на предпросмотре. НЕ используйте стоковый контент и материалы других фотографов без их разрешения, так как это является нарушением авторского права и может привести к судебным разбирательствам и штрафам. Подробнее о том, где искать и как правильно использовать фото и видео для своих туров смотрите в статье. '
      >
        <FileInput
          action={handleInput}
          name='tour_images'
          type='file'
          value={tour && tour.tour_images}
        />
        {/* <ObjectFileInput
          action={handleInput}
          name='tour_images'
          type='file'
          value={tour && tour.tour_images}
        /> */}
      </SingleWrapper>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '66%',
        }}
      >
        <Button
          color='button-primary'
          active={true}
          action={handleButtonBack}
          text='Назад'
        />
        <Button active={true} action={handleButtonSubmit} text='На модерацию' />
      </div>
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
})(Photos)

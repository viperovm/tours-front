import React, { useState, useEffect } from 'react'
import SingleWrapper from '../Wrappers/SingleWrapper'
import Input from '../FormFields/Input'
import ObjectFileInput from '../FormFields/ObjectFileInput'
import SelectInput from '../FormFields/SelectInput'

import { connect } from 'react-redux'
import {
  getTourTypes,
  setSecondaryNav,
  updateTour,
  getLanguages,
  setPropertyImage,
  addActivity,
  getTourPropertyTypes,
  getTourAccomodations,
  tourToServer,
} from '../../../redux/actions/toursActions'
import ToursEditLayout from "../../../layouts/account/ToursEditLayout";
import {Link} from "react-router-dom";


const Accommodation = ({ getTourTypes,
                         setSecondaryNav,
                         updateTour,
                         getLanguages,
                         setPropertyImage,
                         addActivity,
                         getTourPropertyTypes,
                         getTourAccomodations,
                         tourToServer,
                         toursTypes,
                         tour_property_types,
                         tour_accomodations,
                         languages,
                         secondary_nav,
                         tour,
                       }) => {

  useEffect(() => {
    getTourPropertyTypes()
    getTourAccomodations()
  }, [])

  const handleInput = (name, value) => {
    updateTour({
      ...tour,
      [name]: value,
    })
  }

  const handleImageLoad = image => {
    setPropertyImage(image, tour.id)
  }

  useEffect(() => {
    if (tour) {
      if (
        tour.tour_property_types &&
        tour.hotel_name &&
        tour.accomodation &&
        tour.tour_property_images
      ) {
        let arr = secondary_nav
        setSecondaryNav(
          arr.map(item => {
            if (item.value === 'accommodation') {
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
            if (item.value === 'accommodation') {
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
    tourToServer(tour, tour.id)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <ToursEditLayout secondary_item='accommodation' secondary_name='Проживание'>
        <div className='my-tours-section-heading'>
          <h4>Проживание</h4>
        </div>
        <SingleWrapper label='Где планируется проживание' comment=''>
          <SelectInput
            required={true}
            action={handleInput}
            name='tour_property_types'
            label='Где планируется проживание'
            val={tour && tour.tour_property_types}
            options={tour_property_types}
            multiple={true}
          />
        </SingleWrapper>
      <SingleWrapper
        label='Название отеля'
        comment='Вводите, если уверены в 100% гарантии размещения '
      >
        <Input
          required={true}
          action={handleInput}
          name='hotel_name'
          value={tour && tour.hotel_name}
          options={toursTypes}
        />
      </SingleWrapper>
        <SingleWrapper label='Размещение' comment=''>
          <SelectInput
            required={true}
            action={handleInput}
            name='accomodation'
            label='Размещение'
            val={tour && tour.accomodation}
            options={tour_accomodations}
            multiple={true}
          />
        </SingleWrapper>

        <SingleWrapper
          label='Добавить фото мест проживания в путешествии'
          comment=''
        >
          <ObjectFileInput
            required={true}
            action={handleImageLoad}
            name='tour_property_images'
            value={tour && tour.tour_property_images}
            type='file'
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
          to='/account/tours/edit/route'
          onClick={handleButtonSubmit}>
          Назад
        </Link>
        <Link
          className={`add-tour-button button-success`}
          to='/account/tours/edit/details'
          onClick={handleButtonSubmit}>
          Продолжить
        </Link>
      </div>

    </ToursEditLayout>


  )
}

const mapStateToProps = state => ({
  toursTypes: state.tours.tour_types,
  tour_property_types: state.tours.tour_property_types,
  tour_accomodations: state.tours.tour_accomodations,
  languages: state.tours.languages,
  secondary_nav: state.tours.secondary_nav,
  tour: state.tours.current_tour,
})

export default connect(mapStateToProps, {
  getTourTypes,
  setSecondaryNav,
  updateTour,
  getLanguages,
  setPropertyImage,
  addActivity,
  getTourPropertyTypes,
  getTourAccomodations,
  tourToServer,
})(Accommodation)

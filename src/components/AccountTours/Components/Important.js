import React, { useState, useEffect } from 'react'
import SingleWrapper from '../Wrappers/SingleWrapper'
import DoubleWrapper from '../Wrappers/DoubleWrapper'
import Input from '../FormFields/Input'
import ObjectFileInput from '../FormFields/ObjectFileInput'
import RadioInput from '../FormFields/RadioInput'
import TextEditor from '../FormFields/TextEditor'
import TextArea from '../FormFields/TextArea'
import SelectInput from '../FormFields/SelectInput'
import CheckboxInput from '../FormFields/CheckboxInput'
import Button from './Button'
import ExtraServicesComponent from './ExtraServicesComponent'

import { connect } from 'react-redux'
import {
  getTourTypes,
  getTourPropertyTypes,
  getTourAccomodations,
  updateTour,
  getLanguages,
  setPropertyImage,
  addActivity,
  setSecondaryNav,
  tourToServer,
} from '../../../redux/actions/toursActions'
import ToursEditLayout from "../../../layouts/account/ToursEditLayout";
import {Link} from "react-router-dom";

const ExtraServices = ({
  tour,
  action,
  secondary_nav,
  setSecondaryNav,
  updateTour,
  tourToServer,
}) => {
  
  const handleInput = (name, value) => {
    updateTour({
      ...tour,
      [name]: value,
    })
  }

  // useEffect(() => {
  //   if (tour) {
  //     if (tour.day && tour.day.length > 0) {
  //       let arr = secondary_nav
  //       setSecondaryNav(
  //         arr.map(item => {
  //           if (item.value === 'day') {
  //             return {
  //               ...item,
  //               active: true,
  //             }
  //           } else {
  //             return item
  //           }
  //         })
  //       )
  //     } else {
  //       let arr = secondary_nav
  //       setSecondaryNav(
  //         arr.map(item => {
  //           if (item.value === 'day') {
  //             return {
  //               ...item,
  //               active: false,
  //             }
  //           } else {
  //             return item
  //           }
  //         })
  //       )
  //     }
  //   }
  // }, [tour])

  const handleButtonSubmit = () => {
    tourToServer(tour, tour.id)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

    return (
      <>
        <ToursEditLayout secondary_item='important' secondary_name='Важно знать'>
        <div className='my-tours-section-heading'>
          <h4>Важно знать</h4>
        </div>

        <SingleWrapper label='Требования к гостю' comment=''>
          <TextEditor
            action={handleInput}
            name='guest_requirements'
            value={tour && tour.guest_requirements}
            // options={toursTypes}
            // multiple
          />
        </SingleWrapper>
        <SingleWrapper label='Комментарии' comment=''>
          <TextEditor
            action={handleInput}
            name='important_to_know_comments'
            value={tour && tour.important_to_know_comments}
            // options={toursTypes}
            // multiple
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
            to='/account/tours/edit/services'
            onClick={handleButtonSubmit}>
            Назад
          </Link>
          <Link
            className={`add-tour-button button-success`}
            to='/account/tours/edit/photos'
            onClick={handleButtonSubmit}>
            Продолжить
          </Link>
        </div>
        </ToursEditLayout>
      </>
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
})(ExtraServices)

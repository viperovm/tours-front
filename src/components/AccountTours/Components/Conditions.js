import React, { useState, useEffect } from 'react'
import SingleWrapper from '../Wrappers/SingleWrapper'

import TextArea from '../FormFields/TextArea'

import Button from './Button'

import { connect } from 'react-redux'

import {
  setSecondaryNav,
  updateTour,
  tourToServer,
} from '../../../redux/actions/toursActions'
import ToursEditLayout from "../../../layouts/account/ToursEditLayout";
import {Link} from "react-router-dom";

const Conditions = ({
  action,
  secondary_nav,
  setSecondaryNav,
  updateTour,
  tour,
  tourToServer,
}) => {
  const [completed, setCompleted] = useState(false)

  const handleInput = (name, value) => {
    updateTour({
      ...tour,
      [name]: value,
    })
  }

  // useEffect(() => {
  //   if (tour) {
  //     if (tour.tour_included_services && tour.tour_excluded_services && tour.air_tickets) {
  //       setCompleted(true)
  //       let arr = secondary_nav
  //       setSecondaryNav(
  //         arr.map(item => {
  //           if (item.value === 'conditions') {
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
  //       setCompleted(false)
  //       let arr = secondary_nav
  //       setSecondaryNav(
  //         arr.map(item => {
  //           if (item.value === 'conditions') {
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
      <ToursEditLayout secondary_item='conditions' secondary_name='Условия'>
      <div className='my-tours-section-heading'>
        <h4>Условия</h4>
      </div>

      <SingleWrapper label='В стоимость включено' comment='Вводить через точку с запятой.'>
        <TextArea
          action={handleInput}
          name='tour_included_services'
          label=''
          value={tour && tour.tour_included_services}
          rows='7'
        />
      </SingleWrapper>
      <SingleWrapper label='В стоимость не включено' comment='Вводить через точку с запятой.'>
        <TextArea
          action={handleInput}
          name='tour_excluded_services'
          label=''
          value={tour && tour.tour_excluded_services}
          rows='7'
        />
      </SingleWrapper>
      <SingleWrapper label='Авиабилеты' comment=''>
        <TextArea
          action={handleInput}
          name='air_tickets'
          label=''
          value={tour && tour.air_tickets}
          rows='7'
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
          to='/account/tours/edit/leader'
          onClick={handleButtonSubmit}>
          Назад
        </Link>
        <Link
          className={`add-tour-button button-success`}
          to='/account/tours/edit/services'
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
  updateTour,
  tourToServer,
})(Conditions)

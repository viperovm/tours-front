import React, { useState, useEffect } from 'react'
import SingleWrapper from '../Wrappers/SingleWrapper'
import TextArea from '../FormFields/TextArea'
import Button from './Button'

import { connect } from 'react-redux'
import {
  setSecondaryNav,
  tourToServer,
} from '../../../redux/actions/toursActions'
import { updateTour } from '../../../redux/actions/toursActions'
import ToursEditLayout from "../../../layouts/account/ToursEditLayout";
import {Link} from "react-router-dom";
// import { update_tour } from '../../../redux/actions/currentTourActions'

const Cancellation = ({
  tour,
  action,
  secondary_nav,
  setSecondaryNav,
  updateTour,
  update_tour,
  tourToServer,
}) => {
  // const [data, setData] = useState()
  const [completed, setCompleted] = useState(false)

  const handleInput = (name, value) => {
    updateTour({...tour, [name]: value})
  }

  // useEffect(() => {
  //   if (tour) {
  //     if (tour.cancellation_terms) {
  //       setCompleted(true)
  //       let arr = secondary_nav
  //       setSecondaryNav(
  //         arr.map(item => {
  //           if (item.value === 'options') {
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
  //           if (item.value === 'options') {
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
      <ToursEditLayout secondary_item='options' secondary_name='Условия отмены'>
      <div className='my-tours-section-heading'>
        <h4>Условия отмены</h4>
      </div>

      <SingleWrapper
        label='Укажите свои условия отмены:*'
        comment='Расскажите клиентам, какая у вас политика возвратов. Какая сумма вернется пользователю в случае отмены по инициативе путешественника? Обратите внимание, что сервисный сбор платит тревел-эксперт и он является фактически понесенными расходами.'
      >
        <TextArea
          action={handleInput}
          name='cancellation_terms'
          label=''
          value={tour && tour.cancellation_terms}
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
          to='/account/tours/edit/prices'
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
    </>
  )
}

const mapStateToProps = state => ({
  toursTypes: state.tours.tour_types,
  secondary_nav: state.tours.secondary_nav,
  tour: state.tours.current_tour,
})

export default connect(mapStateToProps, {
  setSecondaryNav,
  updateTour,
  tourToServer,
})(Cancellation)

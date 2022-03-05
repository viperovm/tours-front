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

  useEffect(() => {
    if (tour) {
      if (tour.tour_included_services && tour.tour_excluded_services && tour.air_tickets) {
        setCompleted(true)
        let arr = secondary_nav
        setSecondaryNav(
          arr.map(item => {
            if (item.value === 'conditions') {
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
        setCompleted(false)
        let arr = secondary_nav
        setSecondaryNav(
          arr.map(item => {
            if (item.value === 'conditions') {
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
    action('services')
  }

  const handleButtonBack = () => {
    action('leader')
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className='my-tours-section-heading'>
        <h4>Условия</h4>
      </div>

      <SingleWrapper label='В стоимость включено' comment=''>
        <TextArea
          action={handleInput}
          name='tour_included_services'
          label=''
          value={tour && tour.tour_included_services}
          rows='7'
        />
      </SingleWrapper>
      <SingleWrapper label='В стоимость не включено' comment=''>
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
        <Button
          color='button-primary'
          active={true}
          action={handleButtonBack}
          text='Назад'
        />
        <Button active={true} action={handleButtonSubmit} />
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
  updateTour,
  tourToServer,
})(Conditions)

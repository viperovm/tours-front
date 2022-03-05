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
import DaysComponent from './DaysComponent'

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
} from '../../../redux/actions/toursActions'

const Days = ({
  tour,
  action,
  secondary_nav,
  setSecondaryNav,
  updateTour,
}) => {

  const [data, setData] = useState([])

  const [completed, setCompleted] = useState(false)

  const [value, setValue] = useState(0)
  const [loading, setLoading] = useState(false)
  const [activities, setActivities] = useState([1])

  const handleActivityInput = (value, id) => {
    let arr = data.filter(item => item.id !== id)
    arr.push(value)
    setData(arr)
  }

  const handleInput = (name, value) => {
    update_tour(name, value)
  }

  useEffect(() => {
    if (tour) {
      if (
        tour.day && tour.day.length > 0
      ) {
        setCompleted(true)
        let arr = secondary_nav
        setSecondaryNav(
          arr.map(item => {
            if (item.value === 'day') {
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
            if (item.value === 'day') {
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
    updateTour(tour, tour.id)
    action('leader')
  }

  const handleButtonBack = () => {
    action('details')
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className='my-tours-section-heading'>
        <h4>День за днем</h4>
      </div>

      <DaysComponent />
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
      {/* <Button active={completed} /> */}
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
})(Days)

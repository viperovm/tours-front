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
  tourToServer,
} from '../../../redux/actions/toursActions'
import ToursEditLayout from "../../../layouts/account/ToursEditLayout";
import {Link} from "react-router-dom";

const Days = ({
  tour,
  action,
  secondary_nav,
  setSecondaryNav,
  updateTour,
  tourToServer,
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
    updateTour({ ...tour, [name]: value })
  }

  // useEffect(() => {
  //   if (tour) {
  //     if (tour.day && tour.day.length > 0) {
  //       setCompleted(true)
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
  //       setCompleted(false)
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

  const handleButtonBack = () => {
    action('details')
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <ToursEditLayout secondary_item='day' secondary_name='День за днем'>
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
        <Link
          className={`add-tour-button button-primary`}
          to='/account/tours/edit/details'
          onClick={handleButtonSubmit}>
          Назад
        </Link>
        <Link
          className={`add-tour-button button-success`}
          to='/account/tours/edit/leader'
          onClick={handleButtonSubmit}>
          Продолжить
        </Link>
      </div>
      {/* <Button active={completed} /> */}
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
})(Days)

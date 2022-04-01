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
import Activities from './Activities'

import CircularProgress from '@mui/material/CircularProgress'

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

// import Activities from './Activities'
import Activity from './Activity'

import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import ToursEditLayout from "../../../layouts/account/ToursEditLayout";
import {Link} from "react-router-dom";

function TabPanel({ children, value, index }) {
  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const Details = ({
  tour,
  action,
  toursTypes,
  secondary_nav,
  setSecondaryNav,
  updateTour,
  tourToServer,
  getLanguages,
  languages,
  setPropertyImage,
  addActivity,
  getTourPropertyTypes,
  getTourAccomodations,
  tour_property_types,
  tour_accomodations,
}) => {

  const handleInput = (name, value) => {
    updateTour({ ...tour, [name]: value })
  }

  useEffect(() => {
    getLanguages()
  }, [])

  useEffect(() => {
    if (tour) {
      if (
        tour.languages &&
        tour.difficulty_level &&
        tour.comfort_level &&
        tour.age_starts &&
        tour.age_ends
      ) {
        let arr = secondary_nav
        setSecondaryNav(
          arr.map(item => {
            if (item.value === 'details') {
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
            if (item.value === 'details') {
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
    <>
      <ToursEditLayout secondary_item='details' secondary_name='Детали'>
      <div className='my-tours-section-heading'>
        <h4>Детали</h4>
      </div>

      <SingleWrapper
        label='На каком языке говорят в путешествии'
        comment='Выбирайте только те языки, на которых будут говорить в путешествии '
      >
        <SelectInput
          required={true}
          action={handleInput}
          name='languages'
          label='Валюта тура'
          val={tour && tour.languages}
          options={languages}
          multiple={true}
        />
      </SingleWrapper>
      <RadioInput
        required={true}
        action={handleInput}
        name='difficulty_level'
        label='Укажите сложность программы'
        value={tour && tour.difficulty_level}
        comment='Уровень активности должен соответствовать нагрузкам, которые ожидаются в путешествии. Градацию уровней активности можно посмотреть здесь'
      />
      <SingleWrapper
        label='Кратко опишите в чем заключается сложность тура'
        comment=''
      >
        <TextArea
          action={handleInput}
          name='difficulty_description'
          label=''
          value={tour && tour.difficulty_description}
          rows='7'
        />
      </SingleWrapper>
      <RadioInput
        required={true}
        action={handleInput}
        name='comfort_level'
        label='Как вы оцениваете уровень комфорта в путешествии?'
        value={tour && tour.comfort_level}
        comment='Комфорт - один из главных критериев выбора путешествия. Градацию уровней комфорта можно посмотреть здесь'
      />
      <DoubleWrapper ratio='1-2'>
        <Input
          required={true}
          action={handleInput}
          name='age_starts'
          label='Возраст участников от:'
          value={tour && tour.age_starts}
        />
        <Input
          required={true}
          action={handleInput}
          name='age_ends'
          label='Возраст участников до:'
          value={tour && tour.age_ends}
        />
      </DoubleWrapper>

      <CheckboxInput
        action={handleInput}
        name='babies_alowed'
        label='Возможно участие с маленькими детьми'
        comment=''
        value={tour && tour.babies_alowed}
      />

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '66%',
        }}
      >
        <Link
          className={`add-tour-button button-primary`}
          to='/account/tours/edit/accommodation'
          onClick={handleButtonSubmit}>
          Назад
        </Link>
        <Link
          className={`add-tour-button button-success`}
          to='/account/tours/edit/day'
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
})(Details)

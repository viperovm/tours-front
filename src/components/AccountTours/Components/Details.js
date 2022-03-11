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
  // const [tour, settour] = useState()

  const [data, setData] = useState([])

  const [completed, setCompleted] = useState(false)

  const [value, setValue] = useState(0)
  const [loading, setLoading] = useState(false)
  const [activities, setActivities] = useState([1])
  const [previews, setPreviews] = useState([])


  useEffect(() => {
    getTourPropertyTypes()
    getTourAccomodations()
  }, [])

  useEffect(() => {
    let arr = []
    if (tour && tour.tour_property_images) {
      tour.tour_property_images.map(item => {
        if (!tour.tour_property_images.includes(item.tmb_image)) {
          arr.push(item.tmb_image)
        }
      })
    }
    setPreviews(arr)
  }, [tour])

  const handleActivityInput = (value, id) => {
    let arr = data.filter(item => item.id !== id)
    arr.push(value)
    setData(arr)
  }

  useEffect(() => {
    if (tour && tour.plan && tour.plan.length === 0) {
      addActivity(tour.id)
      setLoading(true)
    }
  }, [])

  useEffect(() => {
    if (tour && tour.plan) {
      setData(tour.plan)
      setLoading(false)
    }
    if (tour && tour.plan && tour.plan.length > 1) {
      let arr = []
      for (let i = 1; i <= tour.plan.length; i++) {
        arr.push(i)
      }
      setActivities(arr)
    }
    if (tour && tour.plan && tour.plan.length === 1) {
      setActivities([1])
    }
  }, [tour])

  const handleDayAdd = () => {
    setLoading(true)
    addActivity(tour.id)
  }

  const handleTabChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleInput = (name, value) => {
    updateTour({ ...tour, [name]: value })
  }

  useEffect(() => {
    if (tour && tour.plan && tour.plan.length === 0) {
      addActivity(tour.id)
      setLoading(true)
    } else if (tour && tour.plan && tour.plan.length !== 0) {
      setLoading(false)
    }
  }, [tour])

  useEffect(() => {
    getLanguages()
  }, [])

  // useEffect(() => {
  //   if (tour) {
  //     if (
  //       tour.languages &&
  //       tour.description &&
  //       tour.main_impressions &&
  //       tour.plan
  //     ) {
  //       setCompleted(true)
  //       let arr = secondary_nav
  //       setSecondaryNav(
  //         arr.map(item => {
  //           if (item.value === 'details') {
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
  //           if (item.value === 'details') {
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

  const handleImageLoad = image => {
    setPropertyImage(image, tour.id)
  }

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
          action={handleInput}
          name='languages'
          label='Валюта тура'
          val={tour && tour.languages}
          options={languages}
          multiple={true}
        />
      </SingleWrapper>
      <RadioInput
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
        action={handleInput}
        name='comfort_level'
        label='Как вы оцениваете уровень комфорта в путешествии?'
        value={tour && tour.comfort_level}
        comment='Комфорт - один из главных критериев выбора путешествия. Градацию уровней комфорта можно посмотреть здесь'
      />
      {/* <div className='my-tours-section-heading'>
        <h4 style={{ marginBottom: 10 }}>Размещение</h4>
      </div> */}

      <SingleWrapper label='Где планируется проживание' comment=''>
        <SelectInput
          action={handleInput}
          name='tour_property_types'
          label='Где планируется проживание'
          val={tour && tour.tour_property_types}
          options={tour_property_types}
          multiple={true}
        />
      </SingleWrapper>
      <SingleWrapper label='Размещение' comment=''>
        <SelectInput
          action={handleInput}
          name='accomodation'
          label='Размещение'
          val={tour && tour.accomodation}
          options={tour_accomodations}
          multiple={true}
        />
      </SingleWrapper>
      <SingleWrapper
        label='Название отеля'
        comment='Вводите, если уверены в 100% гарантии размещения '
      >
        <Input
          action={handleInput}
          name='hotel_name'
          value={tour && tour.hotel_name}
          // options={toursTypes}
          // multiple
        />
      </SingleWrapper>
      <SingleWrapper
        label='Добавить фото мест проживания в путешествии'
        comment=''
      >
        <ObjectFileInput
          action={handleImageLoad}
          name='tour_property_images'
          value={previews}
          type='file'
          // multiple
        />
      </SingleWrapper>
      {/* <Accomodations /> */}

      <DoubleWrapper ratio='1-2'>
        <Input
          action={handleInput}
          name='age_starts'
          label='Возраст участников от:'
          value={tour && tour.age_starts}
          // type=''
          // multiple
        />
        <Input
          action={handleInput}
          name='age_ends'
          label='Возраст участников до:'
          value={tour && tour.age_ends}
          // type='date'

          // multiple
        />
      </DoubleWrapper>

      <CheckboxInput
        action={handleInput}
        name='babies_alowed'
        label='Возможно участие с маленькими детьми'
        comment=''
        value={tour && tour.babies_alowed}
      />
      <CheckboxInput
        action={handleInput}
        name='animals_not_exploited'
        label='В программе не эксплуатируются животные'
        comment='Если в вашей поездке не используется труд животных - можете отметить. Мы это ценим. '
        value={tour && tour.animals_not_exploited}
      />

      <SingleWrapper label='Ссылка на видео (youtube или vimeo)' comment=''>
        <Input
          action={handleInput}
          name='media_link'
          value={tour && tour.media_link}
          options={toursTypes}
          // multiple
        />
      </SingleWrapper>

      <SingleWrapper label='Описание тура' comment=''>
        <TextEditor
          action={handleInput}
          name='description'
          value={tour && tour.description}
          // multiple
        />
      </SingleWrapper>

      <SingleWrapper label='Главные впечатления' comment='Вводить через точку с запятой.'>
        <TextArea
          action={handleInput}
          name='main_impressions'
          label=''
          value={tour && tour.main_impressions}
          rows='7'
        />
      </SingleWrapper>

      <Activities />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '66%',
        }}
      >
        <Link
          className={`add-tour-button button-primary`}
          to='/account/tours/edit/options'
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
})(Details)

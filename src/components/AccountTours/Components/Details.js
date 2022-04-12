import React, {useState, useEffect} from 'react'
import SingleWrapper from '../Wrappers/SingleWrapper'
import DoubleWrapper from '../Wrappers/DoubleWrapper'
import Input from '../FormFields/Input'
import RadioInput from '../FormFields/RadioInput'
import TextArea from '../FormFields/TextArea'
import SelectInput from '../FormFields/SelectInput'
import CheckboxInput from '../FormFields/CheckboxInput'
import Button from './Button'

import {connect} from 'react-redux'
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
  getTour,
} from '../../../redux/actions/toursActions'

// import Activities from './Activities'
import Activity from './Activity'

import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import ToursEditLayout from "../../../layouts/account/ToursEditLayout";
import {Link, useHistory} from "react-router-dom";
import isNotEmptyObject from "../../../helpers/isNotEmptyObject";
import PopUp from "../../PopUp/PopUp";

function TabPanel({children, value, index}) {

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box sx={{p: 3}}>
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
                   secondary_nav,
                   setSecondaryNav,
                   updateTour,
                   tourToServer,
                   getLanguages,
                   languages,
                   getTour,
                   match,
                   res_status,
                   error,
                 }) => {

  const history = useHistory()

  const [url, setUrl] = useState('')

  const [loading, setLoading] = useState(false)

  const [submitted, setSubmitted] = useState(false)

  const [activePopUp, setActivePopUp] = useState(false)

  useEffect(() => {
    if(submitted && res_status && res_status >= 200 && res_status < 300) {
      handleRedirect()
    } else if(submitted && res_status >= 400 && res_status < 500) {
      let key = Object.keys(error)[0]
      let anchor = document.getElementById(key)
      anchor && anchor.scrollIntoView({block: "center", behavior: "smooth"})
    } else if(submitted && res_status >= 500 && res_status < 600) {
      setActivePopUp(true)
    }
  }, [submitted, res_status])

  const handleRedirect = () => {
    setSubmitted(false)
    history.push(url)
  }

  useEffect(() => {
    const loadTour = async () => {
      setLoading(true)
      await getTour(match.params.id)
      setLoading(false)
    }
    if (!isNotEmptyObject(tour)) {
      loadTour()
    }
  }, [tour])

  useEffect(() => {
    getLanguages()
    window.scrollTo(0, 0)
    return () => setUrl('')
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
    tourToServer({
      ...tour,
      section: 'details',
    }, tour.id)
    setSubmitted(true)
  }

  const handleInput = (name, value) => {
    updateTour({...tour, [name]: value})
  }

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

  return (
    <>
      <ToursEditLayout secondary_item='details' secondary_name='Детали' tour_id={match.params.id}>
        {activePopUp && <PopUp status={'cancel'} title={'Упс... Что-то пошло не так'}
                               text={'Попробуйте заново внести всю информацию на странице и нажать "Продолжить"'} button={'Ок'} action={() => {
          setActivePopUp(false)
          setSubmitted(false)
        }}/>}
        <div className='my-tours-section-heading'>
          <h4>Детали</h4>
        </div>

        <form onSubmit={handleSubmit}>
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
              error={error}
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
              error={error}
            />
          </SingleWrapper>
          <RadioInput
            action={handleInput}
            name='comfort_level'
            label='Как вы оцениваете уровень комфорта в путешествии?'
            value={tour && tour.comfort_level}
            comment='Комфорт - один из главных критериев выбора путешествия. Градацию уровней комфорта можно посмотреть здесь'
          />
          <DoubleWrapper ratio='1-2'>
            <Input
              action={handleInput}
              name='age_starts'
              label='Возраст участников от:'
              value={tour && tour.age_starts}
              error={error}
            />
            <Input
              action={handleInput}
              name='age_ends'
              label='Возраст участников до:'
              value={tour && tour.age_ends}
              error={error}
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

            <Button
              text={'Назад'}
              color={'button-primary'}
              type='submit'
              action={() => setUrl(`/account/tours/${match.params.id}/edit/accommodation`)}
            />
            <Button
              text={'Продолжить'}
              color={'button-success'}
              type='submit'
              action={() => setUrl(`/account/tours/${match.params.id}/edit/important`)}
            />

          </div>
        </form>
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
  res_status: state.tours.res_status,
  error: state.tours.error,
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
  getTour,
})(Details)

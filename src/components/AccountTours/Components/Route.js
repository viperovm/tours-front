import React, {useEffect, useState} from 'react'
import SingleWrapper from '../Wrappers/SingleWrapper'
import DoubleWrapper from '../Wrappers/DoubleWrapper'
import Input from '../FormFields/Input'
import DaysComponent from './DaysComponent'

import {connect} from 'react-redux'
import {
  updateTour,
  setSecondaryNav,
  tourToServer,
  getCities,
  getTour,
} from '../../../redux/actions/toursActions'
import ToursEditLayout from "../../../layouts/account/ToursEditLayout";
import {Link, useHistory} from "react-router-dom";
import CitySelectInput from "../FormFields/CitySelectInput";
import Button from "./Button";
import isNotEmptyObject from "../../../helpers/isNotEmptyObject";
import PopUp from "../../PopUp/PopUp";

const TourRoute = ({
                     tour,
                     secondary_nav,
                     setSecondaryNav,
                     updateTour,
                     tourToServer,
                     cities,
                     getCities,
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
    } else if(submitted && res_status >= 400 && res_status < 600) {
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
    if(!isNotEmptyObject(tour)) {
      loadTour()
    }
  }, [tour])

  useEffect(() => {
    getCities()
    window.scrollTo(0, 0)
    return () => setUrl('')
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
    tourToServer(tour, tour.id)
    setSubmitted(true)
  }

  const handleInput = (name, value) => {
    updateTour({...tour, [name]: value})
  }

  useEffect(() => {
    if (tour) {
      if (tour.tour_days && tour.tour_days.length > 0 &&
      tour.start_date &&
      tour.finish_date &&
      tour.start_time &&
      tour.finish_time &&
      tour.start_city &&
      tour.finish_city
      ) {
        let arr = secondary_nav
        setSecondaryNav(
          arr.map(item => {
            if (item.value === 'route') {
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
            if (item.value === 'route') {
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
      <ToursEditLayout secondary_item='route' secondary_name='Маршрут' tour_id={match.params.id}>
        {activePopUp && <PopUp status={'cancel'} title={'Упс... Что-то пошло не так'}
                               text={'Попробуйте заново внести всю информацию на странице и нажать "Продолжить"'} button={'Ок'} action={() => {
          setActivePopUp(false)
          setSubmitted(false)
        }}/>}
        <div className='my-tours-section-heading'>
          <h4>Маршрут</h4>
        </div>

        <form onSubmit={handleSubmit}>
          <DoubleWrapper ratio='1-2'>
            <Input
              required={true}
              action={handleInput}
              name='start_date'
              label='Дата начала тура*'
              value={tour && tour.start_date}
              type='date'
              error={error}
            />
            <Input
              required={true}
              action={handleInput}
              name='finish_date'
              label='Дата завершения тура*'
              value={tour && tour.finish_date}
              type='date'
              error={error}
            />
          </DoubleWrapper>
          <DoubleWrapper comment=''>
            <Input
              required={true}
              action={handleInput}
              name='start_time'
              value={tour && tour.start_time}
              type='time'
              label='Время начала тура (местное)*'
              error={error}
            />
            <Input
              required={true}
              action={handleInput}
              name='finish_time'
              value={tour && tour.finish_time}
              type='time'
              label='Время окончания тура (местное)*'
              error={error}
            />
          </DoubleWrapper>

          <SingleWrapper label='Город начала тура*' comment=''>
            <CitySelectInput
              required={true}
              action={handleInput}
              name='start_city'
              label='Город начала тура'
              comment=''
              val={tour && tour.start_city}
              options={cities}
            />
          </SingleWrapper>
          <SingleWrapper label='Город конца тура*' comment=''>
            <CitySelectInput
              required={true}
              action={handleInput}
              name='finish_city'
              label='Город конца тура'
              comment=''
              val={tour && tour.finish_city}
              options={cities}
            />
          </SingleWrapper>

          <DaysComponent/>


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
              action={() => setUrl(`/account/tours/${match.params.id}/edit/gallery`)}
            />
            <Button
              text={'Продолжить'}
              color={'button-success'}
              type='submit'
              action={() => setUrl(`/account/tours/${match.params.id}/edit/accommodation`)}
            />

          </div>
        </form>
      </ToursEditLayout>
    </>
  )
}

const mapStateToProps = state => ({
  secondary_nav: state.tours.secondary_nav,
  tour: state.tours.current_tour,
  cities: state.tours.cities,
  res_status: state.tours.res_status,
  error: state.tours.error,
})

export default connect(mapStateToProps, {
  setSecondaryNav,
  updateTour,
  tourToServer,
  getCities,
  getTour,
})(TourRoute)

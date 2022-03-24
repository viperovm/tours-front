import React, {useEffect} from 'react'
import SingleWrapper from '../Wrappers/SingleWrapper'
import DoubleWrapper from '../Wrappers/DoubleWrapper'
import Input from '../FormFields/Input'
import SelectInput from '../FormFields/SelectInput'
import DaysComponent from './DaysComponent'

import {connect} from 'react-redux'
import {
  updateTour,
  setSecondaryNav,
  tourToServer,
  getCities
} from '../../../redux/actions/toursActions'
import ToursEditLayout from "../../../layouts/account/ToursEditLayout";
import {Link} from "react-router-dom";

const TourRoute = ({
                     tour,
                     secondary_nav,
                     setSecondaryNav,
                     updateTour,
                     tourToServer,
                     cities,
                     getCities
                   }) => {

  const handleInput = (name, value) => {
    updateTour({...tour, [name]: value})
  }

  useEffect(() => {
    if (tour) {
      if (tour.day && tour.day.length > 0 &&
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

  const handleButtonSubmit = () => {
    tourToServer(tour, tour.id)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    getCities()
  }, [])

  return (
    <>
      <ToursEditLayout secondary_item='route' secondary_name='Маршрут'>
        <div className='my-tours-section-heading'>
          <h4>Маршрут</h4>
        </div>

        <DoubleWrapper ratio='1-2'>
          <Input
            required={true}
            action={handleInput}
            name='start_date'
            label='Дата начала тура'
            value={tour && tour.start_date}
            type='date'
          />
          <Input
            required={true}
            action={handleInput}
            name='finish_date'
            label='Дата завершения тура'
            value={tour && tour.finish_date}
            type='date'
          />
        </DoubleWrapper>
        <DoubleWrapper comment=''>
          <Input
            required={true}
            action={handleInput}
            name='start_time'
            value={tour && tour.start_time}
            type='time'
            label='Время начала (местное):'
          />
          <Input
            required={true}
            action={handleInput}
            name='finish_time'
            value={tour && tour.finish_time}
            type='time'
            label='Время окончания тура (местное)'
          />
        </DoubleWrapper>

        <SingleWrapper label='Город начала тура' comment=''>
          <SelectInput
            required={true}
            action={handleInput}
            name='start_city'
            label='Город начала тура'
            comment=''
            val={tour && tour.start_city}
            options={cities}
          />
        </SingleWrapper>
        <SingleWrapper label='Город конца тура' comment=''>
          <SelectInput
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
          <Link
            className={`add-tour-button button-primary`}
            to='/account/tours/edit/gallery'
            onClick={handleButtonSubmit}>
            Назад
          </Link>
          <Link
            className={`add-tour-button button-success`}
            to='/account/tours/edit/accommodation'
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
  cities: state.tours.cities,
})

export default connect(mapStateToProps, {
  setSecondaryNav,
  updateTour,
  tourToServer,
  getCities
})(TourRoute)

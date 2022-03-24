import React, { useEffect} from 'react'
import SingleWrapper from '../Wrappers/SingleWrapper'
import Input from '../FormFields/Input'

import {connect} from 'react-redux'
import {
  getTourTypes,
  updateTour,
  updateTourWallpaper,
  setName,
  tourToServer,
  setSecondaryNav, getTourLeaders
} from '../../../redux/actions/toursActions'

import ToursEditLayout from "../../../layouts/account/ToursEditLayout";
import {Link, Redirect} from "react-router-dom";
import TextEditor from "../FormFields/TextEditor";
import TextArea from "../FormFields/TextArea";
import Activities from "./Activities";

const Review = ({
                secondary_nav,
                setSecondaryNav,
                tour,
                toursTypes,
                updateTour,
                tourToServer,
              }) => {

  const handleInput = (name, value) => {
    console.log(name, value)
    updateTour({
      ...tour,
      [name]: value,
    })
  }

  const handleButtonSubmit = () => {
    tourToServer(tour, tour.id)
    return <Redirect to='/account/tours/edit/review'/>
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    let arr = secondary_nav
    if (tour) {
      if (tour.description) {
        setSecondaryNav(
          arr.map(item => {
            if (item.value === 'review') {
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
        setSecondaryNav(
          arr.map(item => {
            if (item.value === 'review') {
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
      <ToursEditLayout secondary_item='review' secondary_name='Обзор'>
        <div className='my-tours-section-heading'>
          <h4>Обзор</h4>
        </div>

        <SingleWrapper label='Главные впечатления' comment='Вводить через точку с запятой.'>
          <TextArea
            action={handleInput}
            name='main_impressions'
            label=''
            value={tour && tour.main_impressions}
            rows='7'
          />
        </SingleWrapper>
        <SingleWrapper label='Описание тура' comment=''>
          <TextEditor
            action={handleInput}
            name='description'
            value={tour && tour.description}
          />
        </SingleWrapper>

        <SingleWrapper label='Ссылка на видео (youtube или vimeo)' comment=''>
          <Input
            action={handleInput}
            name='media_link'
            value={tour && tour.media_link}
            options={toursTypes}
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
            to='/account/tours/edit/main'
            onClick={handleButtonSubmit}>
            Назад
          </Link>
          <Link
            className={`add-tour-button button-success`}
            to='/account/tours/edit/prices'
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
  toursTypes: state.tours.tour_types,
  tour: state.tours.current_tour,
  tour_name: state.tours.tour_name,
  tour_leaders: state.tours.tour_leaders
})

export default connect(mapStateToProps, {
  getTourTypes,
  updateTour,
  updateTourWallpaper,
  setName,
  tourToServer,
  setSecondaryNav,
  getTourLeaders
})(Review)
import React, { useState, useEffect } from 'react'
import SingleWrapper from '../Wrappers/SingleWrapper'
import DoubleWrapper from '../Wrappers/DoubleWrapper'
import Input from '../FormFields/Input'
import NameInput from '../FormFields/NameInput'
import FileInput from '../FormFields/FileInput'
import SelectInput from '../FormFields/SelectInput'
import CheckboxInput from '../FormFields/CheckboxInput'
import Button from './Button'
import TextEditor from '../FormFields/TextEditor'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

import { connect } from 'react-redux'
import {
  setSecondaryNav,
  updateTour,
  getTourLeaders,
  updateGuestGuide,
  setGuestGuideImage,
  tourToServer,
} from '../../../redux/actions/toursActions'
import ToursEditLayout from "../../../layouts/account/ToursEditLayout";
import {Link} from "react-router-dom";


const Leader = ({
  tour,
action,
getTourLeaders,
secondary_nav,
setSecondaryNav,
updateTour,
tour_leaders,
updateGuestGuide,
setGuestGuideImage,
tourToServer,
}) => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getTourLeaders()
  }, [])

  const handleSelectInput = (name, value) => {
    updateTour({
      ...tour,
      team_member: value,
      guest_guide: null,
    })
  }
  const handleInput = (name, value) => {
    updateTour({
      ...tour,
      guest_guide: {
        ...tour.guest_guide,
        [name]: value,
      },
      team_member: null,
    })
  }

  const handleImageInput = value => {
    setLoading(true)
    setGuestGuideImage(value, tour.id)
  }

  useEffect(() => {
    if (tour && tour.guest_guide && tour.guest_guide.image && loading) {
      setLoading(false)
    }
  }, [tour, loading])

  // useEffect(() => {
  //   if (tour) {
  //     if (tour.guest_guide || tour.team_member) {
  //       let arr = secondary_nav
  //       setSecondaryNav(
  //         arr.map(item => {
  //           if (item.value === 'leader') {
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
  //       let arr = secondary_nav
  //       setSecondaryNav(
  //         arr.map(item => {
  //           if (item.value === 'leader') {
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
      <ToursEditLayout secondary_item='leader' secondary_name='Турлидер'>
      <div className='my-tours-section-heading'>
        <h4>Турлидер</h4>
      </div>

      <SingleWrapper
        label='Выберите гида из списка, либо укажите его данные ниже'
        comment={
          <div>
            <p>
              Путешественники очень расстраиваются, когда вместо обещанного гида
              видят другого.
            </p>
            <p>
              Путешественники очень расстраиваются, когда вместо обещанного гида
              видят другого. Пожалуйста, добавляйте актуальную информацию о том,
              кто будет сопровождать группу.
            </p>
            <p>
              Можно выбрать из выпадающего списка ИЛИ внести информацию в полях
              ниже.
            </p>
          </div>
        }
      >
        <SelectInput
          action={handleSelectInput}
          name='team_member'
          label='Выберите гида из списка, либо укажите его данные ниже'
          val={tour && tour.team_member}
          options={tour_leaders ? tour_leaders : []}
        />
      </SingleWrapper>

      <SingleWrapper label='Имя гида' comment=''>
        <Input
          action={handleInput}
          name='first_name'
          value={tour && tour.guest_guide && tour.guest_guide.first_name}
          // multiple
        />
      </SingleWrapper>
      <SingleWrapper label='Информация о гиде' comment=''>
        <TextEditor
          action={handleInput}
          name='about'
          value={tour && tour.guest_guide && tour.guest_guide.about}
          // multiple
        />
      </SingleWrapper>

      <SingleWrapper label='Фотография гида' comment=''>
        {!loading && (
          <FileInput
            action={handleImageInput}
            name='avatar'
            max={1}
            value={tour && tour.guest_guide && tour.guest_guide.avatar}
          />
        )}
        {loading && (
          <div className='fake-file-input loader-spinner'>
            <Box sx={{ display: 'flex' }}>
              <CircularProgress />
            </Box>
          </div>
        )}
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
          to='/account/tours/edit/day'
          onClick={handleButtonSubmit}>
          Назад
        </Link>
        <Link
          className={`add-tour-button button-success`}
          to='/account/tours/edit/conditions'
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
  tour_leaders: state.tours.tour_leaders,
})

export default connect(mapStateToProps, {
  setSecondaryNav,
  updateTour,
  getTourLeaders,
  updateGuestGuide,
  setGuestGuideImage,
  tourToServer,
})(Leader)

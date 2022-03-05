import React, { useState, useEffect } from 'react'
import SingleWrapper from '../Wrappers/SingleWrapper'
import DoubleWrapper from '../Wrappers/DoubleWrapper'
import Input from '../FormFields/Input'
import FileInput from '../FormFields/FileInput'
import RadioInput from '../FormFields/RadioInput'
import TextEditor from '../FormFields/TextEditor'
import TextArea from '../FormFields/TextArea'
import SelectInput from '../FormFields/SelectInput'
import CheckboxInput from '../FormFields/CheckboxInput'
import Button from './Button'

import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

import { connect } from 'react-redux'
import {
  getTourTypes,
  getRegions,
  getCountries,
  getRussianRegions,
  getCities,
  updateTour,
  setSecondaryNav,
  getTourLeaders,
  updateGuestGuide,
  setGuestGuideImage,
  tourToServer,
} from '../../../redux/actions/toursActions'

import Modal from './Modal'
import TrippleWrapper from '../Wrappers/TrippleWrapper'

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
  const [completed, setCompleted] = useState(false)
  const [previews, setPreviews] = useState([])
  const [leaders, setLeaders] = useState([])

  console.log(leaders)

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getTourLeaders()
  }, [])

  const handleInput = (name, value) => {
    updateTour({
      ...tour,
      guest_guide: { [name]: value },
    })
  }

  const handleImageInput = value => {
    setLoading(true)
    setGuestGuideImage(value)
  }

  useEffect(() => {
    if (previews && loading) {
      setLoading(false)
    }
  }, [previews, loading])

  const handleSelectInput = (name, value) => {
    updateTour({
      ...tour,
      team_member: value,
    })
  }

  useEffect(() => {
    if (tour.team_member) {
      updateTour({
        ...tour,
        guest_guide: null,
      })
    }
    if (tour.guest_guide) {
    }
  }, [tour])

  useEffect(() => {
    if (tour) {
      if (tour.guest_guide || tour.team_member) {
        setCompleted(true)
        let arr = secondary_nav
        setSecondaryNav(
          arr.map(item => {
            if (item.value === 'leader') {
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
            if (item.value === 'common') {
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
    action('conditions')
  }

  const handleButtonBack = () => {
    // action('details')
    action('day')
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
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
          val={tour.team_member}
          options={tour_leaders}
          // multiple
        />
      </SingleWrapper>
      <>
        <SingleWrapper label='Имя гида' comment=''>
          <Input
            action={handleInput}
            name='leader_name'
            value={tour && tour.guest_guide && tour.guest_guide.leader_name}
            // multiple
          />
        </SingleWrapper>
        <SingleWrapper label='Информация о гиде' comment=''>
          <TextEditor
            action={handleInput}
            name='leader_info'
            value={tour && tour.guest_guide && tour.guest_guide.leader_info}
            // multiple
          />
        </SingleWrapper>
        <SingleWrapper label='Фотография гида' comment=''>
          {!loading && (
            <FileInput
              action={handleImageInput}
              name='leader_photo'
              value={tour && tour.guest_guide && tour.guest_guide.image}
              type='file'
              // multiple
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
      </>

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
  tour_leaders: state.tours.tour_leaders,
})

export default connect(mapStateToProps, {
  getTourTypes,
  getRegions,
  getCountries,
  getRussianRegions,
  getCities,
  setSecondaryNav,
  updateTour,
  getTourLeaders,
  updateGuestGuide,
  setGuestGuideImage,
  tourToServer,
})(Leader)

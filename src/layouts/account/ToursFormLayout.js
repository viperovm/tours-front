import React, {useState, useEffect} from 'react'
import {useHistory} from "react-router-dom";
import {connect} from 'react-redux'

import {
  getTourTypes,
  updateTour,
  updateTourWallpaper,
  setName,
  tourToServer,
  getTour,
  getCurrencies,
  getCities,
  getTourPropertyTypes,
  getTourAccomodations,
  getLanguages, setKey, clearErrors,
  tourToServerError,
  clearCurrentTour,
} from '../../redux/actions/toursActions'

import ToursEditLayout from "../../layouts/account/ToursEditLayout";
import {getTeamMembers} from "../../redux/actions/profileActions";
import isNotEmptyObject from "../../helpers/isNotEmptyObject";
import CircularProgress from "@mui/material/CircularProgress";
import PopUp from "../../components/PopUp/PopUp";
import SubmitButton from "../../components/AccountTours/Components/SubmitButton";
import axios from "axios";
import {UPDATE_TOUR_FAIL, UPDATE_TOUR_SUCCESS} from "../../redux/types";

const ToursFormLayout = ({
                           section_slug,
                           section_name,
                           tour_id,
                           forward_url,
                           backward_url,
                           submit_url,
                           children,
                           tour,
                           getCurrencies,
                           getCities,
                           getTourPropertyTypes,
                           getTourAccomodations,
                           getLanguages,
                           getTourTypes,
                           getTeamMembers,
                           getTour,
                           setKey,
                           clearErrors,
                           tourToServerError,
                           tourToServer,
                           clearCurrentTour,
                         }) => {

  const history = useHistory()
  const [loading, setLoading] = useState(false)
  const [activePopUp, setActivePopUp] = useState(false)
  const [status, setStatus] = useState(false)
  const [direction, setDirection] = useState('')

  useEffect(() => {
    window.scrollTo(0, 0)
    getTourTypes()
    getTeamMembers()
    getCurrencies()
    getCities()
    getTourPropertyTypes()
    getTourAccomodations()
    getLanguages()
    return () => clearErrors()
  }, [])

  useEffect(() => {
    if(status){
      if(direction == 'forward') {
        history.push(`/account/tours/${tour_id}/edit/${forward_url}`)
      } else if(direction == 'backward') {
        history.push(`/account/tours/${tour_id}/edit/${backward_url}`)
      } else if(direction == 'submit') {
        history.push(submit_url)
      }
    }
  }, [status])

  const toServer = async (section) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${localStorage.getItem('access')}`,
        Accept: 'application/json',
      },
    }

    if (tour && tour.wallpaper) {
      delete tour.wallpaper
    }

    if (tour && tour.tmb_wallpaper) {
      delete tour.tmb_wallpaper
    }

    const getData = () => {
      if(direction == 'submit') {
        return {
          ...tour,
          is_draft: false,
          on_moderation: true,
        }
      } else {
        return {
          ...tour,
          section: section,
        }
      }
    }

    const data = await getData()

    const body = JSON.stringify(data)

    try {
      const res = await axios.patch(`${process.env.REACT_APP_API_URL}/api/tours/${tour_id}/`, body, config)

      setStatus(true)

      tourToServer(res.data)


    } catch (err) {

      const errStatus = err.response.status
      const errData = err.response.data
      tourToServerError(errData)
      errStatus >= 400 && errStatus < 500 ? setKey(Object.keys(errData)[0]) : setActivePopUp(true)
    }
  }

  const toModeration = async () => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${localStorage.getItem('access')}`,
        Accept: 'application/json',
      },
    }

    if (tour && tour.wallpaper) {
      delete tour.wallpaper
    }

    if (tour && tour.tmb_wallpaper) {
      delete tour.tmb_wallpaper
    }

    const data = {
      ...tour,
      is_draft: false,
      on_moderation: true,
    }

    const body = JSON.stringify(data)

    try {
      await axios.patch(`${process.env.REACT_APP_API_URL}/api/tours/${tour_id}/`, body, config)
        .then(() => history.push(submit_url))
        .then(() => clearCurrentTour())

    } catch (err) {

      const errStatus = err.response.status
      const errData = err.response.data
      tourToServerError(errData)
      errStatus >= 400 && errStatus < 500 ? setKey(Object.keys(errData)[0]) : setActivePopUp(true)
    }
  }


  // useEffect(() => {
  //   if (status === 'ok') {
  //     if (direction === 'forward') {
  //       handleOk(forward_url)
  //     } else if (direction === 'backward') {
  //       handleOk(backward_url)
  //     } else if (direction === 'submit') {
  //       history.push(submit_url)
  //     }
  //   } else if (status === 'error') {
  //     setKey(Object.keys(error)[0])
  //   } else if (status === 'popup') {
  //     setActivePopUp(true)
  //   }
  // }, [status, direction, error])
  //
  // const handleOk = (url) => {
  //   history.push(`/account/tours/${tour_id}/edit/${url}`)
  // }

  useEffect(() => {
    const loadTour = async () => {
      setLoading(true)
      await getTour(tour_id)
    }
    if (!isNotEmptyObject(tour) && direction !== 'submit') {
      loadTour().then(() => setLoading(false))
    }
  }, [tour, direction])


  return (
    <>
      <ToursEditLayout secondary_item={section_slug} secondary_name={section_name} tour_id={tour_id}>
        {activePopUp && <PopUp status={'cancel'} title={'Упс... Что-то пошло не так'}
                               text={'Попробуйте заново внести всю информацию на странице и нажать "Продолжить"'}
                               button={'Ок'} action={() => {
          setActivePopUp(false)
        }}/>}
        <div className='my-tours-section-heading'>
          <h4>{section_name}</h4>
        </div>
        {!loading &&
          <>
            {children}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '66%',
              }}
            >
              {backward_url && <SubmitButton
                text={'Назад'}
                color={'button-primary'}
                section={section_slug}
                direction={'backward'}
                action={toServer}
                action2={setDirection}
              />}
              {forward_url && <SubmitButton
                text={'Продолжить'}
                color={'button-success'}
                section={section_slug}
                direction={'forward'}
                action={toServer}
                action2={setDirection}
              />}
              {submit_url && <SubmitButton
                text={'На модерацию'}
                color={'button-success'}
                section={section_slug}
                direction={'submit'}
                action={toModeration}
                action2={setDirection}
              />}

            </div>
          </>}
        {loading && (
          <>
            <div className='form-loader-spinner'>
              <CircularProgress/>
            </div>
          </>
        )}

      </ToursEditLayout>
    </>
  )
}

const mapStateToProps = state => ({
  toursTypes: state.tours.tour_types,
  tour: state.tours.current_tour,
  res_status: state.tours.res_status,
  tour_name: state.tours.tour_name,
  members: state.profile.members,
})

export default connect(mapStateToProps, {
  getTourTypes,
  updateTour,
  updateTourWallpaper,
  setName,
  tourToServer,
  getTeamMembers,
  getTour,
  getCurrencies,
  getCities,
  getTourPropertyTypes,
  getTourAccomodations,
  getLanguages,
  setKey,
  clearErrors,
  tourToServerError,
  clearCurrentTour,
})(ToursFormLayout)

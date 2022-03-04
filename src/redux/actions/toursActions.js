import {
  GET_TOUR_TYPES_SUCCESS,
  GET_TOUR_TYPES_FAIL,
  ADD_TOUR_SUCCESS,
  ADD_TOUR_FAIL,
  GET_TOUR_PROPERTY_TYPES_SUCCESS,
  GET_TOUR_PROPERTY_TYPES_FAIL,
  GET_TOUR_ACCOMODATIONS_SUCCESS,
  GET_TOUR_ACCOMODATIONS_FAIL,
  UPDATE_TOUR_SUCCESS,
  UPDATE_TOUR_FAIL,
  GET_REGIONS_SUCCESS,
  GET_REGIONS_FAIL,
  GET_START_COUNTRIES_SUCCESS,
  GET_FINISH_COUNTRIES_SUCCESS,
  GET_COUNTRIES_FAIL,
  GET_START_RUSSIAN_REGIONS_SUCCESS,
  GET_FINISH_RUSSIAN_REGIONS_SUCCESS,
  GET_RUSSIAN_REGIONS_FAIL,
  GET_START_CITIES_SUCCESS,
  GET_FINISH_CITIES_SUCCESS,
  GET_CITIES_FAIL,
  GET_TOUR_SUCCESS,
  GET_TOUR_FAIL,
  CLEAR_CURRENT_TOUR,
  CLEAR_CURRENT_TOUR_FAIL,
  GET_CURRENCIES_SUCCESS,
  GET_CURRENCIES_FAIL,
  GET_LANGUAGES_SUCCESS,
  GET_LANGUAGES_FAIL,
  SET_PROPERTY_IMAGE_SUCCESS,
  SET_PROPERTY_IMAGE_FAIL,
  SET_TOUR_DAY_IMAGE_SUCCESS,
  SET_TOUR_DAY_IMAGE_FAIL,
  ADD_DAY_SUCCESS,
  ADD_DAY_FAIL,
  UPDATE_DAY_SUCCESS,
  UPDATE_DAY_FAIL,
  SET_TOUR_IMAGE_SUCCESS,
  SET_TOUR_IMAGE_FAIL,
  GET_TOURS_SUCCESS,
  GET_TOURS_FAIL,
  ADD_ACTIVITY_SUCCESS,
  ADD_ACTIVITY_FAIL,
  UPDATE_ACTIVITY_SUCCESS,
  UPDATE_ACTIVITY_FAIL,
  SET_ACTIVITY_IMAGE_SUCCESS,
SET_ACTIVITY_IMAGE_FAIL,
  GET_TOUR_LEADERS_SUCCESS,
  GET_TOUR_LEADERS_FAIL,
  SET_CURRENT_SECTION,
  SET_ACTIVE_SECTION,
  DELETE_ACTIVE_SECTION,
  SET_SECONDARY_NAV,
  OPEN_SECONDARY_MENU,
  SET_TOUR_NAME,
  UPDATE_LOCAL_TOUR_SUCCESS,
  SET_EDITING,
  DELETE_TOUR,
  DELETE_TOUR_FAIL,
} from '../types'
import axios from 'axios'

import { set_tour } from './currentTourActions'

const API_URL = 'http://x3mart.ru'

export const addTour = data => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${localStorage.getItem('access')}`,
      Accept: 'application/json',
    },
  }

  const body = JSON.stringify(data)

  try {
    const res = await axios.post(`${API_URL}/api/tours/`, body, config)

    dispatch({
      type: ADD_TOUR_SUCCESS,
      payload: res.data,
    })
    // dispatch(set_tour(res.data))
  } catch (err) {
    dispatch({
      type: ADD_TOUR_FAIL,
    })
  }
}

export const getTours = () => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${localStorage.getItem('access')}`,
      Accept: 'application/json',
    },
  }

  try {
    const res = await axios.get(`${API_URL}/api/tours/`, config)

    dispatch({
      type: GET_TOURS_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: GET_TOURS_FAIL,
    })
  }
}

export const tourToServer = (data, id) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${localStorage.getItem('access')}`,
      Accept: 'application/json',
    },
  }

  if (data && data.wallpaper) {
    delete data.wallpaper
  }

  if (data && data.tmb_wallpaper) {
    delete data.tmb_wallpaper
  }

  const body = JSON.stringify(data)

  try {
    const res = await axios.patch(`${API_URL}/api/tours/${id}/`, body, config)

    dispatch({
      type: UPDATE_TOUR_SUCCESS,
      payload: res.data,
    })
    // dispatch(set_tour(res.data))
  } catch (err) {
    dispatch({
      type: UPDATE_TOUR_FAIL,
    })
  }
}

export const updateTour = data => async dispatch => {
  dispatch({
    type: UPDATE_LOCAL_TOUR_SUCCESS,
    payload: data,
  })
}

export const getTour = id => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${localStorage.getItem('access')}`,
      Accept: 'application/json',
    },
  }

  try {
    const res = await axios.get(`${API_URL}/api/tours/${id}`, config)

    dispatch({
      type: GET_TOUR_SUCCESS,
      payload: res.data,
    })
    // dispatch(set_tour(res.data))
  } catch (err) {
    dispatch({
      type: GET_TOUR_FAIL,
    })
  }
}

export const deleteTour = id => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${localStorage.getItem('access')}`,
      Accept: 'application/json',
    },
  }

  try {
    await axios.delete(`${API_URL}/api/tours/${id}/`, config)

    dispatch({
      type: DELETE_TOUR,
    })
    dispatch(clearCurrentTour())
  } catch (err) {
    dispatch({
      type: DELETE_TOUR_FAIL,
    })
  }
}

export const updateTourWallpaper = (image, id) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `JWT ${localStorage.getItem('access')}`,
    },
  }

  let form_data = new FormData()

  form_data.append('wallpaper', image, image.name)

  try {
    const res = await axios.patch(
      `${API_URL}/api/tours/${id}/`,
      form_data,
      config
    )

    dispatch({
      type: UPDATE_TOUR_SUCCESS,
      payload: res.data,
    })
    dispatch(set_tour(res.data))
  } catch (err) {
    dispatch({
      type: UPDATE_TOUR_FAIL,
    })
  }
}

export const setTourImages = (image, id) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `JWT ${localStorage.getItem('access')}`,
    },
  }
  let form_data = new FormData()
  form_data.append('image', image, image.name)
  form_data.append('tour', id)
  try {
    const res = await axios.post(
      `${API_URL}/api/tourimages/`,
      form_data,
      config
    )

    dispatch({
      type: SET_TOUR_IMAGE_SUCCESS,
      payload: res.data,
    })
    // dispatch(getTour(id))
  } catch (err) {
    dispatch({
      type: SET_TOUR_IMAGE_FAIL,
    })
  }
}

export const addDay = data => dispatch => {
  
  dispatch({
    type: ADD_DAY_SUCCESS,
    payload: data,
  })

}

export const updateDay = (id, name, data) => async dispatch => {

  const day = { id: id, name: name, data: data }
  dispatch({
    type: UPDATE_DAY_SUCCESS,
    payload: day,
  })

}

export const setDayImage = (image, id) => async dispatch => {

  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `JWT ${localStorage.getItem('access')}`,
    },
  }
  console.log(image)
  let form_data = new FormData()
  form_data.append('image', image, image.name)
  try {
    const res = await axios.post(
      `${API_URL}/api/tourdayimages/`,
      form_data,
      config
    )

    let data = { id: id, image: res.data }

    dispatch({
      type: SET_TOUR_DAY_IMAGE_SUCCESS,
      payload: data,
    })
    // dispatch(getTour(id))
  } catch (err) {
    dispatch({
      type: SET_TOUR_DAY_IMAGE_FAIL,
    })
  }

}

export const addActivity = data => dispatch => {
  const activity = data ? data : ''
  console.log('activity: ', activity)
  dispatch({
    type: ADD_ACTIVITY_SUCCESS,
    payload: activity,
  })
}

export const updateActivity = (id, data) => dispatch => {
  const description = { id: id, description: data }
  dispatch({
    type: UPDATE_ACTIVITY_SUCCESS,
    payload: description,
  })
}
export const setActivityImage = (image, id) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `JWT ${localStorage.getItem('access')}`,
    },
  }
  console.log(image)
  let form_data = new FormData()
  form_data.append('image', image, image.name)
  try {
    const res = await axios.post(
      `${API_URL}/api/tourplanimages/`,
      form_data,
      config
    )

    let data = {id: id, image: res.data}

    dispatch({
      type: SET_ACTIVITY_IMAGE_SUCCESS,
      payload: data,
    })
    // dispatch(getTour(id))
  } catch (err) {
    dispatch({
      type: SET_ACTIVITY_IMAGE_FAIL,
    })
  }
}

export const setPropertyImage = (image, id) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `JWT ${localStorage.getItem('access')}`,
    },
  }
  let form_data = new FormData()
  form_data.append('image', image, image.name)
  form_data.append('tour', id)
  try {
    const res = await axios.post(
      `${API_URL}/api/tourpropertyimages/`,
      form_data,
      config
    )

    dispatch({
      type: SET_PROPERTY_IMAGE_SUCCESS,
      payload: res.data,
    })
    // dispatch(getTour(id))
  } catch (err) {
    dispatch({
      type: SET_PROPERTY_IMAGE_FAIL,
    })
  }
}

export const getTourTypes = () => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  try {
    const res = await axios.get(`${API_URL}/api/tourtypes/`, config)

    dispatch({
      type: GET_TOUR_TYPES_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: GET_TOUR_TYPES_FAIL,
    })
  }
}

export const getRegions = () => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${localStorage.getItem('access')}`,
      Accept: 'application/json',
    },
  }

  try {
    const res = await axios.get(`${API_URL}/api/regions/`, config)

    dispatch({
      type: GET_REGIONS_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: GET_REGIONS_FAIL,
    })
  }
}

export const getCountries = (region_id, option) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${localStorage.getItem('access')}`,
      Accept: 'application/json',
    },
  }

  try {
    const res = await axios.get(
      `${API_URL}/api/countries/?region=${region_id}`,
      config
    )

    if (option === 'start') {
      dispatch({
        type: GET_START_COUNTRIES_SUCCESS,
        payload: res.data,
      })
    } else if (option === 'finish') {
      dispatch({
        type: GET_FINISH_COUNTRIES_SUCCESS,
        payload: res.data,
      })
    }
  } catch (err) {
    dispatch({
      type: GET_COUNTRIES_FAIL,
    })
  }
}

export const getRussianRegions = option => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${localStorage.getItem('access')}`,
      Accept: 'application/json',
    },
  }

  try {
    const res = await axios.get(`${API_URL}/api/russianregions/`, config)

    if (option === 'start') {
      dispatch({
        type: GET_START_RUSSIAN_REGIONS_SUCCESS,
        payload: res.data,
      })
    } else if (option === 'finish') {
      dispatch({
        type: GET_FINISH_RUSSIAN_REGIONS_SUCCESS,
        payload: res.data,
      })
    }
  } catch (err) {
    dispatch({
      type: GET_RUSSIAN_REGIONS_FAIL,
    })
  }
}

export const getCities =
  (option, country_id, russian_region = false) =>
  async dispatch => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${localStorage.getItem('access')}`,
        Accept: 'application/json',
      },
    }

    const request = `?country=${country_id}${
      russian_region ? '&russian_region=' + russian_region : ''
    }`

    try {
      const res = await axios.get(`${API_URL}/api/cities/${request}`, config)

      if (option === 'start') {
        dispatch({
          type: GET_START_CITIES_SUCCESS,
          payload: res.data,
        })
      } else if (option === 'finish') {
        dispatch({
          type: GET_FINISH_CITIES_SUCCESS,
          payload: res.data,
        })
      }
    } catch (err) {
      dispatch({
        type: GET_CITIES_FAIL,
      })
    }
  }

export const getCurrencies = () => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${localStorage.getItem('access')}`,
      Accept: 'application/json',
    },
  }

  try {
    const res = await axios.get(`${API_URL}/api/currencies/`, config)

    dispatch({
      type: GET_CURRENCIES_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: GET_CURRENCIES_FAIL,
    })
  }
}

export const getLanguages = () => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${localStorage.getItem('access')}`,
      Accept: 'application/json',
    },
  }

  try {
    const res = await axios.get(`${API_URL}/api/languages/`, config)

    dispatch({
      type: GET_LANGUAGES_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: GET_LANGUAGES_FAIL,
    })
  }
}

export const getTourPropertyTypes = () => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  try {
    const res = await axios.get(`${API_URL}/api/tourpropertytypes/`, config)

    dispatch({
      type: GET_TOUR_PROPERTY_TYPES_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: GET_TOUR_PROPERTY_TYPES_FAIL,
    })
  }
}

export const getTourAccomodations = () => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  try {
    const res = await axios.get(`${API_URL}/api/touraccomodations/`, config)

    dispatch({
      type: GET_TOUR_ACCOMODATIONS_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: GET_TOUR_ACCOMODATIONS_FAIL,
    })
  }
}

export const getTourLeaders = () => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  try {
    const res = await axios.get(`${API_URL}/api/teammembers/`, config)

    dispatch({
      type: GET_TOUR_LEADERS_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: GET_TOUR_LEADERS_FAIL,
    })
  }
}

export const clearCurrentTour = () => async dispatch => {
  dispatch({
    type: CLEAR_CURRENT_TOUR,
  })
}

export const setCurrentSection = str => dispatch => {
  dispatch({
    type: SET_CURRENT_SECTION,
    payload: str,
  })
}

export const setActiveSections = (status, str) => async dispatch => {
  let type = status ? SET_ACTIVE_SECTION : DELETE_ACTIVE_SECTION
  dispatch({
    type: type,
    payload: str,
  })
}

export const setSecondaryNav = data => async dispatch => {
  dispatch({
    type: SET_SECONDARY_NAV,
    payload: data,
  })
}

export const openSecondaryMenu = bool => async dispatch => {
  dispatch({
    type: OPEN_SECONDARY_MENU,
    payload: bool,
  })
}

export const setName = data => async dispatch => {
  dispatch({
    type: SET_TOUR_NAME,
    payload: data,
  })
}

export const setEditing = bool => async dispatch => {
  dispatch({
    type: SET_EDITING,
    payload: bool,
  })
}

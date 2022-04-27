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
  UPDATE_GUEST_GUIDE_SUCCESS,
  SET_GUEST_GUIDE_IMAGE_SUCCESS,
  SET_GUEST_GUIDE_IMAGE_FAIL,
  ADD_EXTRA_SERVICE_SUCCESS,
  UPDATE_EXTRA_SERVICE_SUCCESS,
  UPDATE_TOUR_WALLPAPER_SUCCESS,
  UPDATE_TOUR_WALLPAPER_FAIL,
  DELETE_TOUR_WALLPAPER_SUCCESS,
  DELETE_TOUR_WALLPAPER_FAIL,
  COPY_TOUR_SUCCESS,
  COPY_TOUR_FAIL,
  GET_TOUR_PREVIEW_SUCCESS,
  GET_TOUR_PREVIEW_FAIL,
  SET_PAGE,
  GET_CITIES_SUCCESS,
  DELETE_TOUR_IMAGE_SUCCESS,
  DELETE_TOUR_IMAGE_FAIL,
  DELETE_PROPERTY_IMAGE_SUCCESS,
  DELETE_PROPERTY_IMAGE_FAIL,
  DELETE_TOUR_DAY_IMAGE,
  CLEAR_ERRORS,
  SET_KEY,
  DELETE_KEY,
  DELETE_ACTIVITY_IMAGE,
  REMOVE_DAY_SUCCESS,
  REMOVE_ACTIVITY_SUCCESS,
  GET_ALL_TOURS_SUCCESS,
  GET_ALL_TOURS_FAIL,
  GET_LEGAL_DOCS_SUCCESS,
  GET_LEGAL_DOCS_FAIL,
  GET_LEGAL_DOC_SUCCESS,
  GET_LEGAL_DOC_FAIL,
} from '../types'
import axios from 'axios'
import {isNotEmptyObject} from "../../functions";

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
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/tours/`, body, config)

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

export const copyTour = (id, date) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${localStorage.getItem('access')}`,
      Accept: 'application/json',
    },
  }

  const body = JSON.stringify(date)

  try {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/tours/${id}/tourcopy/`, body, config)

    dispatch({
      type: COPY_TOUR_SUCCESS,
      payload: res.data,
    })
    // dispatch(set_tour(res.data))
  } catch (err) {
    dispatch({
      type: COPY_TOUR_FAIL,
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
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/tours/tour_set/`, config)

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

export const getAllTours = () => async dispatch => {
  const config = localStorage.getItem('access') ? {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${localStorage.getItem('access')}`,
      Accept: 'application/json',
    },
  } :
    {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }
    }


  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/tours/`, config)

    dispatch({
      type: GET_ALL_TOURS_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: GET_ALL_TOURS_FAIL,
    })
  }
}

export const tourToServer = (
  // data, id
  payload
) => async dispatch => {
  // const config = {
  //   headers: {
  //     'Content-Type': 'application/json',
  //     Authorization: `JWT ${localStorage.getItem('access')}`,
  //     Accept: 'application/json',
  //   },
  // }
  //
  // if (data && data.wallpaper) {
  //   delete data.wallpaper
  // }
  //
  // if (data && data.tmb_wallpaper) {
  //   delete data.tmb_wallpaper
  // }
  //
  // const body = JSON.stringify(data)
  //
  // try {
  //   const res = await axios.patch(`${process.env.REACT_APP_API_URL}/api/tours/${id}/`, body, config)
  //
  //   const payload = {data: res.data, id: id, status: res.status}

    dispatch({
      type: UPDATE_TOUR_SUCCESS,
      payload: payload,
    })
    // dispatch(set_tour(res.data))
  // } catch (err) {
  //   dispatch({
  //     type: UPDATE_TOUR_FAIL,
  //     payload: {status: err.response.status, data: err.response.data},
  //   })
  // }
}

export const tourToServerUpdate = ( data, id ) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${localStorage.getItem('access')}`,
      Accept: 'application/json',
    },
  }
  //
  // if (data && data.wallpaper) {
  //   delete data.wallpaper
  // }
  //
  // if (data && data.tmb_wallpaper) {
  //   delete data.tmb_wallpaper
  // }

  if (data && data.plan && data.plan.length > 0) {
    let arr = data.plan.filter(item => isNotEmptyObject(item.image) || item.description)
    data = {
      ...data,
      plan: arr,
    }
  }

  const body = JSON.stringify(data)

  try {
    const res = await axios.patch(`${process.env.REACT_APP_API_URL}/api/tours/${id}/`, body, config)

  dispatch({
    type: UPDATE_TOUR_SUCCESS,
    payload: res.data,
  })
  } catch (err) {
    dispatch({
      type: UPDATE_TOUR_FAIL,
      payload: {status: err.response.status, data: err.response.data},
    })
  }
}

export const tourToServerError = (error) => async dispatch => {

  dispatch({
    type: UPDATE_TOUR_FAIL,
    payload: error,
  })
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
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/tours/${id}`, config)

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

export const getTourReview = id => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${localStorage.getItem('access')}`,
      Accept: 'application/json',
    },
  }

  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/tours/${id}/preview/`, config)

    dispatch({
      type: GET_TOUR_PREVIEW_SUCCESS,
      payload: res.data,
    })
    // dispatch(set_tour(res.data))
  } catch (err) {
    dispatch({
      type: GET_TOUR_PREVIEW_FAIL,
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
    await axios.delete(`${process.env.REACT_APP_API_URL}/api/tours/${id}/`, config)

    dispatch({
      type: DELETE_TOUR,
      payload: id,
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
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/tours/${id}/wallpaper/`,
      form_data,
      config
    )


    dispatch({
      type: UPDATE_TOUR_WALLPAPER_SUCCESS,
      payload: res.data,
    })
    dispatch(set_tour(res.data))
  } catch (err) {
    dispatch({
      type: UPDATE_TOUR_WALLPAPER_FAIL,
    })
  }
}

export const deleteTourWallpaper = (id) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `JWT ${localStorage.getItem('access')}`,
    },
  }

  try {
    const res = await axios.delete(
      `${process.env.REACT_APP_API_URL}/api/tours/${id}/wallpaper/`,
      config
    )

    dispatch({
      type: DELETE_TOUR_WALLPAPER_SUCCESS,
    })
    dispatch(set_tour(res.data))
  } catch (err) {
    dispatch({
      type: DELETE_TOUR_WALLPAPER_FAIL,
    })
  }
}

export const setTourImages = (image, id) => async dispatch => {
  // const config = {
  //   headers: {
  //     'Content-Type': 'multipart/form-data',
  //     Authorization: `JWT ${localStorage.getItem('access')}`,
  //   },
  // }
  // let form_data = new FormData()
  // form_data.append('image', image, image.name)
  // try {
  //   const res = await axios.post(
  //     `${process.env.REACT_APP_API_URL}/api/tours/${id}/gallary/`,
  //     form_data,
  //     config
  //   )
  //


  dispatch({
    type: SET_TOUR_IMAGE_SUCCESS,
    payload: image,
    // payload: res.data,
  })
    // dispatch(getTour(id))
  // } catch (err) {
  //   dispatch({
  //     type: SET_TOUR_IMAGE_FAIL,
  //   })
  // }
}

export const deleteTourImage = (image, id) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${localStorage.getItem('access')}`,
      Accept: 'application/json',
    },
  }

  const body = JSON.stringify(image)

  try {
    await axios.patch(
      `${process.env.REACT_APP_API_URL}/api/tours/${id}/gallary/`,
      body,
      config
    )

    dispatch({
      type: DELETE_TOUR_IMAGE_SUCCESS,
      payload: image,
    })
  } catch (err) {
    dispatch({
      type: DELETE_TOUR_IMAGE_FAIL,
    })
  }
}

export const addDay = data => dispatch => {
  dispatch({
    type: ADD_DAY_SUCCESS,
    payload: data,
  })
}

export const removeDay = id => dispatch => {
  dispatch({
    type: REMOVE_DAY_SUCCESS,
    payload: id,
  })
}

export const updateDay = (id, name, data) => async dispatch => {
  const day = { id: id, name: name, data: data }
  dispatch({
    type: UPDATE_DAY_SUCCESS,
    payload: day,
  })
}

export const addExtraService = data => dispatch => {
  dispatch({
    type: ADD_EXTRA_SERVICE_SUCCESS,
    payload: data,
  })
}

export const updateExtraService = (id, name, data) => async dispatch => {
  const day = { id: id, name: name, data: data }
  dispatch({
    type: UPDATE_EXTRA_SERVICE_SUCCESS,
    payload: day,
  })
}

export const setDayImage = (image, id, tour_id) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `JWT ${localStorage.getItem('access')}`,
    },
  }
  let form_data = new FormData()
  form_data.append('image', image, image.name)
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/tours/${tour_id}/dayimages/`,
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

export const deleteDayImage = (day_id, image_id) => async dispatch => {
  dispatch({
    type: DELETE_TOUR_DAY_IMAGE,
    payload: {day: day_id, image: image_id},
  })
}

export const addActivity = data => dispatch => {
  const activity = data ? data : ''
  dispatch({
    type: ADD_ACTIVITY_SUCCESS,
    payload: activity,
  })
}


export const removeActivity = id => dispatch => {
  dispatch({
    type: REMOVE_ACTIVITY_SUCCESS,
    payload: id,
  })
}

export const updateActivity = (id, data) => dispatch => {
  const description = { id: id, description: data }
  dispatch({
    type: UPDATE_ACTIVITY_SUCCESS,
    payload: description,
  })
}

export const setActivityImage = (image, id, tour_id) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `JWT ${localStorage.getItem('access')}`,
    },
  }
  let form_data = new FormData()
  form_data.append('image', image, image.name)
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/tours/${tour_id}/planimages/`,
      form_data,
      config
    )

    let data = { id: id, image: res.data }

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

export const deleteActivityImage = (id) => dispatch => {
  dispatch({
    type: DELETE_ACTIVITY_IMAGE,
    payload: id,
  })
}

export const updateGuestGuide = data => dispatch => {
  dispatch({
    type: UPDATE_GUEST_GUIDE_SUCCESS,
    payload: data,
  })
}

export const setGuestGuideImage = (image, id) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `JWT ${localStorage.getItem('access')}`,
    },
  }
  let form_data = new FormData()
  form_data.append('image', image, image.name)
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/tours/${id}/guestguideimages/`,
      form_data,
      config
    )


    dispatch({
      type: SET_GUEST_GUIDE_IMAGE_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: SET_GUEST_GUIDE_IMAGE_FAIL,
    })
  }
}

export const setPropertyImage = (
  data
  // image, id
) => async dispatch => {
  // const config = {
  //   headers: {
  //     'Content-Type': 'multipart/form-data',
  //     Authorization: `JWT ${localStorage.getItem('access')}`,
  //   },
  // }
  // let form_data = new FormData()
  // form_data.append('image', image, image.name)
  // try {
  //   const res = await axios.post(
  //     `${process.env.REACT_APP_API_URL}/api/tours/${id}/propertyimages/`,
  //     form_data,
  //     config
  //   )

    dispatch({
      type: SET_PROPERTY_IMAGE_SUCCESS,
      payload: data,
    })
    // dispatch(getTour(id))
  // } catch (err) {
  //   dispatch({
  //     type: SET_PROPERTY_IMAGE_FAIL,
  //   })
  // }
}

export const deletePropertyImage = (image, id) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${localStorage.getItem('access')}`,
      Accept: 'application/json',
    },
  }

  const body = JSON.stringify(image)

  try {
    await axios.patch(
      `${process.env.REACT_APP_API_URL}/api/tours/${id}/propertyimages/`,
      body,
      config
    )

    dispatch({
      type: DELETE_PROPERTY_IMAGE_SUCCESS,
      payload: image,
    })
  } catch (err) {
    dispatch({
      type: DELETE_PROPERTY_IMAGE_FAIL,
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
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/tourtypes/`, config)

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
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/regions/`, config)

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
      `${process.env.REACT_APP_API_URL}/api/countries/?region=${region_id}`,
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
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/russianregions/`, config)

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

export const getCities = (data) => async dispatch => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${localStorage.getItem('access')}`,
        Accept: 'application/json',
      },
    }
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/cities/?search=${data}`, config)

      dispatch({
        type: GET_CITIES_SUCCESS,
        payload: res.data,
      })
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
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/currencies/`, config)

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
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/languages/`, config)

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
      Authorization: `JWT ${localStorage.getItem('access')}`,
      Accept: 'application/json',
    },
  }

  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/tourpropertytypes/`, config)

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
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/touraccomodations/`, config)

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
      Authorization: `JWT ${localStorage.getItem('access')}`,
      Accept: 'application/json',
    },
  }

  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/teammembers/`, config)


    const guides = res.data.map(item => ({
      id: item.id,
      name: item.first_name + ' ' + item.last_name,
    }))

    dispatch({
      type: GET_TOUR_LEADERS_SUCCESS,
      payload: guides,
    })
  } catch (err) {
    dispatch({
      type: GET_TOUR_LEADERS_FAIL,
    })
  }
}

export const clearCurrentTour = () => dispatch => {
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

export const setPage = page => async dispatch => {
  dispatch({
    type: SET_PAGE,
    payload: page,
  })
}

export const clearErrors = () => async dispatch => {
  dispatch({
    type: CLEAR_ERRORS,
  })
}

export const setKey = key => async dispatch => {
  dispatch({
    type: SET_KEY,
    payload: key,
  })
}

export const deleteKey = () => async dispatch => {
  dispatch({
    type: DELETE_KEY,
  })
}

export const getLegalDocs = () => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      // Authorization: `JWT ${localStorage.getItem('access')}`,
      Accept: 'application/json',
    },
  }

  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/legals/`, config)

    dispatch({
      type: GET_LEGAL_DOCS_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: GET_LEGAL_DOCS_FAIL,
    })
  }
}

export const getLegalDoc = (slug) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${localStorage.getItem('access')}`,
      Accept: 'application/json',
    },
  }

  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/legals/${slug}/`, config)

    dispatch({
      type: GET_LEGAL_DOC_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: GET_LEGAL_DOC_FAIL,
    })
  }
}

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
  UPDATE_GUEST_GUIDE_SUCCESS,
  SET_GUEST_GUIDE_IMAGE_SUCCESS,
  SET_GUEST_GUIDE_IMAGE_FAIL,
  ADD_EXTRA_SERVICE_SUCCESS,
  UPDATE_EXTRA_SERVICE_SUCCESS,
} from '../types'

const initialState = {
  tours: [],
  current_tour: {},
  tour_types: [],
  regions: [],
  start_countries: [],
  start_russian_regions: [],
  start_cities: [],
  finish_countries: [],
  finish_russian_regions: [],
  finish_cities: [],
  currencies: [],
  languages: [],
  tour_property_types: [],
  tour_accomodations: [],
  plan: [],
  tour_leaders: [],
  current_section: 'common',
  active_sections: [],
  secondary_nav: [
    { value: 'common', text: 'Общее', active: false },
    { value: 'prices', text: 'Цены и даты', active: false },
    { value: 'options', text: 'Условия отмены', active: false },
    { value: 'details', text: 'Детали', active: false },
    { value: 'day', text: 'День за днем', active: false },
    { value: 'leader', text: 'Турлидер', active: false },
    { value: 'conditions', text: 'Условия', active: false },
    { value: 'services', text: 'Доп. услуги', active: false },
    { value: 'important', text: 'Важно знать', active: false },
    { value: 'photos', text: 'Фотографии', active: false },
  ],
  secondary: false,
  tour_name: '',
  editing: false,
}

const toursReducer = (state = initialState, action) => {
  const { type, payload } = action

  const setPropertyImages = (tour, image) => {
    let arr = [...tour.tour_property_images]
    arr.push(image)
    tour = {
      ...tour,
      tour_property_images: arr,
    }
    return tour
  }
  const setTourImages = (tour, image) => {
    let arr = [...tour.tour_images]
    arr.push(image)
    tour = {
      ...tour,
      tour_images: arr,
    }
    return tour
  }

  const setDay = (tour, day) => {
    let result = {}
    if (Array.isArray(tour.tour_days)) {
      let arr = [...tour.tour_days]
      arr.push(day)
      result = {
        ...tour,
        tour_days: arr,
      }
    } else {
      let arr = []
      arr.push(day)
      result = {
        ...tour,
        tour_days: arr,
      }
    }
    return result
  }

  const setDayImage = (tour, data) => {
    let arr = []
    tour.tour_days.map(item => {
      if (item.id === data.id) {
        arr = item.image
      }
    })
    arr.push(data.image)
    let result = {
      ...tour,
      tour_days: tour.tour_days.map(item => {
        if (item.id === data.id) {
          return { ...item, image: arr }
        } else {
          return item
        }
      }),
    }
    return result
  }

  const updateDay = (tour, day) => {
    let result = {
      ...tour,
      tour_days: tour.tour_days.map(item => {
        if (item.id === day.id) {
          return { ...item, [day.name]: day.data }
        } else {
          return item
        }
      }),
    }
    return result
  }

  const setActivity = (tour, activity) => {
    let result = {}
    if (Array.isArray(tour.plan)) {
      let arr = [...tour.plan]
      arr.push(activity)
      result = {
        ...tour,
        plan: arr,
      }
    } else {
      let arr = []
      arr.push(activity)
      result = {
        ...tour,
        plan: arr,
      }
    }
    return result
  }
  const setActivityImage = (tour, data) => {
    let result = {
      ...tour,
      plan: tour.plan.map(item => {
        if (item.id === data.id) {
          return { ...item, image: data.image }
        } else {
          return item
        }
      }),
    }
    return result
  }

  const updateActivity = (tour, data) => {
    let result = {
      ...tour,
      plan: tour.plan.map(item => {
        if (item.id === data.id) {
          return { ...item, description: data.description }
        } else {
          return item
        }
      }),
    }
    return result
  }

  const setGuestGuideImage = (tour, data) => {
    let arr = []
    if (tour.guest_guide && tour.guest_guide.image) {
      arr = tour.guest_guide.image
      arr.push(data.tmb_image)
    } else {
      arr.push(data.tmb_image)
    }
    return {
      ...tour,
      guest_guide: {
        ...tour.guest_guide,
        image: arr,
      },
    }
  }

  const setExtraService = (tour, data) => {
    let result = {}
    if (Array.isArray(tour.tour_addetional_services)) {
      let arr = [...tour.tour_addetional_services]
      arr.push(data)
      result = {
        ...tour,
        tour_addetional_services: arr,
      }
    } else {
      let arr = []
      arr.push(data)
      result = {
        ...tour,
        tour_addetional_services: arr,
      }
    }
    return result
  }

  const updateExtraService = (tour, data) => {
    let result = {
      ...tour,
      tour_addetional_services: tour.tour_addetional_services.map(item => {
        if (item.id === data.id) {
          return { ...item, [data.name]: data.data }
        } else {
          return item
        }
      }),
    }
    return result
  }

  switch (type) {
    case GET_TOURS_SUCCESS:
      return {
        ...state,
        tours: payload,
      }
    case GET_TOURS_FAIL:
      return {
        ...state,
        tours: [],
      }
    case ADD_TOUR_SUCCESS:
    case GET_TOUR_SUCCESS:
    case UPDATE_TOUR_SUCCESS:
    case UPDATE_LOCAL_TOUR_SUCCESS:
      return {
        ...state,
        current_tour: payload,
      }

    case ADD_TOUR_FAIL:
    case UPDATE_TOUR_FAIL:
    case GET_TOUR_FAIL:
      return {
        ...state,
        current_tour: {},
      }
    case GET_TOUR_TYPES_SUCCESS:
      return {
        ...state,
        tour_types: payload,
      }
    case GET_TOUR_TYPES_FAIL:
      return {
        ...state,
        tour_types: [],
      }
    case GET_TOUR_PROPERTY_TYPES_SUCCESS:
      return {
        ...state,
        tour_property_types: payload,
      }
    case GET_TOUR_PROPERTY_TYPES_FAIL:
      return {
        ...state,
        tour_property_types: [],
      }
    case GET_TOUR_ACCOMODATIONS_SUCCESS:
      return {
        ...state,
        tour_accomodations: payload,
      }
    case GET_TOUR_ACCOMODATIONS_FAIL:
      return {
        ...state,
        tour_accomodations: [],
      }

    case GET_CURRENCIES_SUCCESS:
      return {
        ...state,
        currencies: payload,
      }
    case GET_CURRENCIES_FAIL:
      return {
        ...state,
        currencies: [],
      }
    case GET_LANGUAGES_SUCCESS:
      return {
        ...state,
        languages: payload,
      }
    case GET_LANGUAGES_FAIL:
      return {
        ...state,
        languages: [],
      }
    case SET_GUEST_GUIDE_IMAGE_SUCCESS:
      return {
        ...state,
        current_tour: setGuestGuideImage(state.current_tour, payload),
      }
    case SET_PROPERTY_IMAGE_SUCCESS:
      return {
        ...state,
        current_tour: setPropertyImages(state.current_tour, payload),
      }

    case SET_ACTIVITY_IMAGE_SUCCESS:
      return {
        ...state,
        current_tour: setActivityImage(state.current_tour, payload),
      }
    case SET_TOUR_IMAGE_SUCCESS:
      return {
        ...state,
        current_tour: setTourImages(state.current_tour, payload),
      }

    case ADD_EXTRA_SERVICE_SUCCESS:
      return {
        ...state,
        current_tour: setExtraService(state.current_tour, payload),
      }
    case UPDATE_EXTRA_SERVICE_SUCCESS:
      return {
        ...state,
        current_tour: updateExtraService(state.current_tour, payload),
      }
    case ADD_DAY_SUCCESS:
      return {
        ...state,
        current_tour: setDay(state.current_tour, payload),
      }
    case UPDATE_DAY_SUCCESS:
      return {
        ...state,
        current_tour: updateDay(state.current_tour, payload),
      }
    case ADD_ACTIVITY_SUCCESS:
      return {
        ...state,
        // plan: payload,
        current_tour: setActivity(state.current_tour, payload),
      }
    case SET_TOUR_DAY_IMAGE_SUCCESS:
      return {
        ...state,
        // plan: payload,
        current_tour: setDayImage(state.current_tour, payload),
      }
    case UPDATE_ACTIVITY_SUCCESS:
      return {
        ...state,
        current_tour: updateActivity(state.current_tour, payload),
      }

    case GET_REGIONS_SUCCESS:
      return {
        ...state,
        regions: payload,
      }

    case GET_START_COUNTRIES_SUCCESS:
      return {
        ...state,
        start_countries: payload,
      }
    case GET_START_RUSSIAN_REGIONS_SUCCESS:
      return {
        ...state,
        start_russian_regions: payload,
      }
    case GET_START_CITIES_SUCCESS:
      return {
        ...state,
        start_cities: payload,
      }

    case GET_FINISH_COUNTRIES_SUCCESS:
      return {
        ...state,
        finish_countries: payload,
      }
    case GET_FINISH_RUSSIAN_REGIONS_SUCCESS:
      return {
        ...state,
        finish_russian_regions: payload,
      }
    case GET_FINISH_CITIES_SUCCESS:
      return {
        ...state,
        finish_cities: payload,
      }
    case GET_TOUR_LEADERS_SUCCESS:
      return {
        ...state,
        tour_leaders: payload,
      }

    case CLEAR_CURRENT_TOUR:
      return {
        ...state,
        tours: [],
        current_tour: {},
        tour_types: [],
        regions: [],
        start_countries: [],
        start_russian_regions: [],
        start_cities: [],
        finish_countries: [],
        finish_russian_regions: [],
        finish_cities: [],
        currencies: [],
        languages: [],
        tour_property_types: [],
        tour_accomodations: [],
        plan: [],
        tour_leaders: [],
        current_section: 'common',
        active_sections: [],
        secondary_nav: [
          { value: 'common', text: 'Общее', active: false },
          { value: 'prices', text: 'Цены и даты', active: false },
          { value: 'options', text: 'Условия отмены', active: false },
          { value: 'details', text: 'Детали', active: false },
          { value: 'day', text: 'День за днем', active: false },
          { value: 'leader', text: 'Турлидер', active: false },
          { value: 'conditions', text: 'Условия', active: false },
          { value: 'services', text: 'Доп. услуги', active: false },
          { value: 'important', text: 'Важно знать', active: false },
          { value: 'photos', text: 'Фотографии', active: false },
        ],
        secondary: false,
        tour_name: '',
        editing: false,
      }

    case SET_CURRENT_SECTION:
      return {
        ...state,
        current_section: payload,
      }
    case SET_ACTIVE_SECTION:
      return {
        ...state,
        active_sections: payload,
      }
    case DELETE_ACTIVE_SECTION:
      return {
        ...state,
        active_sections: state.active_sections.filter(item => item !== payload),
      }
    case SET_SECONDARY_NAV:
      return {
        ...state,
        secondary_nav: payload,
      }
    case OPEN_SECONDARY_MENU:
      return {
        ...state,
        secondary: payload,
      }
    case SET_TOUR_NAME:
      return {
        ...state,
        tour_name: payload,
      }
    case SET_EDITING:
      return {
        ...state,
        editing: payload,
      }

    case SET_TOUR_DAY_IMAGE_FAIL:
    case ADD_DAY_FAIL:
    case SET_TOUR_IMAGE_FAIL:
    case SET_PROPERTY_IMAGE_FAIL:
    case UPDATE_DAY_FAIL:
    case ADD_ACTIVITY_FAIL:
    case UPDATE_ACTIVITY_FAIL:
    case CLEAR_CURRENT_TOUR_FAIL:
    case GET_TOUR_LEADERS_FAIL:
    case GET_REGIONS_FAIL:
    case GET_COUNTRIES_FAIL:
    case GET_RUSSIAN_REGIONS_FAIL:
    case GET_CITIES_FAIL:
      return {
        ...state,
      }

    default:
      return state
  }
}

export default toursReducer

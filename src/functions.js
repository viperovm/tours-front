import Moment from 'moment'
import axios from "axios";
import {SET_TOUR_IMAGE_FAIL, SET_TOUR_IMAGE_SUCCESS} from "./redux/types";

export const isNotEmptyObject = obj => {
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      return true
    }
  }
  return false
}

export const proper_phone = str => {
  let ar = str.split('')
  ar.splice(10, 0, '-')
  ar.splice(8, 0, '-')
  ar.splice(5, 0, ' ')
  ar.splice(5, 0, ')')
  ar.splice(2, 0, '(')
  ar.splice(2, 0, ' ')
  return ar.join('')
}

export const proper_date = str => {
  Moment.locale('ru')
  return Moment(str).format('DD.MM.YYYY')
}

export const imageUploader = async (image, id, section) => {

  let url = ''

  if(section === 'gallery') {
    url = `/api/tours/${id}/gallary/`
  } else if (section === 'accommodation') {
    url = `/api/tours/${id}/propertyimages/`
  }


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
      `${process.env.REACT_APP_API_URL}${url}`,
      form_data,
      config
    )
    return res.data
  } catch (err) {
    return err
  }
}

export const tourTrimmed = (tour) => {

  // if (tour && tour.wallpaper) {
  //   delete tour.wallpaper
  // }
  //
  // if (tour && tour.tmb_wallpaper) {
  //   delete tour.tmb_wallpaper
  // }

  if (tour && tour.start_time === '') {
    tour = {
      ...tour,
      start_time: null,
    }
  }

  if (tour && tour.finish_time === '') {
    tour = {
      ...tour,
      finish_time: null,
    }
  }

  if (tour && tour.plan && tour.plan.length > 0) {
    let arr = tour.plan.filter(item => isNotEmptyObject(item.image) || item.description)
    tour = {
      ...tour,
      plan: arr,
    }
  }

  if (tour && tour.tour_days && tour.tour_days.length > 0) {
    let arr = tour.tour_days.filter(item => item.image.length > 0 || item.location || item.day_title || item.description)
    tour = {
      ...tour,
      tour_days: arr,
    }
  }
  return tour
}

export const getData = (tour, direction, section) => {
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

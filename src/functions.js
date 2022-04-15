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

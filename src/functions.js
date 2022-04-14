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

export const imageUploader = async (image, id) => {

  console.log(image)

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
      `${process.env.REACT_APP_API_URL}/api/tours/${id}/gallary/`,
      form_data,
      config
    )
    console.log(res)
    console.log(res.data)
    return res.data
  } catch (err) {
    return err
  }
}

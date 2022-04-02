import * as t from '../types'
import axios from 'axios'
import {UPDATE_TOUR_WALLPAPER_FAIL, UPDATE_TOUR_WALLPAPER_SUCCESS} from "../types";

const API_URL = 'http://x3mart.ru'

export const load_user = () => async dispatch => {
  if (localStorage.getItem('access')) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${localStorage.getItem('access')}`,
        Accept: 'application/json',
      },
    }

    function parseJwt(token) {
      var base64Url = token.split('.')[1]
      var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
      var jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
          })
          .join('')
      )

      return JSON.parse(jsonPayload)
    }

    const user = parseJwt(localStorage.getItem('access')).user_status

    try {
      const res = await axios.get(`${API_URL}/api/${user}/me/`, config)
      const data = {
        data: res.data,
        status: user,
      }

      dispatch({
        type: t.USER_LOADED_SUCCESS,
        payload: data,
      })
    } catch (err) {
      dispatch({
        type: t.USER_LOADED_FAIL,
        payload: err.response.data
      })
    }
  } else {
    dispatch({
      type: t.USER_LOADED_FAIL,
    })
  }
}

export const update_user = data => async dispatch => {
  if (localStorage.getItem('access')) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${localStorage.getItem('access')}`,
        Accept: 'application/json',
      },
    }

    function parseJwt(token) {
      var base64Url = token.split('.')[1]
      var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
      var jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
          })
          .join('')
      )

      return JSON.parse(jsonPayload)
    }

    const user = parseJwt(localStorage.getItem('access')).user_status

    if(data.old_email !== data.email) {
      data = {
        ...data,
        email_confirmed: false
      }
    }

    if(data.old_phone !== data.phone) {
      data = {
        ...data,
        phone_confirmed: false
      }
    }

    if(!data.password) {
      delete data.password
      delete data.new_password
    }

    delete data.old_email
    delete data.old_phone

    const body = JSON.stringify(data)

    try {
      const res = await axios.patch(`${API_URL}/api/${user}/me/`, body, config)
      const data = {
        data: res.data,
        status: user,
      }

      dispatch({
        type: t.USER_UPDATE_SUCCESS,
        payload: data,
      })
    } catch (err) {
      dispatch({
        type: t.USER_UPDATE_FAIL,
      })
    }
  } else {
    dispatch({
      type: t.USER_LOADED_FAIL,
    })
  }
}

export const signUp = (status, data) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const body = JSON.stringify(data)

  try {
    const res = await axios.post(`${API_URL}/api/${status}/`, body, config)


    dispatch({
      type: t.SIGNUP_SUCCESS,
      // payload: res.status
    })
  } catch (err) {
    dispatch({
      type: t.SIGNUP_FAIL,
      payload: err.response.data
    })
  }
}

export const login = data => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const body = JSON.stringify(data)

  try {
    const res = await axios.post(`${API_URL}/auth/jwt/create/`, body, config)

    dispatch({
      type: t.LOGIN_SUCCESS,
      payload: res.data,
    })

    dispatch(load_user())
  } catch (err) {
    dispatch({
      type: t.LOGIN_FAIL,
      payload: err.response.data,
    })
  }
}

export const checkAuthenticated = () => async dispatch => {
  if (localStorage.getItem('access')) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }


    const body = JSON.stringify({token: localStorage.getItem('access')})

    try {
      const res = await axios.post(`${API_URL}/auth/jwt/verify/`, body, config)

      if (res.data.code !== 'token_not_valid') {
        dispatch({
          type: t.AUTHENTICATED_SUCCESS,
        })
      } else {
        dispatch({
          type: t.AUTHENTICATED_FAIL,
          payload: err.response.data
        })
      }
    } catch (err) {
      dispatch({
        type: t.AUTHENTICATED_FAIL,
        payload: err.response.data
      })
    }
  } else {
    dispatch({
      type: t.AUTHENTICATED_FAIL,
    })
  }
}

export const logout = () => dispatch => {
  dispatch({
    type: t.LOGOUT,
  })
}

export const reset_password = email => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const body = JSON.stringify({email})

  try {
    await axios.post(`${API_URL}/auth/users/reset_password/`, body, config)

    dispatch({
      type: t.PASSWORD_RESET_SUCCESS,
    })
  } catch (err) {
    dispatch({
      type: t.PASSWORD_RESET_FAIL,
    })
  }
}

export const reset_password_confirm =
  (uid, token, new_password, re_new_password) => async dispatch => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const body = JSON.stringify({uid, token, new_password, re_new_password})

    try {
      await axios.post(
        `${API_URL}/auth/users/reset_password_confirm/`,
        body,
        config
      )

      dispatch({
        type: t.PASSWORD_RESET_CONFIRM_SUCCESS,
      })
    } catch (err) {
      dispatch({
        type: t.PASSWORD_RESET_CONFIRM_FAIL,
      })
    }
  }

export const setPage = title => dispatch => {
  dispatch({
    type: t.SET_PAGE,
    payload: title,
  })
}

export const update_avatar = (image) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `JWT ${localStorage.getItem('access')}`,
    },
  }

  let form_data = new FormData()

  form_data.append('avatar', image, image.name)

  try {
    const res = await axios.patch(
      `${API_URL}/api/experts/avatar/`,
      form_data,
      config
    )

    dispatch({
      type: t.UPDATE_AVATAR_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: t.UPDATE_AVATAR_FAIL,
    })
  }
}

export const delete_avatar = () => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `JWT ${localStorage.getItem('access')}`,
    },
  }

  try {
    const res = await axios.delete(
      `${API_URL}/api/experts/avatar/`,
      config
    )

    dispatch({
      type: t.DELETE_AVATAR_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: t.DELETE_AVATAR_FAIL,
    })
  }
}

export const email_confirm_request = () => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${localStorage.getItem('access')}`,
      Accept: 'application/json',
    },
  }

  const body = ''

    try {
      let res = await axios.post(
        `${API_URL}/api/experts/send_confirmation_email/`,
        body,
        config
      )

      console.log(res)

      dispatch({
        type: t.EMAIL_CONFIRM_REQUEST_SUCCESS,
        payload: res.status
      })
    } catch (err) {
      dispatch({
        type: t.EMAIL_CONFIRM_REQUEST_FAIL,
        payload: 'error'
      })
    }
  }

export const email_confirm = (data) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      // Authorization: `JWT ${localStorage.getItem('access')}`,
    },
  }

  const body = JSON.stringify(data)

  try {
    let res = await axios.post(
      `${API_URL}/api/experts/confirm_email/`,
      body,
      config
    )

    dispatch({
      type: t.EMAIL_CONFIRM_SUCCESS,
      payload: res.status
    })
  } catch (err) {
    dispatch({
      type: t.EMAIL_CONFIRM_FAIL,
      payload: 'error'
    })
  }
}

export const clear_confirm_status = () => dispatch => {

    dispatch({
      type: t.CLEAR_CONFIRM,
    })
}

export const clear_errors = () => dispatch => {

  dispatch({
    type: t.CLEAR_ERRORS,
  })
}




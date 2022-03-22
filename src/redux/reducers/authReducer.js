import * as t from '../types'
import {DELETE_AVATAR_SUCCESS, EMAIL_CONFIRM_REQUEST_FAIL} from "../types";
import {email_confirm_request} from "../actions/authActions";

const initialState = {
  reg_status: null,
  access: localStorage.getItem('access'),
  refresh: localStorage.getItem('refresh'),
  isAuthenticated: !!(
    localStorage.getItem('access') && localStorage.getItem('refresh')
  ),
  user: null,
  status: '',
  page: '',
  avatar: '',
  email_confirm_request: null,
  email_confirm: null,
}

const authReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case t.AUTHENTICATED_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
      }
    case t.LOGIN_SUCCESS:
      localStorage.setItem('access', payload.access)
      localStorage.setItem('refresh', payload.refresh)
      return {
        ...state,
        isAuthenticated: true,
        access: payload.access,
        refresh: payload.refresh,
      }
    case t.USER_LOADED_SUCCESS:
      return {
        ...state,
        user: payload.data,
        status: payload.status,
      }
    case t.UPDATE_AVATAR_SUCCESS:
      return {
        ...state,
        user: payload,
      }
    case t.DELETE_AVATAR_SUCCESS:
      return {
        ...state,
        user: payload,
      }
    case t.USER_UPDATE_SUCCESS:
      return {
        ...state,
        user: payload.data,
        status: payload.status,
      }
    case t.SIGNUP_SUCCESS:
      return {
        ...state,
        reg_status: payload,
      }
    case t.SET_PAGE:
      return {
        ...state,
        page: payload,
      }
    case t.LOGOUT:
      localStorage.removeItem('access')
      localStorage.removeItem('refresh')
      return {
        ...state,
        access: null,
        refresh: null,
        isAuthenticated: false,
        user: null,
      }
    case t.EMAIL_CONFIRM_REQUEST_SUCCESS:
    case t.EMAIL_CONFIRM_REQUEST_FAIL:
      return {
        ...state,
        email_confirm_request: payload,
      }
    case t.EMAIL_CONFIRM_SUCCESS:
    case t.EMAIL_CONFIRM_FAIL:
      return {
        ...state,
        email_confirm: payload,
      }
    case t.CLEAR_CONFIRM:
      return {
        ...state,
        email_confirm_request: null,
        email_confirm: null,
      }

    case t.AUTHENTICATED_FAIL:
    case t.LOGIN_FAIL:
    case t.SIGNUP_FAIL:
    case t.USER_LOADED_FAIL:
      return {
        ...state,
      }
    default:
      return state
  }
}

export default authReducer

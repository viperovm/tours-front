import * as t from '../types'

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

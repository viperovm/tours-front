import * as t from '../types'
import {DELETE_AVATAR_SUCCESS, EMAIL_CONFIRM_REQUEST_FAIL, GET_DATA_BY_INN_SUCCESS} from "../types";
import {email_confirm_request} from "../actions/authActions";
import {isNotEmptyObject} from "../../functions";

const initialState = {
  reg_status: null,
  access: localStorage.getItem('access'),
  refresh: localStorage.getItem('refresh'),
  isAuthenticated: !!(
    localStorage.getItem('access') && localStorage.getItem('refresh')
  ),
  user: null,
  update_status: '',
  status: '',
  page: '',
  avatar: '',
  email_confirm_request: null,
  email_confirm: null,
  error: {},
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

    case t.UPDATE_CARD_DATA_SUCCESS:
    case t.UPDATE_TRANSACTION_DATA_SUCCESS:
      return {
        ...state,
        update_status: payload,
        error: {},
      }

    case t.CLEAR_UPDATE_STATUS:
      return {
        ...state,
        update_status: '',
      }

    case t.UPDATE_TRANSACTION_DATA_FAIL:
      return {
        ...state,
        error: payload,
      }

    case t.UPDATE_CARD_DATA_FAIL:
      return {
        ...state,
        error: payload,
      }

    case t.GET_DATA_BY_BIK_SUCCESS:
      const updateUserDataByBik = (user, data, source) => {
        if(source === 'card'){
          let debet_card = {
            bank_bik: '',
            bank_name: '',
            bank_account: '',
            bank_inn: '',
            bank_kpp: '',
          }
          console.log({
            ...debet_card,
            ...data
          })
          return {
            ...user,
            debet_card: {
              ...debet_card,
              ...data
            },
          }
        } else if(source === 'transaction') {

          let {bank_transaction} = user
          bank_transaction = {
            ...bank_transaction,
            bank_bik: '',
            bank_name: '',
            bank_account: '',
            bank_inn: '',
            bank_kpp: '',
          }
          console.log({
            ...bank_transaction,
            ...data
          })
          return {
            ...user,
            bank_transaction: {
              ...bank_transaction,
              ...data
            },
          }
        }

      }
      return {
        ...state,
        user: updateUserDataByBik(state.user, payload.data, payload.source),
      }

      case t.GET_DATA_BY_INN_SUCCESS:
      const updateUserDataByInn = (user, data) => {
        let {bank_transaction} = user
        bank_transaction = {
          ...bank_transaction,
          recipient_name: '',
          recipient_inn: '',
          recipient_kpp: '',
          recipient_ogrn: '',
          recipient_status: '',
          recipient_registration_date: '',
        }
        return {
          ...user,
          bank_transaction: {
            ...bank_transaction,
            ...data
          },
        }
      }
      return {
        ...state,
        user: updateUserDataByInn(state.user, payload),
      }

    case t.RESET_INN_DATA:
      let resetInnData = (user) => {
        let {bank_transaction} = user
        return {
          ...user,
          bank_transaction: {
            ...bank_transaction,
            recipient_name: '',
            recipient_inn: '',
            recipient_kpp: '',
            recipient_ogrn: '',
            recipient_status: '',
            recipient_registration_date: '',
          },
        }
    }

      return {
        ...state,
        user: resetInnData(state.user),
      }

    case t.RESET_BIK_DATA:
      let resetData = (user, source) => {
        if(source === 'card') {
          let {debet_card} = user
          return {
            ...user,
            debet_card: {
              ...debet_card,
              bank_bik: '',
              bank_name: '',
              bank_account: '',
              bank_inn: '',
              bank_kpp: '',
            },
          }
        } else if(source === 'transaction') {
          let {bank_transaction} = user
          return {
            ...user,
            bank_transaction: {
              ...bank_transaction,
              bank_bik: '',
              bank_name: '',
              bank_account: '',
              bank_inn: '',
              bank_kpp: '',
            },
          }
        }
    }

      return {
        ...state,
        user: resetData(state.user, payload),
      }
    case t.USER_UPDATE_SUCCESS:
      return {
        ...state,
        user: payload.data,
        status: payload.status,
        reg_status: payload.reg_status,
      }

    case t.UPDATE_LOCAL_USER:
      return {
        ...state,
        user: payload,
      }
    case t.SIGNUP_SUCCESS:
      return {
        ...state,
        reg_status: payload,
      }
    case t.LOGIN_FAIL:
    case t.SIGNUP_FAIL:
      return {
        ...state,
        error: payload.data,
        reg_status: payload.status,
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
    case t.USER_LOADED_FAIL:
      return {
        ...state,
      }

    case t.CLEAR_ERRORS:
      return {
        ...state,
        error: {},
        reg_status: null,
      }
    default:
      return state
  }
}

export default authReducer

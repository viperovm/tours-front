import * as t from '../types'
import {UPDATE_LOCAL_ORDER} from "../types";

const initialState = {
  orders: [],
  order: null,
  error: {},
}

const orderReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case t.GET_ALL_ORDERS_SUCCESS:
      return {
        ...state,
        orders: payload,
      }
    case t.GET_SINGLE_ORDER_SUCCESS:
    case t.UPDATE_ORDER_SUCCESS:
      return {
        ...state,
        order: payload,
      }
    case t.UPDATE_LOCAL_ORDER:
      return {
        ...state,
        order: {
          ...state.order,
          ...payload,
        },
      }
    case t.GET_ALL_ORDERS_FAIL:
      return {
        ...state,
        orders: [],
      }
    case t.UPDATE_ORDER_FAIL:
      return {
        ...state,
        error: payload,
      }
    case t.CLEAR_ORDER_ERRORS:
      return {
        ...state,
        error: {},
      }
    case t.GET_SINGLE_ORDER_FAIL:
    case t.CLEAR_SINGLE_ORDER:
      return {
        ...state,
        order: null,
      }
    default:
      return state
  }
}

export default orderReducer

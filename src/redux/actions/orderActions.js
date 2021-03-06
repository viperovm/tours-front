import * as t from '../types'
import axios from 'axios'

export const get_all_orders = () => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${localStorage.getItem('access')}`,
      Accept: 'application/json',
    },
  }

  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/orders/`, config)

    dispatch({
      type: t.GET_ALL_ORDERS_SUCCESS,
      payload: res.data,
    })

  } catch (err) {
    console.error(err)
    dispatch({
      type: t.GET_ALL_ORDERS_FAIL,
      payload: err.response.data,
    })
  }
}

export const get_single_order = (id) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${localStorage.getItem('access')}`,
      Accept: 'application/json',
    },
  }

  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/orders/${id}/`, config)

    dispatch({
      type: t.GET_SINGLE_ORDER_SUCCESS,
      payload: res.data,
    })

  } catch (err) {
    console.error(err)
    dispatch({
      type: t.GET_SINGLE_ORDER_FAIL,
      payload: err.response.data,
    })
  }
}

export const clear_single_order = () => async dispatch => {
  dispatch({
    type: t.CLEAR_SINGLE_ORDER,
  })
}

export const update_local_order = (data) => async dispatch => {
  dispatch({
    type: t.UPDATE_LOCAL_ORDER,
    payload: data,
  })
}

export const update_order = (id, data, action) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${localStorage.getItem('access')}`,
      Accept: 'application/json',
    },
  }

  const body = JSON.stringify(data)

  try {
    const res = await axios.patch(`${process.env.REACT_APP_API_URL}/api/orders/${id}/${action ? action : ''}`, body, config)

    dispatch({
      type: t.UPDATE_ORDER_SUCCESS,
      payload: res.data,
    })

  } catch (err) {
    console.error(err)
    dispatch({
      type: t.UPDATE_ORDER_FAIL,
      payload: err.response.data,
    })
  }
}

export const update_order_actions = (status, res) => async dispatch => {

  console.log(res.data)

  if(status === 'success') {
    dispatch({
      type: t.UPDATE_ORDER_SUCCESS,
      payload: res.data,
    })
  } else {
    dispatch({
      type: t.UPDATE_ORDER_FAIL,
      payload: res.response.data,
    })
  }
}

export const clear_errors = () => async dispatch => {
  dispatch({
    type: t.CLEAR_ORDER_ERRORS,
  })
}

export const get_all_filters = () => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${localStorage.getItem('access')}`,
      Accept: 'application/json',
    },
  }

  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/orders/status_list/`, config)

    dispatch({
      type: t.GET_ALL_FILTERS_SUCCESS,
      payload: res.data,
    })

  } catch (err) {
    console.error(err)
    dispatch({
      type: t.GET_ALL_FILTERS_FAIL,
      payload: err.response.data,
    })
  }
}

export const filter_orders = (filters) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${localStorage.getItem('access')}`,
      Accept: 'application/json',
    },
  }

  const getSearchString = filters => {
    if(filters.length > 0) {
      return `?status=${filters.join('&status=')}`
    } else {
      return ''
    }
  }

  const search = getSearchString(filters)

  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/orders/${search}`, config)

    dispatch({
      type: t.FILTER_ORDERS_SUCCESS,
      payload: res.data,
    })

  } catch (err) {
    console.error(err)
    dispatch({
      type: t.FILTER_ORDERS_FAIL,
      payload: err.response.data,
    })
  }
}




import * as t from '../types'
import axios from 'axios'
import {
  GET_DATA_BY_BIK_FAIL,
} from "../types";

export const add_chat_user = data => async dispatch => {
  dispatch({
    type: t.ADD_CHAT_USER,
    payload: data,
  })
}

export const delete_chat_user = () => async dispatch => {
  dispatch({
    type: t.DELETE_CHAT_USER,
  })
}

export const get_chat_rooms = () => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${localStorage.getItem('access')}`,
      Accept: 'application/json',
    },
  }

  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/chats/`, config)

    dispatch({
      type: t.GET_CHAT_ROOMS_SUCCESS,
      payload: res.data,
    })

  } catch (err) {
    console.error(err)
    dispatch({
      type: t.GET_CHAT_ROOMS_FAIL,
      payload: err.response.data,
    })
  }
}

export const add_chat_room = id => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${localStorage.getItem('access')}`,
      Accept: 'application/json',
    },
  }

  const body = JSON.stringify({chat_with: id})

  try {
    const rooms = await axios.get(`${process.env.REACT_APP_API_URL}/api/chats/`, config)
    const room = await axios.post(`${process.env.REACT_APP_API_URL}/api/chats/`, body, config)

    const data = rooms.data.filter(item => item.id !== room.data.id)

    const payload = {
      data: [room.data, ...data ],
      id: room.data.id
    }

    dispatch({
      type: t.ADD_CHAT_ROOM_SUCCESS,
      payload: payload,
    })

  } catch (err) {
    console.error(err)
    dispatch({
      type: t.ADD_CHAT_ROOM_FAIL,
      payload: err.response.data,
    })
  }
}

export const set_current_room = id => async dispatch => {
  dispatch({
    type: t.SET_CURRENT_ROOM,
    payload: id,
  })
}

export const clear_current_room = () => async dispatch => {
  dispatch({
    type: t.CLEAR_CURRENT_ROOM,
  })
}

export const set_current_messages = data => async dispatch => {
  dispatch({
    type: t.SET_CURRENT_MESSAGES,
    payload: data,
  })
}

export const clear_current_messages = () => async dispatch => {
  dispatch({
    type: t.CLEAR_CURRENT_MESSAGES,
  })
}



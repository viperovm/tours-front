import * as t from '../types'
import {SET_ALL_MESSAGES_UNREAD, SET_USERS_OFFLINE} from "../types";

const initialState = {
  chat_user: null,
  chat_rooms: [],
  current_room: null,
  current_messages: [],
  users_online: [],
  all_messages_read: false,
}

const chatReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case t.ADD_CHAT_USER:
      return {
        ...state,
        chat_user: payload,
      }
    case t.DELETE_CHAT_USER:
      return {
        ...state,
        chat_user: null,
      }
    case t.GET_CHAT_ROOMS_SUCCESS:
      return {
        ...state,
        chat_rooms: payload,
      }
    case t.GET_CHAT_ROOMS_FAIL:
    case t.ADD_CHAT_ROOM_FAIL:
      return {
        ...state,
        chat_rooms: null,
      }
    case t.ADD_CHAT_ROOM_SUCCESS:

      return {
        ...state,
        chat_rooms: payload.data,
        // chat_rooms: [payload, ...state.chat_rooms],
        current_room: payload.id,
      }
    case t.SET_CURRENT_ROOM:
      return {
        ...state,
        current_room: payload,
      }
    case t.CLEAR_CURRENT_ROOM:
      return {
        ...state,
        current_room: null,
      }
    case t.SET_ALL_MESSAGES_READ:
      return {
        ...state,
        all_messages_read: true,
      }
    case t.SET_ALL_MESSAGES_UNREAD:
      return {
        ...state,
        all_messages_read: false,
      }
    case t.SET_CURRENT_MESSAGES:
      return {
        ...state,
        current_messages: [...state.current_messages, payload],
      }
    case t.CLEAR_CURRENT_MESSAGES:
      return {
        ...state,
        current_messages: [],
      }
    case t.SET_USERS_ONLINE:
      const setUserOnline = (users, user) => {
        if(users.includes(user)) {
          return users
        } else {
          return [...users, user]
        }
    }
      return {
        ...state,
        users_online: setUserOnline(state.users_online, payload),
      }
    case t.SET_USERS_OFFLINE:
      const setUserOffline = (users, user) => {
        return users?.filter(item => item !== user)
      }
      return {
        ...state,
        users_online: setUserOffline(state.users_online, payload),
      }
    case t.CLEAR_ALL_NOTIFICATIONS:
      return {
        ...state,
        users_online: [],
      }
    default:
      return state
  }
}

export default chatReducer

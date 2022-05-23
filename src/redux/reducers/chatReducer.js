import * as t from '../types'

const initialState = {
  chat_user: null,
  chat_rooms: [],
  current_room: null,
  current_messages: [],
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
    default:
      return state
  }
}

export default chatReducer

import {
  GET_TEAM_MEMBERS_SUCCESS,
  GET_TEAM_MEMBERS_FAIL,
  GET_TEAM_MEMBER_SUCCESS,
  GET_TEAM_MEMBER_FAIL,
  ADD_TEAM_MEMBER_SUCCESS,
  ADD_TEAM_MEMBER_FAIL,
  UPDATE_TEAM_MEMBER_SUCCESS,
  UPDATE_TEAM_MEMBER_FAIL,
  DELETE_TEAM_MEMBER_SUCCESS,
  DELETE_TEAM_MEMBER_FAIL,
  ADD_TEAM_MEMBER_AVATAR_SUCCESS,
  ADD_TEAM_MEMBER_AVATAR_FAIL,

} from '../types'

const initialState = {
  members: [],
  member: {},
  error: null,
}

const profileReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case GET_TEAM_MEMBERS_SUCCESS:
      return {
        ...state,
        members: payload,
      }
    case GET_TEAM_MEMBERS_FAIL:
      return {
        ...state,
        members: [],
      }

    case GET_TEAM_MEMBER_SUCCESS:
    case ADD_TEAM_MEMBER_SUCCESS:
    case UPDATE_TEAM_MEMBER_SUCCESS:
    case ADD_TEAM_MEMBER_AVATAR_SUCCESS:
      return {
        ...state,
        member: payload,
      }
    case GET_TEAM_MEMBER_FAIL:
    case ADD_TEAM_MEMBER_FAIL:
    case UPDATE_TEAM_MEMBER_FAIL:
      return {
        ...state,
        member: {},
      }

    case ADD_TEAM_MEMBER_AVATAR_FAIL:
      return {
        ...state,
        error: payload,
      }

    case DELETE_TEAM_MEMBER_SUCCESS:
      return {
        ...state,
        members: state.members.filter(item => item.id !== payload),
      }

    case DELETE_TEAM_MEMBER_FAIL:
      return {
        ...state,
      }

    default:
      return state
  }
}

export default profileReducer

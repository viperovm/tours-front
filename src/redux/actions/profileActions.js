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

import axios from 'axios'


const API_URL = 'http://x3mart.ru'

export const getTeamMembers = () => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${localStorage.getItem('access')}`,
      Accept: 'application/json',
    },
  }

  try {
    const res = await axios.get(`${API_URL}/api/teammembers/`, config)

    dispatch({
      type: GET_TEAM_MEMBERS_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: GET_TEAM_MEMBERS_FAIL,
    })
  }
}

export const getTeamMember = id => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${localStorage.getItem('access')}`,
      Accept: 'application/json',
    },
  }

  try {
    const res = await axios.get(`${API_URL}/api/teammembers/${id}/`, config)

    dispatch({
      type: GET_TEAM_MEMBER_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: GET_TEAM_MEMBER_FAIL,
    })
  }
}

export const addTeamMember = data => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${localStorage.getItem('access')}`,
      Accept: 'application/json',
    },
  }

  const body = JSON.stringify(data)

  try {
    const res = await axios.post(`${API_URL}/api/teammembers/`, body, config)

    dispatch({
      type: ADD_TEAM_MEMBER_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: ADD_TEAM_MEMBER_FAIL,
    })
  }
}

export const updateTeamMember = (data, id) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${localStorage.getItem('access')}`,
      Accept: 'application/json',
    },
  }

  const body = JSON.stringify(data)

  try {
    const res = await axios.patch(`${API_URL}/api/teammembers/${id}/`, body, config)

    dispatch({
      type: UPDATE_TEAM_MEMBER_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: UPDATE_TEAM_MEMBER_FAIL,
    })
  }
}

export const deleteTeamMember = id => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${localStorage.getItem('access')}`,
      Accept: 'application/json',
    },
  }

  try {
    await axios.delete(`${API_URL}/api/teammembers/${id}/`, config)

    dispatch({
      type: DELETE_TEAM_MEMBER_SUCCESS,
      payload: id,
    })
  } catch (err) {
    dispatch({
      type: DELETE_TEAM_MEMBER_FAIL,
    })
  }
}

export const addTeamMemberAvatar = (image, id) => async dispatch => {
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
      `${API_URL}/api/teammembers/${id}/avatar/`,
      form_data,
      config
    )

    dispatch({
      type: ADD_TEAM_MEMBER_AVATAR_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: ADD_TEAM_MEMBER_AVATAR_FAIL,
      payload: res
    })
  }
}

export const deleteTeamMemberAvatar = (id) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `JWT ${localStorage.getItem('access')}`,
    },
  }

  try {
    const res = await axios.delete(
      `${API_URL}/api/teammembers/${id}/avatar/`,
      config
    )

    dispatch({
      type: ADD_TEAM_MEMBER_AVATAR_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: ADD_TEAM_MEMBER_AVATAR_FAIL,
      payload: res
    })
  }
}

import * as t from '../types'
import axios from 'axios'


export const get_expert = id => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/experts/${id}/`, config)

    dispatch({
      type: t.GET_EXPERT_SUCCESS,
      payload: res.data,
    })

  } catch (err) {
    console.error(err)
    dispatch({
      type: t.GET_EXPERT_FAIL,
      payload: err.response.data,
    })
  }
}

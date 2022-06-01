import * as t from '../types'

const initialState = {
  expert: null,
}

const expertReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case t.GET_EXPERT_SUCCESS:
      return {
        ...state,
        expert: payload,
      }
    case t.GET_EXPERT_FAIL:
      return {
        ...state,
        expert: null,
      }
    default:
      return state
  }
}

export default expertReducer

import { combineReducers } from 'redux'
import authReducer from './authReducer'
import toursReducer from './toursReducer'
import profileReducer from './profileReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  tours: toursReducer,
  profile: profileReducer,
})

export default rootReducer

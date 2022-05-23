import { combineReducers } from 'redux'
import authReducer from './authReducer'
import toursReducer from './toursReducer'
import profileReducer from './profileReducer'
import chatReducer from './chatReducer'
import blogReducer from './blogReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  tours: toursReducer,
  profile: profileReducer,
  chat: chatReducer,
  blog: blogReducer,
})

export default rootReducer

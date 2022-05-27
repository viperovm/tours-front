import { combineReducers } from 'redux'
import authReducer from './reducers/authReducer'
import toursReducer from './reducers/toursReducer'
import profileReducer from './reducers/profileReducer'
import chatReducer from './reducers/chatReducer'
import supportReducer from './reducers/supportReducer'
import blogReducer from './reducers/blogReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  tours: toursReducer,
  profile: profileReducer,
  chat: chatReducer,
  support: supportReducer,
  blog: blogReducer,
})

export default rootReducer

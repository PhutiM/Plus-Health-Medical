import { combineReducers } from 'redux'
import authReducer from './authReducer'
import Splash from './splash-screen'

const rootReducer = combineReducers({
  authReducer,
  Splash
})

export default rootReducer

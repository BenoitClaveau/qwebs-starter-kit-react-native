import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  nav: require('./nav').default,                //react-navigation
  navLogin: require('./nav-login').default,     
})

export default rootReducer;
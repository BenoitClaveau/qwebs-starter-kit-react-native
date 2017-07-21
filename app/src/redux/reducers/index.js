import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  user: require('./users').default,
  route: require('./route').default,            //AndroidToolbar navigation
  nav: require('./nav').default,                //or react-navigation
})

export default rootReducer;
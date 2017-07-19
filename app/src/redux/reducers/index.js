import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  user: require('./users').default,
  route: require('./route').default,            //AndroidToolbar navigation
  nav: require('./nav').default,   //react-navigation
  page: require('./page').default   //react-navigation for navigate dispatcher
})

export default rootReducer;
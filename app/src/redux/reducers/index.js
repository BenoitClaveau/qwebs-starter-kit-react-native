import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  nav: require('./nav').default,                //react-navigation
  navLogin: require('./nav-login').default,
  user: require('./user').default,
  users: require('./users').default,
  form: formReducer
})

export default rootReducer;
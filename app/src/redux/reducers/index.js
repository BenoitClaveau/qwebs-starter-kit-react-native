import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  nav: require('./nav').default,                //react-navigation
  navLogin: require('./nav-login').default ,
  auth: require('./auth').default,
  user: require('./user').default,
  form: formReducer

})

export default rootReducer;
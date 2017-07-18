import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  user: require('./users').default,
  navigation: require('./navigation').default
})

export default rootReducer;
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'
import axiosMiddleware from 'redux-axios-middleware';
import axios from 'axios';    
const config = require("../config.json");

//export axiosClient for unit testing => axios could be mocked 
export const axiosClient = axios.create({
  baseURL: config.api.url,
  responseType: 'json'
});

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      createLogger({collapsed: true}),
      thunkMiddleware,
      axiosMiddleware(axiosClient)
    )
  )
)

export default store;

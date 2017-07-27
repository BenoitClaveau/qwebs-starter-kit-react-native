import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'
import axiosMiddleware, { multiClientMiddleware } from 'redux-axios-middleware';
import axios from 'axios';    
const config = require("../config.json");

//export axiosClients for unit testing => axios could be mocked 

export const axiosApi = axios.create({
  baseURL: config.api.url,
  responseType: 'json'
});

export const axiosBucket = axios.create({
  baseURL: config.bucket.url,
  responseType: 'json'
});

// payload: {
//   client: 'bucket', // this will fail back to default (unset this key or can't find that file)
//   request: ...
// }

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      createLogger({collapsed: true}),
      thunkMiddleware,
      multiClientMiddleware({
        default: axiosApi,
        bucket: axiosBucket,
      })
    )
  )
)

export default store;

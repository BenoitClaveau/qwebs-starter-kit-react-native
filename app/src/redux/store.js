import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'
import axiosMiddleware, { multiClientMiddleware } from 'redux-axios-middleware';
import axios from 'axios';    
const config = require("../config/app.json");

//export axiosClients for unit testing => axios could be mocked 
//use multiClientMiddleware instead of axiosMiddleware for muliple clients
export const axiosDefault = axios.create({
  responseType: 'json'
});


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
        default: { client: axiosDefault },
        api: { client: axiosApi },
        bucket: { client: axiosBucket },
      })
    )
  )
)

export default store;

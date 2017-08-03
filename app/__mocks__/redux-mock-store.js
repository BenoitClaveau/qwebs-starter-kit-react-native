import configureMockStore from 'redux-mock-store';
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk';
import axiosMiddleware from 'redux-axios-middleware';
import axios from 'axios';

const client = axios.create({
  responseType: 'json'
});

const middlewares = [thunkMiddleware, axiosMiddleware(client)];
const mockStore = configureMockStore(middlewares);

export default mockStore;
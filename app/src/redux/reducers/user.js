import I18n from "../../config/i18n";
import { axiosApi } from "../store";

/* Constantes ---------------------------*/

const AUTH = "API_USER_AUTHENTICATE";

/* Actions ---------------------------*/

export const Action = {
  authenticate: (data) => ({
    type: AUTH,
    payload: {
      client: "api",  //define axios client to use (store.js)
      request:{
        url:'logon',
        method: 'POST',
        data: data
      }
    }
  }),
}

/* Reducer ---------------------------*/

const initialState = {
    token: null,
    error: null,
    login: null,
    password: null
};

export default (state = initialState, action) => {
  switch(action.type) {
    case `${AUTH}`: return { ...state, Token: null, error: null };  //reset data
    case `${AUTH}_SUCCESS`: 
      axiosApi.defaults.headers.common['Authorization'] = `Bearer ${action.payload.data.token}`;
      return { ...state, ...action.payload.data }; 
    case `${AUTH}_FAIL`: 
      let text = I18n.t(action.error.response.data.message);
      return { ...state, error: text }; //may be use an error reducer
    default: return {...state };
  }
}

/* Dispatchers ---------------------------*/

export const authenticate = (data) => (dispatch, getState) => {
  return dispatch(Action.authenticate(data));
}

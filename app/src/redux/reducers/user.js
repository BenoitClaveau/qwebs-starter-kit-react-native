/* Constantes ---------------------------*/

const AUTH = "API_USER_AUTHENTICATE";

/* Actions ---------------------------*/

export const Action = {
  authenticate: (form) => ({
    type: AUTH,
    payload: {
      client: "api",  //define axios client to use (store.js)
      request:{
        url:'user/connect',
        method: 'POST',
        data: form
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
    case `${AUTH}`: return { ...state, token: null, error: null };  //reset data
    case `${AUTH}_SUCCESS`: return { ...state, ...action.payload.data }; 
    case `${AUTH}__FAIL`: return { ...state, error: action.error }; 
    default: return {...state };
  }
}

/* Dispatchers ---------------------------*/

export const authenticate = (form) => (dispatch, getState) => {
  return dispatch(Action.authenticate(form));
}

export const Action = {
  authenticate: () => ({
    type: "API_USER_AUTHENTICATE",
    payload: {
      request:{
        url:'user/connect',
        method: 'POST'
      }
    }
  }),
}

const initialState = {
    token: null,
    error: null,
    login: null,
    password: null
};

export default (state = initialState, action) => {
  switch(action.type) {
    case "API_USER_AUTHENTICATE_SUCCESS": return { ...state, token: action.payload.data.token }; 
    case "API_USER_AUTHENTICATE_FAIL": return { ...state, error: action.error }; 
    default: return {...state, error: null, token: null };
  }
}

export const authenticate = (form) => (dispatch, getState) => {
  return dispatch(Action.authenticate());
}

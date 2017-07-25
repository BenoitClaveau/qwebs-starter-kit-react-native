import api from "../../api";

const AUTHENTICATE_START = "USER_AUTHENTICATE_START";
const AUTHENTICATE_END = "USER_AUTHENTICATE_END";
const AUTHENTICATE_ERROR = "USER_AUTHENTICATE_ERROR";

const initialState = {
    token: null,
    error: null,
    login: "my login",
    password: null
};

export default (state = initialState, action) => {
  switch(action.type) {
    case AUTHENTICATE_END: return { ...state, token: action.data.token }; 
    case AUTHENTICATE_ERROR: return { ...state, error: action.error }; 
    default: return {...state, error: null };
  }
}

// const LOAD = 'redux-form-examples/account/LOAD'

// const reducer = (state = {}, action) => {
//   switch (action.type) {
//     case LOAD:
//       return {
//         data: action.data
//       }
//     default:
//       return state
//   }
// }

export const authenticate = (form) => async (dispatch, getState) => {
  dispatch({ type: AUTHENTICATE_START });
  try {
    const { data } = await api.user.post("connect", form);
    dispatch({ type: AUTHENTICATE_END, data });
  } catch (error) {
    dispatch({ type: AUTHENTICATE_ERROR, error });
  }
}

//import { gotoAction } from './page';

const SAVE = "SAVE";

// Action Creators
const saveAction = token => ({ type: SAVE, token });

// Reducer
const initialState = {
    token: null,
};

export default (state = initialState, action) => {
  console.log('reducer was called with state', state, 'and action', action)
  switch(action.type) {
    case SAVE: return { ...state, token: action.token }; //store auth.token = "4gt54..."
    default: return state;
  }
}

//use redux-thunk see https://github.com/gaearon/redux-thunk
export const saveToken = (token) => (dispatch, getState) => {  
  dispatch(saveAction(token));
  //dispatch(gotoAction("Welcome")); Not good to call action of other reducer
}

export const resetToken = () => dispatch => {
  dispatch(saveAction(null));
}

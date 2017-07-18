//import { Actions } from 'react-native-router-flux';

const SAVE = "SAVE";

// Action Creators
const save = token => ({ type: SAVE, token });

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

export const saveToken = (token) => dispatch => {  
  Actions.welcome({type: 'replace'});
  setTimeout(() => {
    dispatch(save(token));
  }, 250);
}

export const resetToken = () => dispatch => {
  dispatch(save(null));
  //Actions.login();
}

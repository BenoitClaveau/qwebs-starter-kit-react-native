import { Actions } from 'react-native-router-flux';

const SAVE = "SAVE";

// Action Creators
const save = token => ({ type: SAVE, token });

// Reducer
export default (state = {}, action) => {
  console.log('reducer was called with state', state, 'and action', action)
  switch(action.type) {
    case SAVE: return action.token;
    default: return state;
  }
}

export const saveToken = (token) => dispatch => {
  dispatch(save(token));
  Actions.welcome();
}
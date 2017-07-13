import { Actions } from 'react-native-router-flux';

// Action Creators
const auth = () => ({ type: 'AUTH' });

// Reducer
export default (state = {}, action) => {
  console.log('reducer was called with state', state, 'and action', action)
  return state;
}

export const token = (token) => dispatch => {
  dispatch(auth());
  Actions.welcome();
}
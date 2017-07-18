import { Actions } from 'react-native-router-flux';

const DRAWER_TOGGLE = "DRAWER_TOGGLE";
const DRAWER_TO_CLOSE = "DRAWER_TO_CLOSE";
const DRAWER_TO_OPEN = "DRAWER_TO_OPEN";

// Action Creators
const toggle = () => ({ type: DRAWER_TOGGLE });
const toClose = () => ({ type: DRAWER_TO_CLOSE });
const toOpen = () => ({ type: DRAWER_TO_OPEN });

// Reducer
const initialState = {
    drawer: false,
};

export default (state = initialState, action) => {
  console.log('reducer was called with state', state, 'and action', action)
  switch(action.type) {
    case DRAWER_TOGGLE: return { ...state, drawer: !state.drawer };
    case DRAWER_TO_CLOSE: return { ...state, drawer: false };
    case DRAWER_TO_OPEN: return { ...state, drawer: true };
    default: return state;
  }
}

export const toggleDrawer = () => dispatch => {  
  dispatch(toggle());
}

export const setDrawerToClose = () => dispatch => {  
  dispatch(toClose());
}
export const setDrawerToOpen = () => dispatch => {  
  dispatch(toOpen());
}
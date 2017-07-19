// Failed to merge with nav. -> we split in 2 reducers

import { NavigationActions } from 'react-navigation';

export const gotoAction = (routeName) => NavigationActions.navigate({ routeName: routeName })
export const backAction = (routeName) => NavigationActions.back({})

const initialState = {};
export default (state = initialState, action) => {
  return state;
};

export const goto = (routeName) => (dispatch, getState) => {
  dispatch(gotoAction(routeName));
}

export const back = () => (dispatch, getState) => {
  dispatch(backAction());
}

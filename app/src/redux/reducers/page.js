// Failed to merge with nav. -> we split in 2 reducers

import { NavigationActions } from 'react-navigation';

export const Action = {
  goto: (routeName, params = {}) => NavigationActions.navigate({ 
    routeName: routeName,
    params: params,
    //action: NavigationActions.navigate({ routeName: 'SubProfileRoute'})
  }),
  back: (routeName) => NavigationActions.back({})
}

const initialState = {};
export default (state = initialState, action) => {
  return state;
};

export const goto = (routeName) => (dispatch, getState) => {
  dispatch(Action.goto(routeName));
}

export const back = () => (dispatch, getState) => {
  dispatch(Action.back());
}

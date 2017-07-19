//see https://reactnavigation.org/docs/guides/redux

import { addNavigationHelpers, NavigationActions } from 'react-navigation';
import AppNavigator from '../../pages/navigator/AppNavigator';

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Login'));

export default (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  return nextState || state;
};

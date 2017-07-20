//see https://reactnavigation.org/docs/guides/redux

import { addNavigationHelpers, NavigationActions } from 'react-navigation';
import AppNavigator from '../../pages/app/AppNavigator';

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Welcome'));

export default (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  return nextState || state;
};


// return  AppNavigator.router.getStateForAction(NavigationActions.reset({
//                 index: 0,
//                 actions: [
//                     NavigationActions.navigate({ routeName: 'Main'})
//                 ]
//             }), state);
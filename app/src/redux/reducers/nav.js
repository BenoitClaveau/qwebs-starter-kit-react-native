//see https://reactnavigation.org/docs/guides/redux

import { addNavigationHelpers, NavigationActions } from 'react-navigation';
import AppNavigator from '../../pages/app/AppNavigator';

//WARNING initialState with all routes (must be the main view). Call reset to reload all routes
const initialState=AppNavigator.router.getStateForAction(NavigationActions.reset({
	index: 0,
	actions: [
	  NavigationActions.navigate({
		  routeName: 'main',
	  }),
	],
}))

export default (state = initialState, action) => {
  return AppNavigator.router.getStateForAction(action, state) || state;
};
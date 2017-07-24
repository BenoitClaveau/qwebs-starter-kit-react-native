//see https://reactnavigation.org/docs/guides/redux

import { NavigationActions } from 'react-navigation';
import AppNavigator from '../../pages/app/AppNavigator';

//WARNING initialState with all routes (must be the main view). Call reset to reload all routes
const initialState=AppNavigator.router.getStateForAction(NavigationActions.reset({
	index: 0,
	actions: [
	  NavigationActions.navigate({
			routeName: 'main'
	  }),
	],
}))

export default (state = initialState, action) => {
  let nextState = AppNavigator.router.getStateForAction(action, state) || state;
  switch(action.routeName) {
    case "DrawerOpen": return {...nextState, drawerOpen: true };
    case "DrawerClose": return {...nextState, drawerOpen: false };
    default: return nextState;
  }

};
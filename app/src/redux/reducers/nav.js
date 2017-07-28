//see https://reactnavigation.org/docs/guides/redux

import { NavigationActions } from 'react-navigation';
import AppNavigator from '../../components/AppNavigator';

/* Constantes ---------------------------*/

const TOGGLE_CONTEXT_DRAWER = "NAV_TOGGLE_CONTEXT_DRAWER";

/* Actions ---------------------------*/

export const Action = {
  toogleContextDrawer: (contextDrawerOpen) => ({
    type: TOGGLE_CONTEXT_DRAWER,
    contextDrawerOpen: contextDrawerOpen
  }),
}

/* Reducer ---------------------------*/

//WARNING initialState with all routes (must be the main view). Call reset to reload all routes
const initialState = AppNavigator.router.getStateForAction(NavigationActions.reset({
	index: 0,
	actions: [NavigationActions.navigate({ routeName: 'main' })]
}))

//override navigation initialState
initialState = {...initialState, drawerOpen: false, contextDrawerOpen: false };

export default (state = initialState, action) => {
  let nextState = AppNavigator.router.getStateForAction(action, state) || state;
  switch(action.routeName) {
    case "DrawerOpen": return {...nextState, drawerOpen: true };
    case "DrawerClose": return {...nextState, drawerOpen: false };
    case "ContextDrawerOpen": return {...nextState, contextDrawerOpen: true };
    case "ContextDrawerClose": return {...nextState, contextDrawerOpen: false };
    default: return {...nextState, drawerOpen: false, contextDrawerOpen: false};
  }
};


/* Dispatchers ---------------------------*/

export const toogleContextDrawer = (open) => (dispatch, getState) => {
  return dispatch(Action.toogleContextDrawer(open));
}

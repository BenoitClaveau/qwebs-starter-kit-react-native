import { NavigationActions } from 'react-navigation';
import LoginNavigator from '../../components/LoginNavigator';

//WARNING initialState with all routes (must be the main view). Call reset to reload all routes
const initialState = LoginNavigator.router.getStateForAction(NavigationActions.reset({
	index: 0,
	actions: [NavigationActions.navigate({ routeName: 'login' })],
}));

export default (state = initialState, action) => {
  let nextState = LoginNavigator.router.getStateForAction(action, state) || state;
  return { ...nextState };
};
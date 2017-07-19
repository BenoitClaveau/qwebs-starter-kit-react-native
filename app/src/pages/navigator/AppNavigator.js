import { StackNavigator } from 'react-navigation';

import Login from '../login';
import Welcome from '../welcome';

const AppNavigator = StackNavigator({
  Login: { screen: Login },
  Welcome: { screen: Welcome }
});

export default AppNavigator;

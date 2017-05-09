import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './app/home';
import DetailsScreen from './app/details';

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Details: { screen: DetailsScreen }
});

AppRegistry.registerComponent('App', () => App);

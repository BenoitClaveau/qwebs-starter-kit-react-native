import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './app/home';
import DetailsScreen from './app/details';
import DetailScreen from './app/detail';

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Details: { screen: DetailsScreen },
  Detail: { screen: DetailScreen }
});

AppRegistry.registerComponent('App', () => App);

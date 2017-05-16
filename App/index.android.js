import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './app/home';
import DetailsScreen from './app/details';
import DetailScreen from './app/detail';
import TabBarScreen from './app/tabbar';

const App = StackNavigator({
  // Home: { screen: HomeScreen },
  Home: { screen: TabBarScreen },
  Details: { screen: DetailsScreen },
  Detail: { screen: DetailScreen }
});

AppRegistry.registerComponent('App', () => App);

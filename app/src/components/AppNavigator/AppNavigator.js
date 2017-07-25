import React, { Component} from 'react';
import { StackNavigator, DrawerNavigator, TabNavigator } from 'react-navigation';
import styles from './styles';
import DrawerButton from '../DrawerButton';
import DrawerContent from '../DrawerContent';
import TabBar from '../TabBar';
import Login from '../../pages/login';
import Welcome from '../../pages/welcome';
import Settings from '../../pages/settings';
import Test from '../../pages/test';

const Tab = TabNavigator(
  {
    settings: {
      screen: Settings,
    },
    test: {
      screen: Test,
    },
  },
  {
    tabBarComponent: TabBar //Link custom TabBar
  }
);

const Main = DrawerNavigator({
  welcome: {
    screen: Welcome,
  },
  tab: {
    screen: Tab
  }
}, {
  contentComponent: DrawerContent,  //Link to the drawer content view
  contentOptions: {
    activeTintColor: "#e91e63",
    style: {
      flex: 1,
      paddingTop: 15,
    }
  }
});

const AppNavigator = StackNavigator({
  main: {
    screen: Main,
    path: "main",
    navigationOptions: {
      title: `Welcome 2`,
    }
  }
}, {
  headerMode: 'screen',
  navigationOptions: ({navigation}) => ({
    headerLeft: <DrawerButton navigation={navigation} />, //Add a button to open the drawer
    headerStyle: { backgroundColor: "#333" },
    headerTitleStyle: { color: "#FFF" }
  }),
});

export default AppNavigator;
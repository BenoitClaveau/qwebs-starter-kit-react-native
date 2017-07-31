import React, { Component} from 'react';
import { StackNavigator, DrawerNavigator, TabNavigator, TabRouter } from 'react-navigation';
import styles from './styles';
import DrawerButton from '../DrawerButton';
import ContextDrawerButton from '../ContextDrawerButton';
import DrawerContent from '../DrawerContent';
import TabsContainer from '../TabsContainer';
import Welcome from '../../pages/welcome';

const Main = DrawerNavigator({
  welcome: {
    screen: Welcome,
  },
  tabs: {
    screen: TabsContainer
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
    navigationOptions: {
      title: `Welcome 2`,
    }
  }
}, {
  headerMode: 'screen',
  navigationOptions: ({navigation}) => ({
    headerLeft: <DrawerButton navigation={navigation} />, //Add a button to open the drawer
    headerRight: <ContextDrawerButton navigation={navigation} />, //Add a button to open the drawer
    headerStyle: { backgroundColor: "#333" },
    headerTitleStyle: { color: "#FFF" }
  }),
});

export default AppNavigator;
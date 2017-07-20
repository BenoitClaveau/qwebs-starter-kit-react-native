import React from 'react';
import { StackNavigator, DrawerNavigator, DrawerItems } from 'react-navigation';
import { 
  ScrollView,
  View,
  Text,
  Image
} from 'react-native';
import styles from './styles';
import Login from '../login';
import Welcome from '../welcome';
import Settings from '../settings';

const image = require("../../assets/images/logo-audi.png");

// const AppNavigator = StackNavigator({
//   Login: { screen: Login }, 
//   Welcome: { screen: Welcome }
// });

const AppNavigator = DrawerNavigator({
  Welcome: {
    screen: Welcome,
  },
  Settings: {
    screen: Settings,
  },
}, {
  drawerWidth: 300,
  drawerPosition: 'left',
  contentOptions: {
    activeTintColor: '#e91e63',
  },
  contentComponent: (props) => (
    <View style={styles.drawer}>
      <ScrollView>
        <View style={styles.drawerHeader}>
          <Image 
              style={styles.drawerHeaderImage}
              source={image}
          />
        </View>
        <DrawerItems
          {...props}
        />
      </ScrollView>
    </View>
  )
});


export default AppNavigator;

//http://docs.nativebase.io/docs/examples/navigation/StackNavigationExample.html
//https://github.com/react-community/react-navigation/issues/131

//Custom drawer
//https://github.com/react-community/react-navigation/blob/master/src/views/Drawer/DrawerView.js
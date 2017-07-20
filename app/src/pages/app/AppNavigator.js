import React, { Component} from 'react';
import { StackNavigator, DrawerNavigator, DrawerItems, TabNavigator } from 'react-navigation';
import { 
  ScrollView,
  View,
  Text,
  Image,
  TouchableHighlight
} from 'react-native';
import {
  Icon,
} from 'native-base';
import styles from './styles';
import Login from '../login';
import Welcome from '../welcome';
import Settings from '../settings';
import Test from '../test';

const image = require("../../assets/images/logo-audi.png");

// const AppNavigator = StackNavigator({
//   Login: { screen: Login }, 
//   Welcome: { screen: Welcome }
// });

// const AppNavigator = DrawerNavigator({
//   Welcome: {
//     screen: Welcome,
//   },
//   Settings: {
//     screen: Settings,
//   },
// }, {
//   title: 'My Chats',
//   drawerWidth: 300,
//   drawerPosition: 'left',
//   contentOptions: {
//     activeTintColor: '#e91e63',
//   },
//   contentComponent: (props) => (
//     <View style={styles.drawer}>
//       <ScrollView>
//         <View style={styles.drawerHeader}>
//           <Image 
//               style={styles.drawerHeaderImage}
//               source={image}
//           />
//         </View>
//         <DrawerItems
//           {...props}
//         />
//       </ScrollView>
//     </View>
//   )
// });

const Stack = TabNavigator({
   Settings: {screen: Settings },
   Welcome: {screen: Welcome },
   Test: {screen: Test},
}, {
   headerMode: 'none'
});

const Drawer = DrawerNavigator({
  Welcome: {
    screen: Welcome
  },
  Stack: {
    screen: Stack
  }
}, {
  //contentComponent: DrawerMenu,
  contentOptions: {
    activeTintColor: "#e91e63",
    style: {
      flex: 1,
      paddingTop: 15,
    }
  }
});


const AppNavigator = StackNavigator({
  Welcome: {
    screen: Welcome,
    navigationOptions: {
      title: `Welcome 2`,
    }
  }
}, {
  headerMode: 'screen',
  navigationOptions: ({navigation}) => ({
    //see https://reactnavigation.org/docs/navigators/stack
    //see https://github.com/react-community/react-navigation/blob/master/examples/NavigationPlayground/js/SimpleStack.js
    headerLeft: <DrawerButton navigation={navigation} />,
    headerStyle: { backgroundColor: "#333" },
    headerTitleStyle: { color: "#FFF" }
  }),
});

class DrawerButton extends Component {
  render() {
    return (
      <View style={{padding: 16 }}>
        <TouchableHighlight onPress={() => this.props.navigation.goBack(null)}>
          <Icon name="menu" />
        </TouchableHighlight>
      </View>
    )
  }
};

export default AppNavigator;

//http://docs.nativebase.io/docs/examples/navigation/StackNavigationExample.html
//https://github.com/react-community/react-navigation/issues/131

//Custom drawer
//https://github.com/react-community/react-navigation/blob/master/src/views/Drawer/DrawerView.js

//Signin signup
//https://medium.com/the-react-native-log/building-an-authentication-flow-with-react-navigation-fb5de2203b5c
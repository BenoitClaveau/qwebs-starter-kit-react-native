import React, { Component} from 'react';
import { ScrollView, View,Text, Image, TouchableHighlight, TouchableOpacity, Button } from 'react-native';
import { StackNavigator, DrawerNavigator, TabNavigator, TabRouter, createNavigationContainer, createNavigator, addNavigationHelpers } from 'react-navigation';
import styles from './styles';
import DrawerButton from '../DrawerButton';
import ContextDrawerButton from '../ContextDrawerButton';
import DrawerContent from '../DrawerContent';
import TabBar from '../TabBar';
import Login from '../../pages/login';
import Welcome from '../../pages/welcome';
import Settings from '../../pages/settings';
import Test from '../../pages/test';

//TAB with custom tab bar
// const Tabs = TabNavigator(
//   {
//     settings: {
//       screen: Settings,
//     },
//     test: {
//       screen: Test,
//     },
//   },
//   {
//     tabBarComponent: TabBar //Link custom TabBar
//   }
// );

const Tabs = TabRouter(
  {
    settings: {
      screen: Settings,
    },
    test: {
      screen: Test,
    },
    test2: {
      screen: Test,
    },
    test3: {
      screen: Test,
    },
    test4: {
      screen: Test,
    },
  }
);

import SideBar  from './SideBar';
import SideMenu from 'react-native-side-menu';

class CustomTabView extends Component {
  render() {
    let navigation = this.props.navigation;
    let router = this.props.router;
    const { routes, index } = navigation.state;
    
    const ActiveScreen = router.getComponentForState(navigation.state);
    
    return (
      <View style={{ flex: 1 }}>


      <SideMenu
         ref={(ref) => { this.drawer = ref; }}
         menu={ <SideBar /> }
         menuPosition="right"
         isOpen={this.props.contextDrawerOpen}
         onChange={(open) => this.props.toogleContextDrawer(open)}
         animationFunction={(prop, value) => Animated.timing(prop, {
           toValue: value,
           duration: 250
         })}
      >

        <Text>Settings</Text>
        <Text>Worflow</Text>
        

        <ScrollView horizontal={true} style={{ flexGrow: 0 }}>
{routes.map(route => (
          <TouchableOpacity style={{width: 150, height: 74}} onPress={() => this.props.navigation.navigate(route.routeName)}>
            <View style={{backgroundColor: 'powderblue', marginTop: 4, marginBottom: 8, marginLeft: 4, marginRight: 4, flex: 1, borderWidth: 1, borderColor: "#333", justifyContent: "center", alignItems: "center" }}>
              <Text>{route.routeName}</Text>
            </View>
          </TouchableOpacity>
))}
        </ScrollView >

        <ActiveScreen
          navigation={addNavigationHelpers({
            ...navigation,
            state: routes[index],
        })}
        /> 

        </SideMenu>
      </View>
    );
  }
};

const TabsContainer = createNavigationContainer(createNavigator(Tabs)(CustomTabView));

const Main = DrawerNavigator({
  welcome: {
    screen: Welcome,
  },
  tab: {
    screen: TabsContainer//Tabs
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
    headerRight: <ContextDrawerButton navigation={navigation} />, //Add a button to open the drawer
    headerStyle: { backgroundColor: "#333" },
    headerTitleStyle: { color: "#FFF" }
  }),
});

export default AppNavigator;
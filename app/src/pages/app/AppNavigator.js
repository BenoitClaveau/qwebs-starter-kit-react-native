import React, { Component} from 'react';
import { StackNavigator, DrawerNavigator, DrawerItems, TabNavigator, TabBarTop } from 'react-navigation';
import { 
  ScrollView,
  View,
  Text,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Button
} from 'react-native';
import {
  Icon,
} from 'native-base';
import styles from './styles';
import DrawerButton from '../../components/DrawerButton';
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

const Tab = TabNavigator({
  settings: {
    screen: Settings,
    path:"settings",
    navigationOptions: {
      tabBarLabel: 'My settings',
    }
  },
  test: {
    screen: Test,
    path:"test",
  },
}, {
  headerMode: 'screen',
  tabBarOptions: {
    activeTintColor: '#fff',
    inactiveTintColor: '#bbb',
    style: {
      backgroundColor: "#666",
    },
    titleStyle: {
      color: 'white',
    }
  },
});

// let currentIndex;

// const Tab = TabNavigator(
//   {
//     settings: {
//       screen: Settings,
//     },
//     test: {
//       screen: Test,
//     },
//   },
//   {
//     tabBarComponent: ({ jumpToIndex, ...props }) => (
//       <TabBarTop
//         {...props}
//         jumpToIndex={index => {
//           if (currentIndex === index && index === 0) {
//             let resetTabAction = NavigationActions.navigate({
//               routeName: "settings",
//               action: NavigationActions.reset({
//                 index: 0,
//                 actions: [NavigationActions.navigate({ routeName: "Main" })],
//               }),
//             });
//             props.navigation.dispatch(resetTabAction);
//           } else {
//             currentIndex = index;
//             jumpToIndex(index);
//           }
//         }}
//       />
//     ),
//   }
// );


var navitems =[
    {
      name:'welcome menu',
      nav:'welcome',
    },
    {
      name:'settings',
      nav:'settings',
    },
    {
      name:'test',
      nav:'test',
    },
]

//Custom Drawer
//see https://gist.github.com/temitope/0ac2390e75c04d9ba4badfd9f920e321
class DrawerContent extends Component { 
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={{borderWidth:0, flex:1, backgroundColor:'#aaa', marginTop:-20, paddingTop:40}}>
        <View>{
          navitems.map((l,i)=>{    
            return (
              <TouchableOpacity 
                key={i} 
                style={{marginBottom:0.5}} 
                onPress={()=>{this.props.navigation.navigate(l.nav)}
              }>
                <View 
                  style={{flexDirection:'row', height:50, paddingLeft:15, backgroundColor:'#fff0', borderTopWidth:0.5, borderColor:'#fff'}}
                >
                  <Text style={{fontSize:36,color:'#fff'}}>{l.name}</Text>
                </View>
              </TouchableOpacity>)
          })
        }
        </View>              
      </View>
    )
  }
}

class ChatScreen extends Component {
  render() {
    const {state} = this.props.navigation;
    return (
      <View>
        <Text>CHAT with: {this.props.navigation.state.params.user}</Text>
        <Button
          onPress={() => this.props.navigation.navigate('recent')}
          title="recent"
        />
        <Button
          onPress={() => this.props.navigation.navigate('all')}
          title="all"
        />
      </View>
    )
  }
}

class RecentChatsScreen extends Component {
  render() {
    return (
      <View>
        <Text>RECENT</Text>
        <Button
          onPress={() => this.props.navigation.navigate('chat', { user: 'Lucy' })}
          title="chat"
        />
        <Button
          onPress={() => this.props.navigation.navigate('all')}
          title="all"
        />
      </View>
    )
  }
}

class AllContactsScreen extends Component {
  render() {
    return (
      <View>
        <Text>ALL</Text>
        <Button
          onPress={() => this.props.navigation.navigate('chat', { user: 'Lucy' })}
          title="chat"
        />
        <Button
          onPress={() => this.props.navigation.navigate('recent')}
          title="recent"
        />
      </View>
    )
  }
}

const MainScreenNavigator = TabNavigator({
  recent: { screen: RecentChatsScreen },
  all: { screen: AllContactsScreen },
});


// const NavigatorWrappingScreen = ({ navigation }) => (
//   <View>
//     <Text>COOOL</Text>
//     <MainScreenNavigator navigation={navigation}/>
//   </View>
// );

// NavigatorWrappingScreen.router = MainScreenNavigator.router;


const NavigatorWrappingScreen = class extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Text>-- START --</Text>
        <MainScreenNavigator navigation={this.props.navigation}/>
        <Text>-- END --</Text>
      </View>
    );
  }
}
NavigatorWrappingScreen.router = MainScreenNavigator.router;

const SimpleApp = StackNavigator({
  main: { screen: NavigatorWrappingScreen },
  chat: { screen: ChatScreen },
});





// //Main view
// const Main = DrawerNavigator({
//   welcome: {
//     screen: Welcome,
//   },
//   tab: {
//     screen: Tab
//   }
// }, {
//   contentComponent: DrawerContent,
//   contentOptions: {
//     activeTintColor: "#e91e63",
//     style: {
//       flex: 1,
//       paddingTop: 15,
//     }
//   }
// });

// const AppNavigator = StackNavigator({
//   main: {
//     screen: SimpleApp,//Main,
//     path: "main",
//     navigationOptions: {
//       title: `Welcome 2`,
//     }
//   }
// }, {
//   headerMode: 'screen',
//   navigationOptions: ({navigation}) => ({
//     //see https://reactnavigation.org/docs/navigators/stack
//     //see https://github.com/react-community/react-navigation/blob/master/examples/NavigationPlayground/js/SimpleStack.js
//     headerLeft: <DrawerButton navigation={navigation} />,
//     headerStyle: { backgroundColor: "#333" },
//     headerTitleStyle: { color: "#FFF" }
//   }),
// });

export default SimpleApp;

//http://docs.nativebase.io/docs/examples/navigation/StackNavigationExample.html
//https://github.com/react-community/react-navigation/issues/131

//Custom drawer
//https://github.com/react-community/react-navigation/blob/master/src/views/Drawer/DrawerView.js

//Signin signup
//https://medium.com/the-react-native-log/building-an-authentication-flow-with-react-navigation-fb5de2203b5c

//Nested Navigator
//https://github.com/react-community/react-navigation/blob/master/docs/guides/Guide-Nested.md

//Custom TabBar
//https://github.com/react-community/react-navigation/issues/1059

// import { NavigationActions } from 'react-navigation';
// const mapDispatchToProps = dispatch => ({
//   logout: () => dispatch({ type: 'Logout' }),
//   loginScreen: () =>
//     dispatch(NavigationActions.navigate({ routeName: 'Login' })),
// });

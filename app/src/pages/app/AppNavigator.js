import React, { Component} from 'react';
import { StackNavigator, DrawerNavigator, DrawerItems, TabNavigator, TabBarTop, addNavigationHelpers, TabItem, createNavigationContainer, createNavigator, TabRouter } from 'react-navigation';
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

let currentIndex;

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
    tabBarComponent: ({ jumpToIndex, ...props }) => (
      <ScrollView horizontal={true}>
        <TouchableOpacity style={{width: 150, height: 74, backgroundColor: 'powderblue'}} onPress={() => props.navigation.navigate("test")}>
          <Text>Val 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width: 150, height: 74, backgroundColor: 'skyblue'}} onPress={() => props.navigation.navigate("settings")}>
          <Text>Val 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width: 150, height: 74, backgroundColor: 'steelblue'}} onPress={() => props.navigation.navigate("test")}>
          <Text>Val 3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width: 150, height: 74, backgroundColor: 'powderblue'}} onPress={() => props.navigation.navigate("settings")}>
          <Text>Val 4</Text>
        </TouchableOpacity>
      </ScrollView >
    ),
  }
);


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
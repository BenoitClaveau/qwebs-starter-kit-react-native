import React, { Component} from 'react';
import { StackNavigator } from 'react-navigation';
import { ScrollView, View, Text, Image, TouchableHighlight, TouchableOpacity, Button } from 'react-native';
import { Icon } from 'native-base';
import styles from './styles';

//pages
//import Login from '../../pages/login';

class RecentChatsScreen extends React.Component {
  render() {
    return <Text>List of recent chats</Text>
  }
}

const Navigator = StackNavigator({
  login: {
    screen: RecentChatsScreen
  }
});

export default Navigator;
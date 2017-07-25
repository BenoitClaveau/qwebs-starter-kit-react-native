import React, { Component} from 'react';
import { StackNavigator } from 'react-navigation';
import { ScrollView, View, Text, Image, TouchableHighlight, TouchableOpacity, Button } from 'react-native';
import { Icon } from 'native-base';
import styles from './styles';

//pages
import Login from '../../pages/login';
import SignUp from '../../pages/login';

const Navigator = StackNavigator({
  login: {
    screen: Login
  },
  signup: {
    screen: SignUp
  }
}, {
  headerMode: 'none'
});

export default Navigator;
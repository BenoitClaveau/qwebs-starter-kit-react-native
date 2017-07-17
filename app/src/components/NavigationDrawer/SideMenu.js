import React from 'react';
import { StyleSheet, Text, View,  Button } from "react-native";
import { Actions } from 'react-native-router-flux';
import styles from './styles';

export default (props, context) => {
  const drawer = context.drawer;
  return (
    <View style={[styles.container, props.sceneStyle ]}>
      <Text>Tab {props.title}</Text>
      <Button onPress={() => { drawer.close(); Actions.main(); }}>Switch to main</Button>
    </View>
  );
};
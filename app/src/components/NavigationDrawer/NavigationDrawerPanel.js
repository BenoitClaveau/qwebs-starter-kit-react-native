import React from 'react';
import { StyleSheet, Text, View,  Button } from "react-native";
import { Actions } from 'react-native-router-flux';
import styles from './styles';

export default (props, context) => {
  const drawer = context.drawer;
  return (
    <View style={styles.container}>
      <Text>Tab 1</Text>
      <Text>Tab 2</Text>
    </View>
  );
};
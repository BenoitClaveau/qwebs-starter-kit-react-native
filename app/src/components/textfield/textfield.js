import React from 'react';
import { TextInput, Text, View  } from 'react-native';
import styles from './styles';

export default (props) => (
  <View
    style={styles.view}>
    <Text 
        style={styles.label}>
        {props.name}
    </Text>
    <TextInput
      {...props}
      autoCapitalize="none"
      style={styles.input}
    />
  </View>
)

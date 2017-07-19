import React, { Component } from 'react';
import { 
  StyleSheet,
  View,
} from 'react-native';

export default class MenuLine extends Component {
  render() {
    return (
      <View style={[styles.line, this.props.style]}></View>
    );
  }
}

const styles = StyleSheet.create({
  line: {
    height: 1,
    backgroundColor: '#fff'
  }
});


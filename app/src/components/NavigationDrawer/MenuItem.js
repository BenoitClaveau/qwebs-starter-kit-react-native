import React, { Component } from 'react';
import { 
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

export default class MenuItem extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Text style={[styles.text, this.props.style]}>{this.props.children}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 32,
    paddingRight: 8,
    fontSize: 18, 
    textAlign: 'left',
    color: "#fff"
  },
});


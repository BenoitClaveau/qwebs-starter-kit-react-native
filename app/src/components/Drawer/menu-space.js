import React from 'react';
import { 
  StyleSheet,
  View,
} from 'react-native';

export default class MenuSpace extends React.Component {
  render() {
    return (
      <View style={[styles.line, this.props.style]}></View>
    );
  }
}

const styles = StyleSheet.create({
  line: {
    height: 24,
  }
});


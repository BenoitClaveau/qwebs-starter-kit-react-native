import React, { Component } from 'react';
import { 
  StyleSheet,
} from 'react-native';
import MenuLine from './MenuLine.js';

export default class MenuSubLine extends Component {
  render() {
    return (
      <MenuLine style={styles.line}/>
    );
  }
}

const styles = StyleSheet.create({
  line: {
    backgroundColor: "#4f5458"
  }
});


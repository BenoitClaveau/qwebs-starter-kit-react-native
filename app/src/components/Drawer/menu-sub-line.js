import React from 'react';
import { 
  StyleSheet,
} from 'react-native';
import MenuLine from './menu-line.js';

export default class MenuSubLine extends React.Component {
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


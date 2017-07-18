import React from 'react';
import { 
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import MenuItem from './menu-item.js';

export default class MenuSubItem extends React.Component {
  render() {
    return (
      <MenuItem 
        style={styles.text}>
        {this.props.children}
      </MenuItem>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    paddingLeft: 64,
    fontSize: 16,
    backgroundColor: "#2e3337"
  },
});


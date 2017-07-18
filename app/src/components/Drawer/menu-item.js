import React from 'react';
import { 
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

export default class MenuItem extends React.Component {

  handleOnPress(event) {
    this.props.setPage(event.nativeEvent.text.trim());
  }

  render() {
    return (
      <TouchableOpacity onPress={this.handleOnPress.bind(this)}>
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


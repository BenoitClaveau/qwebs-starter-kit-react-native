import React, { Component} from 'react';
import { 
  View,
  TouchableOpacity
} from 'react-native';
import {
  Icon,
} from 'native-base';
import { connect } from 'react-redux';
import styles from './styles';

const mapStateToProps = ({ nav }) => ({ drawerOpen: nav.drawerOpen }); 

class DrawerButton extends Component {

  render() {
    if(this.props.drawerOpen) return this.renderOpen();
    return this.renderClose();
  }
  
  renderOpen() {
    return (
      <View style={styles.container}>
        <TouchableOpacity 
          onPress={() => this.props.navigation.navigate("DrawerClose")}
        >
          <Icon name="close" style={styles.icon}/>
        </TouchableOpacity>
      </View>
    )
  }

  renderClose() {
    return (
      <View style={styles.container}>
        <TouchableOpacity 
          onPress={() => this.props.navigation.navigate("DrawerOpen")}
        >
          <Icon name="menu" style={styles.icon}/>
        </TouchableOpacity>
      </View>
    )
  }
};

export default connect(mapStateToProps)(DrawerButton);
import React, { Component} from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import { connect } from 'react-redux';
import styles from './styles';

const mapStateToProps = ({ nav }) => ({ contextDrawerOpen: nav.contextDrawerOpen}); 

class ContextDrawerButton extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    if(this.props.contextDrawerOpen) return this.renderOpen();
    return this.renderClose();
  }
  
  renderOpen() {
    return (
      <View style={styles.container}>
        <TouchableOpacity 
          onPress={() => this.props.navigation.navigate("ContextDrawerClose")}
        >
          <Icon name="ios-funnel" style={styles.icon}/>
        </TouchableOpacity>
      </View>
    )
  }

  renderClose() {
    return (
      <View style={styles.container}>
        <TouchableOpacity 
          onPress={() => this.props.navigation.navigate("ContextDrawerOpen")}
        >
          <Icon name="ios-funnel-outline" style={styles.icon}/>
        </TouchableOpacity>
      </View>
    )
  }
};

export default connect(mapStateToProps)(ContextDrawerButton);
import React, { Component} from 'react';
import { ScrollView, View, TouchableOpacity, Text } from 'react-native';
import { Icon } from 'native-base';
import { connect } from 'react-redux';
import styles from './styles';

const mapStateToProps = ({}) => ({}); 

class TabBar extends Component { 
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <ScrollView horizontal={true}>
        <TouchableOpacity style={{width: 150, height: 74, backgroundColor: 'powderblue'}} onPress={() => this.props.navigation.navigate("test")}>
          <Text>Val 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width: 150, height: 74, backgroundColor: 'skyblue'}} onPress={() => this.props.navigation.navigate("settings")}>
          <Text>Val 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width: 150, height: 74, backgroundColor: 'steelblue'}} onPress={() => this.props.navigation.navigate("test")}>
          <Text>Val 3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width: 150, height: 74, backgroundColor: 'powderblue'}} onPress={() => this.props.navigation.navigate("settings")}>
          <Text>Val 4</Text>
        </TouchableOpacity>
      </ScrollView >
    )
  }
}

export default connect(mapStateToProps)(TabBar);
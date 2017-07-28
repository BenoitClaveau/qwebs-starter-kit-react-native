import React, { Component } from 'react';
import {
  Button,
  Text,
  Container,
  Content,
  Icon,
  Drawer 
} from 'native-base';
import { View, Dimensions } from 'react-native';

const window = Dimensions.get('window');

class SideBar extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Container style={{flex:1, height: window.height, width: window.width }}>
            <Content>
            <View>
                <Text>SideBar</Text>
            </View>
            </Content>
        </Container>
    )
  }
}

export default SideBar;
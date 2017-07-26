import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Content,
  Icon,
  Text,
  Button,
} from 'native-base';
import { View } from 'react-native';
import styles from './styles';
import appStyles from '../app/styles';

const mapDispatchToProps = { };
const mapStateToProps = ({}) => ({}); 

class Test extends Component {

  static navigationOptions = {
    title: 'Test',

    drawerLabel: 'Test',
    drawerIcon: ({ tintColor }) => (
      <Icon
        style={{color: tintColor}}
        ios="ios-happy-outline"
        android="md-hammer"
      />
    ),
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <View style={styles.iconBox}>
            <Text>Home</Text>
          </View>
        </Content>
      </Container>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Test);
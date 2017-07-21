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

import { resetToken } from '../../redux/reducers/auth';

const mapDispatchToProps = { resetToken };
const mapStateToProps = ({}) => ({}); 

class Welcome extends Component {

  // static navigationOptions = {
  //   title: 'Welcome',

  //   drawerLabel: 'Welcome',
  //   drawerIcon: ({ tintColor }) => (
  //     <Icon
  //       style={{color: tintColor}}
  //       ios="ios-happy-outline"
  //       android="md-hammer"
  //     />
  //   ),
  // };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <View style={styles.iconBox}>
            <Icon
              style={styles.icon}
              ios="ios-happy"
              android="md-happy"
            />
            <Text style={styles.welcome}>Welcome</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              block
              style={styles.button}
              onPress={() => this.props.resetToken()}
            >
              <Text>Log out</Text>
            </Button>
            <Text style={styles.or}>OR</Text>
            <Button
              block
              style={styles.button}
              onPress={() => this.props.navigation.navigate("settings")}
            >
              <Text>Settings</Text>
            </Button>
          </View>
        </Content>
      </Container>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
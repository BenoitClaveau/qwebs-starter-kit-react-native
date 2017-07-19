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
import { goto } from '../../redux/reducers/page';

const mapDispatchToProps = { goto };
const mapStateToProps = ({}) => ({}); 

class Login extends Component {
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
              ios="ios-happy-outline"
              android="md-happy"
            />
            <Text style={styles.welcome}>Welcome</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              block
              style={styles.button}
              onPress={() => this.props.goto("Login")}
            >
              <Text>Log in</Text>
            </Button>
            <Text style={styles.or}>OR</Text>
            <Button
              block
              style={styles.button}
              onPress={() => this.props.goto("Signup")}
            >
              <Text>Sign up</Text>
            </Button>
          </View>
        </Content>
      </Container>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
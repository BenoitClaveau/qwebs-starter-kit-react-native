import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Button,
  Text,
  Container,
  Content,
  Icon,
  Drawer 
} from 'native-base';
import { View, Animated } from 'react-native';
import styles from './styles';
import appStyles  from '../app/styles';

const mapDispatchToProps = () => ({ })
const mapStateToProps = ({}) => ({}); 

class Settings extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (      
        <Container>
          <Content>
            <View style={styles.iconBox}>
              <Icon
                style={styles.icon}
                ios="ios-happy-outline"
                android="md-happy"
              />
              <Text style={styles.welcome}>Settings</Text>
            </View>
            <View style={styles.buttonContainer}>
              <Button
                block
                style={styles.button}
                onPress={() => this.props.navigation.navigate("welcome")}
              >
                <Text>Welcome</Text>
              </Button>
            </View>
          </Content>
        </Container>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
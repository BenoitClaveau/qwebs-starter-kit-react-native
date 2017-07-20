import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Button,
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Title,
  Left,
  Icon,
  Right
} from 'native-base';
import { View } from 'react-native';
import styles from './styles';
import appStyles  from '../app/styles';

import { goto } from '../../redux/reducers/page';

const mapDispatchToProps = { goto };
const mapStateToProps = ({}) => ({}); 

class Settings extends Component {

  static navigationOptions = {
    drawerLabel: 'Settings2',
    drawerIcon: ({ tintColor, focused }) => (
      <View style={{flex:1, alignItems: "flex-start" }}>
        <Icon
          style={{ color: tintColor }}
          ios="ios-bicycle"
          android="md-bicycle"
        />
      </View>
    ),
    drawerLabel: ({ tintColor, focused }) => (
      <View style={{flex: 1, flexDirection: "column", justifyContent: 'space-between', height: 80}}>
        <Text>Test</Text>
        <Text>32</Text>
      </View>
    )
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Settings</Title>
          </Body>
          <Right />
        </Header>
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
              onPress={() => this.props.goto("Welcome")}
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
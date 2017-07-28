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

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Content>
          <View>
            <Text>Home</Text>
            <Text>1</Text>
            <Text>2</Text>
          </View>
        </Content>
      </Container>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Test);
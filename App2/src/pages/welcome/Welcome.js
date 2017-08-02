import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Container, Content, Icon, Text, Button} from 'native-base';
import styles from './styles';

const mapDispatchToProps = {};
const mapStateToProps = ({user}) => ({user}); 

class Page extends Component {

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
            <Text style={styles.welcome}>Welcome {this.props.user.login}</Text>
          </View>
          <View style={styles.buttonContainer}>
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

export default connect(mapStateToProps, mapDispatchToProps)(Page);
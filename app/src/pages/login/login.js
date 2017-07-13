import React, { Component } from 'react';
import { connect } from 'react-redux';
import { WebView, View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './styles';

import { authenticate } from '../../redux/reducers/auth';

const mapDispatchToProps = {authenticate};

function mapStateToProps(state) {
  return { token: state.token }
}

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: undefined
    };
  }

  render() {
    if (!this.state.token) return this.renderLogin();
    return this.renderScene();
  }

  renderLogin(){
    return (
      <WebView
        source={{uri: 'http://10.0.0.23:3000/signin?client_id=4&redirect_uri=redirect_uri_value'}}
        javaScriptEnabled={true}
        onNavigationStateChange={this.onNavigationStateChange.bind(this)}
      />
    );
  }

  onNavigationStateChange(navState) {
    let m = /code=([\w-_+]*)/g.exec(navState.url);
    if (m) {
      let token = m[1];
      this.setState({
        token: token
      })
      Actions.welcome(); //Defined in router.js <Scene key=[key]... https://www.youtube.com/watch?v=JKIMbSXlMkY
    }
  }

  renderScene(){
    return (
      <View>
        <Text>Welcome {this.state.token}</Text>
      </View>
    );
  }
}

export default connect(null, mapDispatchToProps)(Login);

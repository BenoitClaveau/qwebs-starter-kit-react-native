import React, { Component } from 'react';
import { connect } from 'react-redux';
import { WebView, View, Text, Button } from 'react-native';
import styles from './styles';

import { saveToken, resetToken } from '../../redux/reducers/user';

const mapDispatchToProps = { saveToken, resetToken }; //saveToken dispatcher is now accessible through this.props.saveToken
const mapStateToProps = ({ user }) => ({ authenticated: user.token != null }); 

class Login extends Component {

  //react-navigation options
  static navigationOptions = {
    title: 'Login',
  };

  constructor(props) {
    super(props);
    this.ready = false;
  }

  render() {
    if (!this.props.authenticated) return this.renderLogin();
    return this.renderScene();
  }

  renderLogin(){
    return (
        <WebView
          source={{uri: 'http://10.0.0.23:3000/signin?client_id=4&redirect_uri=redirect_uri_value'}}
          javaScriptEnabled={true}
          onNavigationStateChange={this.onNavigationStateChange.bind(this)}
          onLoad={this.onLoad.bind(this)}
        />
    );
  }

  onNavigationStateChange(navState) {
    if (!this.ready) return; //bug fix to avoid multiple call

    let m = /code=([\w-_+]*)/g.exec(navState.url);
    if (m) {
      let token = m[1];
      this.props.saveToken(token); //call saveToken dispatcher in user.js
    }
    this.ready = false;
  }

  onLoad(event) {
    this.ready = true;
  }

  renderScene(){
    return (
      <View>
        <Text>You are already identify!</Text>
        <Button title="Reset token" onPress={() => this.props.resetToken()} />
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

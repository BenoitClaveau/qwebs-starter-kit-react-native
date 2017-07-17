import React, { Component } from 'react';
import { connect } from 'react-redux';
import { WebView, View, Text, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './styles';

import { 
  saveToken,
  resetToken
} from '../../redux/reducers/auth';

const mapDispatchToProps = { saveToken, resetToken }; //saveToken dispatcher is now accessible through this.props.saveToken

// function mapStateToProps(state) {
//   return { token: state.auth }
// }

const mapStateToProps = ({ auth }) => ({ auth }); 

const WEBVIEW_REF = 'webview';

class Login extends Component {
  constructor(props) {
    super(props);
    this.ready = false;
  }

  render() {
    if (!this.props.auth.token) return this.renderLogin();
    return this.renderScene();
  }

  renderLogin(){
    return (
        <WebView
          ref={WEBVIEW_REF}
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
      //this.refs[WEBVIEW_REF].stopLoading();
      let token = m[1];
      this.props.saveToken(token); //call saveToken dispatcher in auth.js
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
        <Text>You token is: {this.props.auth.token}</Text>
        <Button title="Reset token" onPress={() => this.props.resetToken()} />
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

// //if no state is used 
// export default connect(null, mapDispatchToProps)(Login);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { WebView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './styles';

import { authenticate } from '../../redux/reducers/users';

const mapDispatchToProps = {authenticate};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: undefined,
      token: undefined,
      access: undefined,
      response: undefined,
      loading: false,
    };
  }

  render() {
    //if (this.state.response) return this.renderResponse();
    // if (this.state.access) return this.fetchProfile();
    // if (this.state.token) return this.fetchAccess();
    // if (this.state.code) return this.fetchToken();

    return this.renderScene();
  }

  renderScene(){
    return (
      <WebView
        source={{uri: 'http://10.0.0.23:3000/signin?client_id=4&redirect_uri=redirect_uri_value'}}
        javaScriptEnabled={true}
        automaticallyAdjustContentInsets={false}
        scalesPageToFit={true}
        onNavigationStateChange={this.onNavigationStateChange.bind(this)}
      />
    );
  }

  onNavigationStateChange(navState) {
    if ((/code=/g).test(String(navState.url))) {
      this.setState({
        code: String(navState.url).replace(`redirect_uri_value?code=`,'')
      });
    }
  }
}

export default connect(null, mapDispatchToProps)(Login);

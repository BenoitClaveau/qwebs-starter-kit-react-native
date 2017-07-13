import React, { Component } from 'react';
import { connect } from 'react-redux';
import { WebView, View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './styles';

import { saveToken } from '../../redux/reducers/auth';

const mapDispatchToProps = { saveToken }; //saveToken is now accessible through this.props.saveToken

const mapStateToProps = ({ token }) => ({ token }); 

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.token) return this.renderLogin();
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
      this.props.saveToken(token); //call saveToken dispatcher in auth.js
      // this.setState({
      //   token: token
      // })
      //Actions.welcome(); //Defined in router.js <Scene key=[key]... https://www.youtube.com/watch?v=JKIMbSXlMkY


    }
  }

  renderScene(){
    return (
      <View>
        <Text>You are already identify!</Text>
        <Text>You token is: {this.state.token}</Text>
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

// //if no state is used 
// export default connect(null, mapDispatchToProps)(Login);

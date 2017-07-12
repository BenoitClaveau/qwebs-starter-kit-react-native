import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Welcome from './welcome';
import Login from './login';

export default class Router extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="login" component={Login} title="Login"/>
          <Scene key="welcome" component={Welcome} title="Register"/>
        </Scene>
      </Router>
    );
  }
}
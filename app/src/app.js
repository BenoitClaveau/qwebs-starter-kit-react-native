import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Router, Scene } from 'react-native-router-flux';

import Welcome from './pages/welcome';
import Login from './pages/login';

export default class App extends Component {
  constructor(){
    super();
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Scene key="root">
            <Scene key="login" component={Login} title="Login"/> 
            <Scene key="welcome" component={Welcome} title="Register"/>
          </Scene>
        </Router>
      </Provider>
    );
  }
}

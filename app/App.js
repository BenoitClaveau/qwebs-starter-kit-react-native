import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import App from './src/pages/app'; //react-navigation

class ReduxApp extends Component {
  constructor(){
    super();
  }

  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default ReduxApp;
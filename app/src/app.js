import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
//import Routes from './pages/routes'; //AndroidToolbar Navigation
import App from './pages/app'; //react-navigation

class ReduxApp extends Component {
  constructor(){
    super();
  }

  render() {
    return (
      <Provider store={store}>
        {/* <Routes/> */}
        <App />
      </Provider>
    );
  }
}

export default ReduxApp;

//https://medium.com/technoetics/handling-wix-react-native-navigation-with-redux-3f593927057a
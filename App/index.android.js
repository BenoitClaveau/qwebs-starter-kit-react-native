import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import { Provider, connect } from 'react-redux';
import store from './src/redux/store';
import Router from './src/pages/router';
import { Font, AppLoading } from 'expo';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      isReady: false,
    }
  }

  async componentWillMount() {
    await Font.loadAsync({
      'Roboto': require('./src/assets/fonts/Roboto.ttf'),
      'Roboto_medium': require('./src/assets/fonts/Roboto_medium.ttf'),
      'Pacifico': require('./src/assets/fonts/Pacifico.ttf'),
      'Ionicons': require('./src/assets/fonts/Ionicons.ttf'),
    });

    this.setState({isReady: true});
  }
  
  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('main', () => App);

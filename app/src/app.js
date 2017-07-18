import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Routes from './pages/routes';

class App extends Component {
  constructor(){
    super();
  }

  render() {
    return (
      <Provider store={store}>
        <Routes/>
      </Provider>
    );
  }
}

export default App;

//https://medium.com/technoetics/handling-wix-react-native-navigation-with-redux-3f593927057a
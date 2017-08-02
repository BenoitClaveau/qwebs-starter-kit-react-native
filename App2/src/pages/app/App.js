import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, NavigationActions } from 'react-navigation';
import AppNavigator from '../../components/AppNavigator';
import LoginNavigator from '../../components/LoginNavigator';

const mapStateToProps = ({ nav, navLogin, user }) => ({ nav, navLogin, authenticated: user.token != null });

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.authenticated) return this.renderLogin();
    return this.renderScene();
  }

  renderLogin() {
    const navigation = addNavigationHelpers({
      dispatch: this.props.dispatch,
      state: this.props.navLogin,
    });
    return (
      <LoginNavigator navigation={navigation} />
    );
  }

  renderScene() {
    const navigation = addNavigationHelpers({
      dispatch: this.props.dispatch,
      state: this.props.nav,
    });
    return (
      <AppNavigator navigation={navigation} />
    );
  }
}


export default connect(mapStateToProps)(App);

//see https://github.com/react-community/react-navigation/tree/master/examples/ReduxExample
//see https://github.com/ModusCreateOrg/react-navigation-redux-sample/blob/master/js/index.js
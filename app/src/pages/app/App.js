import React from 'react';
import { BackHandler } from 'react-native';
import { connect } from 'react-redux';
import { addNavigationHelpers, NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';
import AppNavigator from '../../components/AppNavigator';
import Login from '../login';

const mapStateToProps = ({ nav, auth }) => ({ nav, hasToken: auth.token != null });

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', function() {
      let {dispatch, rootNavigation} = this.props;
      // Close the drawer if necessary.
      if (rootNavigation.routes[rootNavigation.index].key === 'DrawerOpen') {
          dispatch({type: 'Navigate', routeName: 'DrawerClose'});
          return true;
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.hasToken)
      console.log("Authenticated");
  }

  render() {
    if (!this.props.hasToken) return this.renderLogin();
    return this.renderScene();
  }

  renderLogin() {
    return (
      <Login />
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
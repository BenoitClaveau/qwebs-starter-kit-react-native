import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import NavigationDrawer from '../components/NavigationDrawer';
import Welcome from './welcome';
import Login from './login';

export default class Router extends React.Component {
  render() {
    return (
      <Router>
        <Scene key='root'>
          <Scene key='drawer' component={NavigationDrawer} open={false} type='replace'>
            <Scene key="login" component={Login} title="Login" initial/>
            <Scene key="welcome" component={Welcome} title="Welcome"/>
          </Scene>
        </Scene>
      </Router>
    );
  }
}



/** REACT-NATIVE-ROUTER-FLUX
 * <Scene key="[key]" => show by calling Actions.[key]
 * exemple:
 *    <Scene key="login" => show by calling Actions.login
 * 
 * List all navigations components 
 * - Scene
 * - Tab
 * - Modal
 * https://www.youtube.com/watch?v=NOgoU95FrrQ
 */
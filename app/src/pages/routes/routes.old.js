import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';

import NavigationDrawer from '../components/NavigationDrawer';
import Login from './login';
import Welcome from './welcome';

const mapStateToProps = ({ auth }) => ({ hasToken: auth.token }); 

const RouterWithRedux = connect()(Router);

class Routes extends Component {
  constructor(){
    super();
  }

  render() {
    return (
      <RouterWithRedux>
        <Scene key='root'>  
          <Scene key='drawer' component={NavigationDrawer} open={true}> 
              <Scene key="login" component={Login} title="Login" initial={!this.props.hasToken} type="replace"/> 
              <Scene key="welcome" component={Welcome} title="Welcome" initial={this.props.hasToken} type="replace"/> 
          </Scene>    
        </Scene>  
      </RouterWithRedux>
    );
  }
}

export default connect(mapStateToProps)(Routes);
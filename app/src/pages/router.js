import React from 'react';
import { Scene, Router, Actions, ActionConst } from 'react-native-router-flux';
import Welcome from '../pages/welcome';
import Login from '../pages/login';

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="welcome" component={Welcome} title="Welcome" initial={true} />
    <Scene key="login" component={Login} title="Login" type={ActionConst.REPLACE} />
  </Scene>
);

export default () => (
  <Router scenes={scenes} />
);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  DrawerLayoutAndroid,
  StyleSheet,
  Text,
  Image,
  View,
  ToolbarAndroid,
  ViewPagerAndroid
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
import styles from './styles';
import { bindActionCreators } from 'redux';

import Login from '../login';
import Welcome from '../welcome';

import Drawer from '../../components/Drawer'; 

import * as Actions from '../../redux/reducers/navigation';

const mapStateToProps = ({ navigation, auth }) => ({ navigation, auth }); 

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch);
}

class Routes extends Component {
  constructor() {
    super();
    this.toolbarActions = [{title: 'Create', iconName: 'filter-list', show: 'always', titleColor: "#252a2d"}];
  }

  componentWillReceiveProps(nextProps) {
    //open or close drawer
    if (this.props.navigation.drawer !== nextProps.navigation.drawer) {
      if (nextProps.navigation.drawer) this.drawer.openDrawer();
      else this.drawer.closeDrawer();
    }

    //change page
    if (this.props.navigation.page !== nextProps.navigation.page) {
      this.viewPager.setPage(nextProps.navigation.page);
    }
  }

  render() {
    //if (!this.props.auth.token) return this.renderLogin();
    return this.renderScene();
  }

  renderLogin() {
    return (
      <Login />
    );
  }

  renderScene() {
    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => <Drawer/> }
        ref={(ref) => { this.drawer = ref; }}
        onDrawerOpen={() => this.props.setDrawerToOpen()}
        onDrawerClose={() => this.props.setDrawerToClose()}    
      >
        <View>
          <Icon.ToolbarAndroid
            contentInsetStart={80}
            navIconName="menu"
            style={styles.toolbar}
            title="ok"
            titleColor="#252a2d"
            actions={this.toolbarActions}
            onActionSelected={() => this.props.toggleDrawer()}      
            onIconClicked={() => this.props.toggleDrawer()}      
          />
          <ViewPagerAndroid
            style={styles.viewPager}
            ref = {viewPager =>{ this.viewPager = viewPager }}
            onPageSelected={(e) => this.props.setRouterPage(e.nativeEvent.position)}
          >
            <View>
              <Text>Leads</Text>
            </View>
            <View>
              <Text>Info</Text>
            </View>
            <View>
              <Text>Follow up</Text>
            </View>
            <View>
              <Text>Reports</Text>
            </View>
            <View>
              <Text>My portfolio</Text>
            </View>
            <View>
              <Text>My account</Text>
            </View>
            <View>
              <Text>About</Text>
            </View>
          </ViewPagerAndroid>
        </View>
      </DrawerLayoutAndroid>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
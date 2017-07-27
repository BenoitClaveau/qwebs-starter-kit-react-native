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
import styles from './styles';
import { bindActionCreators } from 'redux';

import Login from '../login';
import Welcome from '../welcome';

import NavigationDrawer from '../../components/NavigationDrawer'; 

import * as Actions from '../../redux/reducers/route';

const mapStateToProps = ({ navigation, user }) => ({ navigation, user }); 

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch);
}

class Routes extends Component {
  constructor() {
    super();
    this.toolbarActions = [{title: 'Create', iconName: 'filter-list', show: 'always', titleColor: "#252a2d"}];
  }

  componentWillReceiveProps(nextProps) {  //Update the state of the components to be sync with redux state
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
    //if (!this.props.user.token) return this.renderLogin();
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
        renderNavigationView={() => <NavigationDrawer/> }   //Link NavigationDrawer
        ref={(ref) => { this.drawer = ref; }}
        onDrawerOpen={() => this.props.setDrawerToOpen()}   //Link redux state with component state
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
            onActionSelected={() => this.props.toggleDrawer()} //Call dispatcher to modify state   
            onIconClicked={() => this.props.toggleDrawer()}      
          />
          <ViewPagerAndroid
            style={styles.viewPager}
            ref = {viewPager =>{ this.viewPager = viewPager }}
            onPageSelected={(e) => this.props.setRouterPage(e.nativeEvent.position)} //Call dispatcher to modify state   
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

export default connect(mapStateToProps, mapDispatchToProps)(Routes); //Connect component to the store
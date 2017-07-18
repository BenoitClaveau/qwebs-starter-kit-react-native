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

import Login from '../login';
import Welcome from '../welcome';

import Drawer from '../../components/Drawer'; 

// const mapStateToProps = (state, ownProps) => {
//   console.log(state); // state
//   console.log(ownProps); // ownProps

//   return {
//     drawer: state.navigation.drawer,
//     page: state.navigation.page
//   }
// }

const mapStateToProps = ({ navigation, auth }) => ({ navigation, auth }); 

import { 
  toggleDrawer,
  setDrawerToClose,
  setDrawerToOpen
} from '../../redux/reducers/navigation';

const mapDispatchToProps = { 
  toggleDrawer,
  setDrawerToClose,
  setDrawerToOpen 
};

class Routes extends Component {
  constructor() {
    super();
    this.toolbarActions = [{title: 'Create', iconName: 'filter-list', show: 'always', titleColor: "#252a2d"}];
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.navigation.drawer !== nextProps.navigation.drawer) {
      if (nextProps.navigation.drawer) this.drawer.openDrawer();
      else this.drawer.closeDrawer();
    }
  }

  render() {
    if (!this.props.auth.token) return this.renderLogin();
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
            ref = {viewPager =>{ this.viewPager = viewPager;}}
            initialPage={this.props.page}
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
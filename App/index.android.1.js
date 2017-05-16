'use strict';
import React from 'react';
import {
  AppRegistry,
  DrawerLayoutAndroid,
  StyleSheet,
  Text,
  View,
  ToolbarAndroid,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  toolbar: {
    backgroundColor: '#00a2ed',
    height: 56,
  },
});

export default class Home extends React.Component {

  render() {
    const navigationView = (
      <View style={{flex: 1, backgroundColor: '#88D8EC'}}>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>Drawer Item</Text>
      </View>
    );

    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}>
        <View style={styles.container}>
        <ToolbarAndroid
          navIcon={require('image!hamburger')}
          title="OpenLight"
          titleColor="black"
          style={styles.toolbar}
          onIconClicked={() => this.refs[DRAWER_REF].openDrawer()} />
          <Text style={styles.welcome}>
            Example Text
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.android.js
          </Text>
          <Text style={styles.instructions}>
            Shake or press menu button for dev menu
          </Text>
        </View>
      </DrawerLayoutAndroid>
    );
  }
}


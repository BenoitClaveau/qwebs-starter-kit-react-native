import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  ScrollView,
  View,
  Image
} from 'react-native';
import MenuItem from './MenuItem.js';
import MenuSubItem from './MenuSubItem.js';
import MenuLine from './MenuLine.js';
import MenuSubLine from './MenuSubLine.js';
import MenuSpace from './MenuSpace.js';
import styles from './styles';
import { bindActionCreators } from 'redux';
import * as Actions from '../../redux/reducers/navigation';

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch);
}

class Drawer extends Component {

  onMenuItemClick(pageIndex) {
    this.props.setRouterPage(pageIndex);
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* <View style={styles.header}>
          <Image 
            style={styles.logo}
            source={require("../../images/logo-audi.png")}/>
        </View> */}
        <MenuLine/>
        <MenuItem onPress={() => this.onMenuItemClick(0)}>LEADS</MenuItem>
        <MenuSubLine/>
        <MenuSubItem onPress={() => this.onMenuItemClick(0)}>Processing</MenuSubItem>
        <MenuSubLine/>
        <MenuSubItem onPress={() => this.onMenuItemClick(1)}>Follow up</MenuSubItem>
        <MenuLine/>
        <MenuItem onPress={() => this.onMenuItemClick(2)}>NEWS</MenuItem>
        <MenuSubLine/>
        <MenuItem onPress={() => this.onMenuItemClick(3)}>REPORTS</MenuItem>
        <MenuLine/>
        <MenuSpace/>
        <MenuLine/>
        <MenuItem onPress={() => this.onMenuItemClick(4)}>MY PORTFOLIO</MenuItem>
        <MenuSubLine/>
        <MenuItem onPress={() => this.onMenuItemClick(5)}>MY ACCOUNT</MenuItem>
        <MenuLine/>
        <MenuSpace/>
        <MenuLine/>
        <MenuItem onPress={() => this.onMenuItemClick(6)}>ABOUT</MenuItem>
        <MenuLine/>
      </ScrollView>
    );
  }
}

export default connect(null, mapDispatchToProps)(Drawer);
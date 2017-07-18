import React from 'react';
import { 
  StyleSheet,
  ScrollView,
  View,
  Image
} from 'react-native';
import MenuItem from './menu-item.js';
import MenuSubItem from './menu-sub-item.js';
import MenuLine from './menu-line.js';
import MenuSubLine from './menu-sub-line.js';
import MenuSpace from './menu-space.js';

export default class Drawer extends React.Component {

  onMenuItemClick(pageIndex) {
    console.log("click")
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252a2d', /*gris foncé*/
  },
  header: {
    height: 165,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 34,
    width: 100,
  }
});


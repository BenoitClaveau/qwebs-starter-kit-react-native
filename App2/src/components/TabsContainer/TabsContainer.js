import React, { Component} from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import { Picker, Item } from 'native-base';
import { TabRouter, createNavigationContainer, createNavigator, addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import SideMenu from 'react-native-side-menu';
import styles from './styles';
import ContextDrawerContent  from '../ContextDrawerContent';
import { toogleContextDrawer } from '../../redux/reducers/nav';

import Settings  from '../../pages/settings';
import Test  from '../../pages/test';

const mapDispatchToProps = ({}) => ({ toogleContextDrawer }); //WARNING use lambda synatx maybe because redux-thunk is not binded 
const mapStateToProps = ({ nav }) => ({ contextDrawerOpen: nav.contextDrawerOpen }); 

const Tabs = TabRouter(
  {
    settings: {
      screen: Settings,
    },
    test: {
      screen: Test,
    },
    test2: {
      screen: Test,
    },
    test3: {
      screen: Test,
    },
    test4: {
      screen: Test,
    },
  }
);

class CustomTabView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      language: "js"
    }
  }

  render() {
    const { navigation, router, contextDrawerOpen, toogleContextDrawer }  = this.props;
    const { routes, index } = navigation.state;
    
    const ActiveScreen = router.getComponentForState(navigation.state);
    
    return (
      <SideMenu
         ref={(ref) => { this.drawer = ref; }}
         menu={ <ContextDrawerContent /> }
         menuPosition="right"
         isOpen={contextDrawerOpen}
         onChange={(open) => toogleContextDrawer(open)}
      >
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
          <Text>Settings</Text>
          <Text>Worflow</Text>

          <Picker
            selectedValue={this.state.language}
            onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}
            >
              <Item label='Cats' value='key0' />
              <Item label='Dogs' value='key1' />
              <Item label='Birds' value='key2' />
              <Item label='Elephants' value='key3' />
          </Picker>
        
          <ScrollView horizontal={true} style={{ flexGrow: 0 }}>
  {routes.map((route, index) => (
            <TouchableOpacity key={index} onPress={() => navigation.navigate(route.routeName)} style={{width: 150, height: 74}}>
              <View style={{backgroundColor: 'powderblue', marginTop: 4, marginBottom: 8, marginLeft: 4, marginRight: 4, flex: 1, borderWidth: 1, borderColor: "#333", justifyContent: "center", alignItems: "center" }}>
                <Text>{route.routeName}</Text>
              </View>
            </TouchableOpacity>
  ))}
          </ScrollView >

          <ActiveScreen
            navigation={addNavigationHelpers({
              ...navigation,
              state: routes[index],
          })}
          /> 
        </View>
      </SideMenu>
    );
  }
};

export default createNavigationContainer(createNavigator(Tabs)(connect(mapStateToProps, mapDispatchToProps)(CustomTabView)));

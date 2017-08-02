import React, { Component} from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Icon } from 'native-base';
import { connect } from 'react-redux';
import styles from './styles';

const mapStateToProps = ({ nav }) => ({ drawerOpen: nav.drawerOpen }); 

const navitems =[
    {
      name:'welcome menu',
      nav:'welcome',
    },
    {
      name:'settings',
      nav:'settings',
    },
    {
      name:'test',
      nav:'test',
    },
];

class DrawerContent extends Component { 
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={{borderWidth:0, flex:1, backgroundColor:'#aaa', marginTop:-20, paddingTop:40}}>
        <View>{
          navitems.map((l,i)=>{    
            return (
              <TouchableOpacity 
                key={i} 
                style={{marginBottom:0.5}} 
                onPress={()=>{this.props.navigation.navigate(l.nav)}
              }>
                <View 
                  style={{flexDirection:'row', height:50, paddingLeft:15, backgroundColor:'#fff0', borderTopWidth:0.5, borderColor:'#fff'}}
                >
                  <Text style={{fontSize:36,color:'#fff'}}>{l.name}</Text>
                </View>
              </TouchableOpacity>)
          })
        }
        </View>              
      </View>
    )
  }
}

export default connect(mapStateToProps)(DrawerContent);
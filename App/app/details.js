import React from 'react';
import { 
  View,
  Text,
  Image
} from 'react-native';
import DetailsList from './details.list.js';

export default class Details extends React.Component {
  static navigationOptions = {
    title: 'Details',
  };
  render() {
    return (
      <View>
        <Image 
          style={{
            alignSelf: 'center',
            height: 140,
            width: 320,
          }}
          source={{uri: 'http://www.izzili.com/wp-content/uploads/2016/12/Izzili_logo_transparent_dark_font.png'}}
        /> 
        <DetailsList></DetailsList>
      </View>
    );
  }
}

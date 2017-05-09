import React from 'react';
import { 
  View,
  Text,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Text>Hello, Navigation!</Text>
        <Button
          onPress={() => navigate('Details')}
          title="Show details"
        />
      </View>
    );
  }
}
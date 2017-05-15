import React from 'react';
import { 
  StyleSheet,
  View,
  Image,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View>
          <Image 
            style={{
              alignSelf: 'center',
              height: 140,
              width: 320,
            }}
            source={{uri: 'http://www.izzili.com/wp-content/uploads/2016/12/Izzili_logo_transparent_dark_font.png'}}
          />
          <Button
            onPress={() => navigate('Details')}
            title="Show details"
          />
        </View>
      </View>
    );
  }
}
import React from 'react';
import { 
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 22
  }
});

export default class Detail extends React.Component {
  static navigationOptions = {
    title: 'Detail'
  };
  render() {
    const { params } = this.props.navigation.state;

    return (
      <View style={styles.container}>
        <Image 
          style={{
            alignSelf: 'center',
            height: 128,
            width: 96,
          }}
          source={{uri: 'https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_960_720.png'}}
        />
        <Text style={styles.text}>{params.user.login}</Text>
      </View>
    );
  }
}
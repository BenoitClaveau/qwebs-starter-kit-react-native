import React from 'react';
import { 
  StyleSheet,
  View,
  Text,
} from 'react-native';
import DetailsList from './details.list.js';

const styles = StyleSheet.create({
  header: {
    padding: 8,
    alignSelf: 'center',
    fontSize: 16
  }
});

export default class Details extends React.Component {
  static navigationOptions = {
    title: 'Details',
  };
  render() {
    const {navigation} = this.props;
    return (
      <View>
        <Text style={styles.header}>Details</Text>
        <DetailsList navigation={navigation}></DetailsList>
      </View>
    );
  }
}

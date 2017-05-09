import React from 'react';
import { 
  ListView,
  View,
  StyleSheet,
  Text
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 16,
    padding: 16,
    backgroundColor: "#FFFFFF"
  },
  row: {
    marginTop: 16,
    marginBottom: 16
  },
  text: {
    fontSize: 22
  }
});

//http://stackoverflow.com/questions/34263861/listview-datasource-looping-data-for-react-native
export default class DetailsList extends React.Component {
  constructor() {
      super();
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = { 
          dataSource: ds.cloneWithRows(['row 1', 'row 2']), 
    };
  }

  renderRow(props) {
    return (
      <View style={styles.row}>
        <Text style={styles.text}>{`item: ${props}`}</Text>
      </View>
    );
  }

  render() {
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource} 
        renderRow={this.renderRow} 
      />
    );
  }
}

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
          dataSource: ds.cloneWithRows([]),
          loaded: false 
    };
  }

  componentDidMount() { 
    this.fetchData(); 
  }

  fetchData() { 
    return fetch('http://localhost:3000/users')
      .then((response) => response.json())
      .then((responseData) => { 
        this.setState({ 
          dataSource: ds.cloneWithRows(responseData),
          loaded: true
        }); 
      }) 
      .done();
  }

  renderRow(props, sectionId, rowId) {
    return (
      <View style={styles.row}>
        <Text style={styles.text}>{`item: ${props.login}`}</Text>
      </View>
    );
  }

  render() {
    if (!this.state.loaded)
      return (
        <View style={styles.container}>
          <Text>Loading users...</Text>
        </View>
      );

    else 
      return (
        <ListView
          style={styles.container}
          dataSource={this.state.dataSource} 
          renderRow={this.renderRow} 
        />
      );
  }
}

import React from 'react';
import { 
  ListView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 16,
    padding: 16,
    backgroundColor: "#FFFFFF"
  },
  row: {
    flex: 1,
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16
  },
  error: {
    color: "#FF0000"
  }
});

export default class DetailsList extends React.Component {
  constructor() {
      super();
      this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = { 
          dataSource: this.ds.cloneWithRows([]),
          loaded: false,
          error: null
    };
  }

  componentDidMount() { 
    this.fetchData(); 
  }

  fetchData() { 
    return fetch('http://10.0.0.23:3000/users')
      .then((response) => response.json())
      .then((responseData) => { 
        this.setState({ 
          dataSource: this.ds.cloneWithRows(responseData),
          loaded: true,
          error: null
        }); 
      })
      .catch(error => {
        this.setState({ 
          loaded: true,
          error: error.message
        }); 
      })
      .done();
  }

  renderRow(rowData, sectionID, rowID, highlightRow) {
    return (
      <TouchableOpacity 
        style={styles.row} 
        onPress={(ev) => { 
          this.pressRow(ev, rowData);
          highlightRow(sectionID, rowID);
        }}>
        <Text style={styles.text}>{`item: ${rowData.login}`}</Text>
      </TouchableOpacity>
    );
  }

  /*renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
    return (
      <View
        key={`${sectionID}-${rowID}`}
        style={{
          height: 2,
          backgroundColor: adjacentRowHighlighted ? '#3B5998' : '#CCCCCC',
        }}
      />
    );
  }*/

  render() {
    if (!this.state.loaded)
      return (
        <View style={styles.container}>
          <Text style={styles.text}>Loading users...</Text>
        </View>
      );

    else if (this.state.error)
      return (
        <View style={styles.container}>
          <Text style={[styles.text, styles.error]}>{this.state.error}</Text>
        </View>
      );

    else 
      return (
        <ListView
          style={styles.container}
          dataSource={this.state.dataSource} 
          renderRow={this.renderRow.bind(this)}
        />
      );
  }

  pressRow(ev, rowData) {
    this.props.navigation.navigate('Detail', { user: rowData })
  }
}

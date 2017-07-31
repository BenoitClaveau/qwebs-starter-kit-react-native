import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List, FlatList, View, Text } from 'react-native';
import styles from './styles';

import { list } from '../../redux/reducers/users';

const mapDispatchToProps = () => ({ list });
const mapStateToProps = ({ users }) => ({ users }); 

class Test extends Component {

  constructor(props) {
    super(props);
  }

  refresh() {
    this.props.list();
  }

  loadMore() {
    this.props.list(this.props.users.length);
  }

  renderItem(item) {
    return (
      <View style={{height: 60, backgroundColor: "#ff0066", padding: 16 }}>
        <Text>{item.login}</Text>
      </View>
    );
  }

  render() {
    return (
      <View>
        <List>
          <FlatList
            data={this.props.users}
            renderItem={this.renderItem.bind(this)}
            onRefresh={this.refresh.bind(this)}
            onEndReached={this.loadMore.bind(this)}
          />
        </List>
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Test);
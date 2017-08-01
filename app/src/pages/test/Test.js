import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { List, FlatList, View, Text } from 'react-native';
import styles from './styles';

import { list } from '../../redux/reducers/users';

const mapDispatchToProps = { list };
const mapStateToProps = ({ users }) => ({ data: users.data, refreshing: users.refreshing }); 

class Test extends PureComponent {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.refresh();
  }

  refresh() {
    this.props.list({ reload: true});
  }

  loadMore() {
    this.props.list();
  }

  renderItem({item, index}) {
    return (
      <View style={{height: 60, backgroundColor: "#ff0066", padding: 16 }}>
        <Text>{item.login}</Text>
      </View>
    );
  }

  render() {
    const { data, refreshing } = this.props;
    return (
      <FlatList
          keyExtractor={item => item.login}
          data={data}
          renderItem={this.renderItem.bind(this)}
          onRefresh={this.refresh.bind(this)}
          refreshing={refreshing}
          onEndReachedThreshold={1}
          onEndReached={this.loadMore.bind(this)}
      />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Test);
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { List, FlatList, View, Text } from 'react-native';
import styles from './styles';

import { list } from '../../redux/reducers/users';

const mapDispatchToProps = { list };
const mapStateToProps = ({ users }) => ({ users }); 

class Comp extends PureComponent {

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
    const { users } = this.props;
    return (
      <FlatList
          keyExtractor={item => item.login}
          data={users}
          renderItem={this.renderItem.bind(this)}
          onRefresh={this.refresh.bind(this)}
          refreshing={false}
          onEndReachedThreshold={1.5}
          onEndReached={this.loadMore.bind(this)}
      />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comp);
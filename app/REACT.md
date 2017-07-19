# React

## Components

### Binding

Define a new component

```MenuItem.js
export default class MenuItem extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}> //call onPress of component
        <Text style={[styles.text, this.props.style]}>{this.props.children}</Text> //bind props
      </TouchableOpacity>
    );
  }
}
```

```host.js
import MenuItem from './MenuItem.js';

export default class Drawer extends Component {

  onMenuItemClick(pageIndex) {
    console.log("click")
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <MenuItem onPress={() => this.onMenuItemClick(0)}>LEADS</MenuItem> //onPress id define in comoponent, children == LEADS
        ...

```


## Redux

### mapDispatchToProps

Import all actions from reducers

```.js

//import actions manually
import { 
  toggleDrawer,
  setDrawerToClose,
  setDrawerToOpen,
  setRouterPage
} from '../../redux/reducers/route';

//link dispatcher manually
const mapDispatchToProps = { 
  toggleDrawer,
  setDrawerToClose,
  setDrawerToOpen,
  setRouterPage
};
```

```.js
import { bindActionCreators } from 'redux';

//import all actions
import * as Actions from '../../redux/reducers/route';

//Turns an object whose values are action creators
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Actions, dispatch)
}
```

### mapStateToProps


Verbose mode

```.js
const mapStateToProps = (state, ownProps) => {
  console.log(state); // state
  console.log(ownProps); // ownProps

  return {
    drawer: state.navigation.drawer,
    page: state.navigation.page
  }
}
```

Short mode

```.js
const mapStateToProps = ({ navigation, auth }) => ({ navigation, auth });
```

### Sync components with redux state

componentWillReceiveProps is call when props changed

```.js
componentWillReceiveProps(nextProps) {
    //check new state & old state
    if (this.props.navigation.page !== nextProps.navigation.page) {
      //manually set component
      this.viewPager.setPage(nextProps.navigation.page);
    }
  }
  ```

## react-navigation

```shell
npm install --save react-navigation@latest
npm install --save react-native-drawer-layout-polyfill
npm install --save react-native-tab-view
```

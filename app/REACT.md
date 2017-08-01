## React & Redux

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


### Redux

#### mapDispatchToProps

Import all actions from reducers

```.js

//import actions manually
import { 
  toggleDrawer,
  setDrawerToClose,
  setDrawerToOpen,
  setRouterPage
} from '../../redux/reducers/route';

//link dispatcher manually (without redux-thunk)
const mapDispatchToProps = { 
  toggleDrawer,
  setDrawerToClose,
  setDrawerToOpen,
  setRouterPage
};

//link dispatcher manually (with redux-thunk)
const mapDispatchToProps = () => ({ 
  toggleDrawer,
  setDrawerToClose,
  setDrawerToOpen,
  setRouterPage
});
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

#### mapStateToProps


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

#### Sync components with redux state

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

### react-navigation

```shell
npm install --save react-navigation@latest
npm install --save react-native-drawer-layout
npm install --save react-native-drawer-layout-polyfill
npm install --save react-native-tab-view
```

## native-base

http://nativebase.io/docs/v0.5.13/components#form

### List with infinte scroll

(https://github.com/GeekyAnts/nativebase-tutorial/blob/master/app.js)[https://github.com/GeekyAnts/nativebase-tutorial/blob/master/app.js]

## Async / Await

To avoid SynatxError you need to install http://babeljs.io/docs/plugins/preset-stage-3/

```shell
npm install --save-dev babel-preset-stage-3
```

```.bablrc 
{
  "presets": ["stage-3"]
}
```

## Use an api

10.0.2.2 is an alias to loaclhost for the device in AVD

replace http://localhost:3000 to http://10.0.2.2:3000
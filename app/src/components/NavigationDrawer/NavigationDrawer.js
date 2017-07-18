import React, { Component } from 'react';
import Drawer from 'react-native-drawer';
import NavigationDrawerPanel from './NavigationDrawerPanel';
import {Actions, DefaultRenderer} from 'react-native-router-flux';
import styles from './styles';

export default class NavigationDrawer extends Component {

    // componentDidMount() {
    //     Actions.refresh({ key: 'drawer', ref: this.refs.navigation });
    // }

    render() {
        console.log(this.props);
        const state = this.props.navigationState;
        const children = state.children;
        
        return (
            <Drawer
                ref="navigation"
                open={state.open}
                onOpen={()=> Actions.refresh({ key:state.key, open: true })}
                onClose={()=> Actions.refresh({ key:state.key, open: false })}
                type="displace"
                content={<NavigationDrawerPanel />}
                tapToClose={true}
                openDrawerOffset={0.2}
                panCloseMask={0.2}
                negotiatePan={true}
                styles={styles.drawer}
                tweenHandler={(ratio) => {
                  return {
                    mainOverlay: { opacity: ratio === 0 ? 0 : 0.3, backgroundColor: '#000' }
                  }
                }}
            >
                <DefaultRenderer 
                    navigationState={children[0]} 
                    onNavigate={this.props.onNavigate}
                />
            </Drawer>
        );
    }
}

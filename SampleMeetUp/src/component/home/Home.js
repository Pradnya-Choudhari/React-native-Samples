import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, FlatList } from 'react-native';
import EventPreviewLayout from './EventPreviewLayout';
import { Actions } from 'react-native-router-flux';
import MenuHeader from '../common/MenuHeader';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Drawer from 'react-native-drawer';
import ControlPanel from '../common/ControlPanel';
import { strings } from '../common/Localization';
import { getData } from '../common/actions/eventsAction';
import { connect } from 'react-redux';
import Main from './Main';

class Home extends Component {
    state={
        isDrawerOpen: false
    }

    closeDrawer() {
        if (this.state.isDrawerOpen) {
            this.setState({ isDrawerOpen: false });
        }
    }
      
    openDrawer() {
        this.setState({ isDrawerOpen: true });
    }


    render() {
        return (
            <Drawer
            open={this.state.isDrawerOpen}
            content={<ControlPanel />}
            type="overlay"
            openDrawerOffset={0.3}
            panCloseMask={0.2}
            closedDrawerOffset={-3}
            tapToClose={true} 
            styles={drawerStyles}
            tweenHandler={(ratio) => ({ main: { opacity: (1 - ratio) / 1 } })}>
               <Main openDrawer={this.openDrawer.bind(this)} closeDrawer={this.closeDrawer.bind(this)} />
            </Drawer>
        );
    }
}

const drawerStyles = {
    drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
    main: {paddingLeft: 3},
  }

export default Home;

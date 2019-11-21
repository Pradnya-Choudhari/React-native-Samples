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

class Main extends Component {
    
    componentDidMount(){
        this.props.getData();
    }

    onAddEventPress() {
        Actions.addEditEvent();
    }

    onMenuPress() {
        this.props.openDrawer();
    }

    render() {
        return (
                <View style={{ paddingBottom: 70 }}>
                    <MenuHeader headerName={strings.events} onMenuPress={this.onMenuPress.bind(this)}>
                        <TouchableOpacity onPress={this.onAddEventPress.bind(this)}>
                            <EntypoIcon name="circle-with-plus" size={40} color='white' />
                        </TouchableOpacity>
                    </MenuHeader>
                    <FlatList
                        data={this.props.data}
                        keyExtractor={(item, index) => `${index}`}
                        renderItem={({ item }) => (
                            <EventPreviewLayout data={item} />
                        )}
                    />
                </View>
        );
    }
}

const drawerStyles = {
    drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
    main: {paddingLeft: 3},
  }



const mapStateToProps = state => {
    const { data } = state.dataReducer;
    return { data };
};

export default connect(mapStateToProps, { getData })(Main);

import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, FlatList } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { Actions } from 'react-native-router-flux';

class MenuHeader extends Component {

    onBackPress() {
        Actions.pop();
    }

    render() {
        return (
            <View style={styles.headerView}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity onPress={this.props.onMenuPress} style={{ paddingRight: 10 }}>
                        <Entypo name='menu' size={30} color='white' />
                    </TouchableOpacity>
                    <Text style={{ color: 'white', fontSize: 20, alignSelf: 'center' }}>{this.props.headerName}</Text>
                </View>
                <TouchableOpacity style={{ justifyContent: 'center' }}>
                    {this.props.children}
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerView: {
        height: 70, backgroundColor: '#5F9EA0', shadowColor: '#000',
        shadowRadius: 9,
        elevation: 7, right: 0, left: 0, top: 0, padding: 20, flexDirection: 'row', justifyContent: 'space-between'
    }
});


export default MenuHeader;

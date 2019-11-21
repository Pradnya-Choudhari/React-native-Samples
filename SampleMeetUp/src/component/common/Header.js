import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';

class Header extends Component {

    onBackPress() {
        Actions.pop();
    }

    render() {
        return (
            <View style={styles.headerView}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity style={{ paddingRight: 20 }} onPress={this.onBackPress.bind(this)}>
                        <Ionicons name='ios-arrow-back' color='white' size={30}></Ionicons>
                    </TouchableOpacity>
                    <Text style={{ color: 'white', fontSize: 20, alignSelf: 'center' }}>{this.props.headerName}</Text>
                </View>
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


export default Header;

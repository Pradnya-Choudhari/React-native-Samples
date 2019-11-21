import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { strings } from './Localization';


class ControlPanel extends Component {
  
    onLogOutPress() {
        Actions.login();
    }

    onEventPress(){
        Actions.home();
    }


    render() {
        return (
            <View style={{ flex: 1, padding: 20, marginTop: 50 }}>
                <ScrollView>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 20 }} onPress={this.onEventPress.bind(this)}>
                        <MaterialIcons name='event' size={25} />
                        <Text style={{ paddingLeft: 10, color: 'black', fontSize: 20 }}>{strings.events}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={this.onLogOutPress.bind(this)}>
                        <AntDesign name='logout' size={25} />
                        <Text style={{ paddingLeft: 10, color: 'black', fontSize: 20 }}>{strings.logout}</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
  }
}


export default ControlPanel;

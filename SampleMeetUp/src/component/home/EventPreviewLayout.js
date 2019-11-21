import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

class EventPreviewLayout extends Component {

    onEventPress() {
        Actions.eventDetails({ eventData: this.props.data });
    }

  render(){
    return(
        <TouchableOpacity style={styles.Border} onPress={this.onEventPress.bind(this)}>
            <View style={{ alignItems: 'center' }}>
                <Image style={{ borderRadius: 10, }} source={require('../../assets/download.jpg')} />
            </View>
            <View style={{ flex: 1, padding: 20, justifyContent: 'space-between' }}>
                <Text style={styles.DateStyle}>{this.props.data.Date}</Text>
                <Text style={styles.eventNameStyle}>{this.props.data.EventName}</Text>
                <Text>{this.props.data.Location}</Text>
            </View>
        </TouchableOpacity>
    );
  }
}

const styles =  StyleSheet.create({
    Border: {
        flex: 1, borderColor: 'rgb(220,220,220)', borderRadius: 10, borderWidth: 1.5, margin: 20, height: 300, backgroundColor: 'rgb(220,220,220)'
    },
    DateStyle: {
        fontSize: 15, fontWeight: 'bold', color: '#5F9EA0'
    },
    eventNameStyle: {
        color: 'black', fontWeight: 'bold', fontSize: 25, 
    },
    addressStyle: {
        color: 'black', fontSize: 15, 
    }
});

export default EventPreviewLayout;

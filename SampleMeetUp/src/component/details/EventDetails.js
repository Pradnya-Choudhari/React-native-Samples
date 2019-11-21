import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, FlatList, Image, ScrollView } from 'react-native';
import Header from '../common/Header';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux';
import { strings } from '../common/Localization';
import { deleteEvent } from '../common/actions/eventsAction';
import DeleteModal from '../common/DeleteModal';


class EventDetails extends Component {
    state={
        showDeleteModal: false
    }
    onEditDetailsPress() {
        Actions.addEditEvent({ isEdit: true, event: this.props.eventData });
    }

    onDeleteDetailsPress(){
        this.setState({ showDeleteModal: true });        
    }

    onDeletePress(){
        deleteEvent(this.props.eventData);
        this.setState({ showDeleteModal: false });
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header headerName={strings.details} />
                <View style={{ flex: 1, padding: 20 }}>
                    <View style={styles.headerStyle}>
                        <Text style={styles.DateStyle}>{this.props.eventData.Date}</Text>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingTop: 30 }}>
                            <View style={{ flex: 0.8 }}>
                                <Text style={styles.eventNameStyle}>{this.props.eventData.EventName}</Text>
                            </View>
                            <View style={{ flex: 0.2, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <TouchableOpacity onPress={this.onEditDetailsPress.bind(this)}>
                                    <EntypoIcon name="edit" size={20} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={this.onDeleteDetailsPress.bind(this)}>
                                    <MaterialIcons name="delete" size={20} color='red' />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Image style={{ borderRadius: 50, height: 50, width: 50, marginRight: 20 }} source={require('../../assets/download.jpg')} />
                            <Text style={{ alignSelf: 'center', fontSize: 15 }}>{strings.hostedBy} {this.props.eventData.HostedBy}</Text>
                        </View>
                    </View>
                    <View style={{ flex: 0.7 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20, paddingBottom: 10 }}>Details</Text>
                        <ScrollView>
                            <Text style={{ paddingLeft: 20, }}>{this.props.eventData.Details}</Text>
                        </ScrollView>
                    </View>
                </View>
                <DeleteModal 
                    visible = {this.state.showDeleteModal}
                    onDeletePress = {this.onDeletePress.bind(this)}
                    onCancelPress = {() => this.setState({ showDeleteModal: false })}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerStyle: {
        flex: 0.3, paddingBottom: 20, borderBottomWidth: 1, marginBottom: 20
    },
    DateStyle: {
        fontSize: 15, fontWeight: 'bold', color: '#5F9EA0'
    },
    eventNameStyle: {
        color: 'black', fontWeight: 'bold', fontSize: 25
    },
});


export default EventDetails;

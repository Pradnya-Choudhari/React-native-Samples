import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Header from '../common/Header';
import DateTimePicker from '@react-native-community/datetimepicker';
import { postData, putData } from '../common/actions/eventsAction';
import { strings } from '../common/Localization';
import { connect } from 'react-redux';

class AddEditEvent extends Component {
    state = {
        eventName: '',
        hostName: '',
        details: '',
        date: new Date(),
        dateValue: '',
        showCal: false,
        location: '',
        error: ''
    } 

    componentDidMount() {
        if(this.props.isEdit) {
            this.setState({ 
                eventName: this.props.event.EventName,
                hostName: this.props.event.HostedBy,
                details: this.props.event.Details,
                location: this.props.event.Location,
                dateValue: this.props.event.Date
            });
        }
    }

    onEventNameChange(value){
        this.setState({ eventName: value });
    }

    onHostNameChange(value) {
        this.setState({ hostName: value });
    }

    ondetailsChange(value) {
        this.setState({ details: value });  
    }

    onLocationChange(value) {
        this.setState({ location: value });  
    }

    setDate = (event, date) => {
        date = date || this.state.date;    
        this.setState({ showCal: false });
        this.setState({ date });
        this.handleDatePicked(date);
    }

    handleDatePicked = (pickeddate) => {
        day   = pickeddate.getDate();
        month = pickeddate.getMonth();
        year  = pickeddate.getFullYear();
        exdate= day + '-' + month + '-' + year
        this.setState({dateValue : exdate}) 
      };

    onDateChange() {        
        this.setState({ showCal: true });
    }

    validate() {
        if( this.state.eventName && this.state.dateValue &&  this.state.location && this.state.hostName && this.state.details ) {
            return true;
        } else {
            this.setState({ error: strings.fillError });
            return false;
        }
    }

    onSavePress() {
        if (this.validate()) {
            if (this.props.isEdit) {
                const dataEvent = {
                    id: this.props.event.id,
                    EventName: this.state.eventName,
                    Date: this.state.dateValue,
                    Location: this.state.location,
                    HostedBy: this.state.hostName,
                    Details: this.state.details
                }
                putData(dataEvent);
            } else {
                const dataEvent = {
                    id: "",
                    EventName: this.state.eventName,
                    Date: this.state.dateValue,
                    Location: this.state.location,
                    HostedBy: this.state.hostName,
                    Details: this.state.details
                }
                postData(dataEvent);
            }
        }
    }


    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header headerName={ this.props.isEdit ? strings.editEvent : strings.addEvent } />
                { this.state.error != '' && <Text style={{ color: 'red', fontSize: 15, alignSelf: 'center', paddingTop: 20 }}>{this.state.error}</Text> }
                <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 70 }}>

                    <View style={styles.inputViewStyle}>
                        <Text style={styles.labelStyle}>{strings.eventName}</Text>
                        <TextInput
                            placeholder={strings.pleaseEventName}
                            value={this.state.eventName}
                            onChangeText={this.onEventNameChange.bind(this)}
                            style={styles.inputStyle}
                        />
                    </View>
                    <View style={styles.inputViewStyle}>
                        <Text style={styles.labelStyle}>{strings.date}</Text>
                        {this.state.showCal && <DateTimePicker value={this.state.date}
                            is24Hour={true}
                            display="default"
                            onChange={this.setDate} />}
                        <TouchableOpacity onPress={this.onDateChange.bind(this)}>
                            <TextInput
                                editable={false}
                                placeholder={strings.pleaseEnterDate}
                                value={this.state.dateValue}
                                style={styles.inputStyle}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.inputViewStyle}>
                        <Text style={styles.labelStyle}>{strings.hostedByLabel}</Text>
                        <TextInput
                            placeholder={strings.pleaseEnterHostName}
                            value={this.state.hostName}
                            onChangeText={this.onHostNameChange.bind(this)}
                            style={styles.inputStyle}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                        <Text style={styles.labelStyle}>{strings.details}</Text>
                        <TextInput
                            multiline
                            placeholder={strings.pleaseEnterDetails}
                            value={this.state.details}
                            onChangeText={this.ondetailsChange.bind(this)}
                            style={styles.inputStyle}
                        />
                    </View>
                    <View style={styles.inputViewStyle}>
                        <Text style={styles.labelStyle}>{strings.location}</Text>
                        <TextInput
                            placeholder={strings.pleaseEnterLocation}
                            value={this.state.location}
                            onChangeText={this.onLocationChange.bind(this)}
                            style={styles.inputStyle}
                        />
                    </View>
                </ScrollView>
                <TouchableOpacity style={styles.buttonStyle} onPress={this.onSavePress.bind(this)}>
                    <Text style={{ color: 'white', fontSize: 20 }}>{strings.save}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10, marginTop: 20,
    },
    inputStyle:{
        color: 'black', width: 200, borderWidth: 1, borderRadius: 10, paddingLeft: 10, borderColor: 'grey'
    },
    inputViewStyle: {
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20
    },
    buttonStyle: { 
        height: 60, alignItems: 'center', justifyContent: 'center', position: 'absolute', elevation: 7,
        bottom: 0, right: 0, left: 0, backgroundColor: '#5F9EA0' 
    },
    labelStyle: {
        fontFamily: 'ptSansBold',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#404040',
    },
});


export default AddEditEvent;

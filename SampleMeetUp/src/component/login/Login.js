import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { strings } from '../common/Localization';


class Login extends Component {
    state = {
        username: '',
        password: '',
        error: '',
        loading: false
    }

    onUserNameChange(value) {
        this.setState({ username: value });
    }

    onPasswordChange(value) {
        this.setState({ password: value });
    }

    onLoginPress() {
        if (this.state.username.toLowerCase() === 'test' && this.state.password.toLowerCase() === 'test') {
            Actions.home();

        } else {
            this.setState({ error: strings.invalidInfo });

        }
    }

    render() {
        return (
            <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 20 }}>
                <Text style={styles.headerText}>{strings.sampleMeetup}</Text>
                <View style={{ justifyContent: 'center' }} >
                    <View style={{ padding: 20 }}>
                        <TextInput
                            placeholder={strings.pleaseUsername}
                            value={this.state.username}
                            onChangeText={this.onUserNameChange.bind(this)}
                            style={[styles.inputStyle, { borderColor: this.state.error ? 'red' : 'grey', marginBottom: 30 }]}
                        />
                        <TextInput
                            secureTextEntry
                            placeholder={strings.pleasePassword}
                            value={this.state.password}
                            onChangeText={this.onPasswordChange.bind(this)}
                            style={[styles.inputStyle, { borderColor: this.state.error ? 'red' : 'grey' }]}
                        />
                        <Text style={styles.errorStyle}>{this.state.error}</Text>
                    </View>
                    <TouchableOpacity style={styles.loginStyle} onPress={this.onLoginPress.bind(this)}>
                        <Text style={styles.loginTextStyle}>{strings.login}</Text>
                    </TouchableOpacity>
                    <Text style={{
                        alignSelf: 'center', marginTop: 20, borderBottomWidth: 1, borderBottomColor: '#5F9EA0',
                        color: '#5F9EA0'
                    }}>{strings.needHelpLogin}</Text>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    headerText: {
        alignSelf: 'center', color: '#5F9EA0', fontWeight: 'bold', paddingVertical: 40, fontSize: 40
    },
    inputStyle: {
        color: 'black', borderWidth: 1, borderRadius: 10, paddingLeft: 10
    },
    loginStyle: {
        alignItems: 'center', backgroundColor: '#5F9EA0', padding: 10, width: 90, alignSelf: 'center', borderRadius: 5
    },
    loginTextStyle: {
        color: 'white', fontWeight: 'bold'
    },
    errorStyle: {
        color: 'red'
    },
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Login;
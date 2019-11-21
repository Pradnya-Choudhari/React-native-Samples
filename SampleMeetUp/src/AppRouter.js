import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import Login from './component/login/Login';
import LoginSuccess from './component/login/LoginSuccess';
import Home from './component/home/Home';
import EventDetails from './component/details/EventDetails';
import AddEditEvent from './component/details/AddEditEvent';

const AppRouter = () => (
    <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="#5F9EA0" barStyle="light-content" />
        <Router>
            <Scene key='root'>
                <Scene key='login' component={Login} hideNavBar />
                <Scene key='home' component={Home} hideNavBar />
                <Scene key='eventDetails' component={EventDetails} hideNavBar />
                <Scene key='addEditEvent' component={AddEditEvent} hideNavBar />
            </Scene>
        </Router>
    </View>
);

export default AppRouter;

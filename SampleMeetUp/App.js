/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import AppRouter from './src/AppRouter';
import { Provider } from 'react-redux';
import store from './src/component/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
          
    );
  }
}

export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Routes from './Routes'
import store from './Store'
import { Provider } from 'react-redux';

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
<Routes/>
</Provider>
      
    );
  }
}


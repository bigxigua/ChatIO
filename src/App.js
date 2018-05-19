/**
 * Created by TaoBaoZhong on 2018.5.17.
 */

import React, { Component } from 'react';

import {
  Provider
} from 'react-redux';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class App extends Component {
  render() {
    return (
      <Provider>

      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

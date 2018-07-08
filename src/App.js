import React, { Component } from 'react';

import {
  Provider
} from 'react-redux';

import { Navigation } from 'react-native-navigation';

import './utils/global'

import registerScreens from './screens/index.js';

import store from './store/configureStore'

import {
  Platform
} from 'react-native'
import * as appActions from './actions/index';

registerScreens(store, Provider);

export default class App extends Component {
  constructor(props) {
    super(props);
    store.subscribe(this.onStoreUpdate.bind(this));
    // 检测用户是否登陆（持久化登陆方案）
    // 若未登陆则展现登陆页面
    // 已经登陆则展现首页

    this.startApp('after-login');
    // store.dispatch(appActions.appInitialized());
  }
  onStoreUpdate() {
    let {root} = store.getState().root;
    if (this.currentRoot !== root) {
      this.currentRoot = root;
      this.startApp(root);
    }
  }
  startApp(root) {
    switch (root) {
      case 'login':
        Navigation.startSingleScreenApp({
          screen: {
            screen: 'ChatIO.LoginScreen',
            title: 'Welcome',
            navigatorStyle: {},
            navigatorButtons: {}
          }
        });
        return;
      case 'after-login':
        Navigation.startTabBasedApp({
          animationType: Platform.OS === 'ios' ? 'slide-down' : 'fade',
          tabs: [
            {
              label: '消息',
              screen: 'ChatIO.MessageListsScreen', // this is a registered name for a screen
              icon: require('./assets/icons/2.png'),
              navigatorStyle: {
                navBarHidden: true,
                // tabBarHidden: true
              }
            },
            {
              label: '联系人',
              screen: 'ChatIO.UserInfoScreen', // this is a registered name for a screen
              icon: require('./assets/icons/home_gaitubao_com_25x22.png'),
              iconInsets: {
                left: -4
              },
              navigatorStyle: {
                navBarHidden: true
              }
            },
            {
              label: '看点',
              screen: 'ChatIO.MessageListsScreen', // this is a registered name for a screen
              icon: require('./assets/icons/321.png'),
              navigatorStyle: {
                navBarHidden: true
              }
            },
            {
              label: '动态',
              screen: 'ChatIO.MessageListsScreen', // this is a registered name for a screen
              icon: require('./assets/icons/2.png'),
              navigatorStyle: {
                navBarHidden: true
              }
            }
          ]
        });
        return;
      default:
        console.log('Not Root Found');
    }
  }
}
import { Navigation } from 'react-native-navigation';

import MessageListsScreen from './MessageListsScreen.js';
import UserInfoScreen from './UserInfoScreen.js';
import ChatScreen from './ChatScreen.js';
import LoginScreen from './LoginScreen.js';

export default function registerScreens(store, Provider) {
	// Navigation.events().registerAppLaunchedListener(() => {
	// 	// Each time the event is received we should call Navigation.setRoot
	// });
	// 登陆页面
  Navigation.registerComponent('ChatIO.LoginScreen', () => LoginScreen, store, Provider);
	// 消息列表
  Navigation.registerComponent('ChatIO.MessageListsScreen', () => MessageListsScreen, store, Provider);
  // 个人中心用户信息界面
  Navigation.registerComponent('ChatIO.UserInfoScreen', () => UserInfoScreen, store, Provider);
  // 聊天界面
  Navigation.registerComponent('ChatIO.ChatScreen', () => ChatScreen, store, Provider);
}
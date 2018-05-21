import { Navigation } from 'react-native-navigation';

import MessageListsScreen from './MessageListsScreen.js';
import UserInfoScreen from './UserInfoScreen.js';

export default function registerScreens(store, Provider) {
  Navigation.registerComponent('ChatIO.MessageListsScreen', () => MessageListsScreen, store, Provider);
  Navigation.registerComponent('ChatIO.UserInfoScreen', () => UserInfoScreen, store, Provider);
}
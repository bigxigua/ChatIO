import { Navigation } from 'react-native-navigation';

import FirstTabScreen from './FirstTabScreen.js';
import SecondTabScreen from './SecondTabScreen.js';
import FirstSideMenu from './FirstSideMenu.js';
import CustomMessageTopBar from '../src/bar/CustomMessageTopBar.js';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('example.FirstTabScreen', () => FirstTabScreen);
  Navigation.registerComponent('example.SecondTabScreen', () => SecondTabScreen);
  Navigation.registerComponent('example.FirstSideMenu', () => FirstSideMenu);
  Navigation.registerComponent('topBar.CustomMessageTopBar', () => CustomMessageTopBar);
}
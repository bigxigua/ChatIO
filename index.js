// import { AppRegistry } from 'react-native';
// import { Navigation } from 'react-native-navigation';
// import App from './src/App';
//
// AppRegistry.registerComponent('ChatIO', () => App);


import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens/index.js';

registerScreens(); // this is where you register all of your app's screens

// start the app
Navigation.startTabBasedApp({
  tabs: [
    {
      label: '消息',
      screen: 'example.FirstTabScreen', // this is a registered name for a screen
      icon: require('./images/key.png'),
      iconInsets: {
        top: 10,
        left: 0,
        bottom: 0,
        right: 0,
      },
      navigatorStyle: {
        navBarNoBorder: true, //去掉导航下面的border
        navBarTextColor: '#777777', //导航顶部字体颜色
        navBarBackgroundColor: '#eee', //导航背景色
        navBarTextFontSize: 16, //导航顶部字体大小
        navBarCustomView: 'topBar.CustomMessageTopBar', //自定义导航组件
        navBarComponentAlignment: 'center',
        navBarCustomViewInitialProps: {
          title: '消息'
        },  //自定义导航组件props
        navBarButtonColor: 'red',
        screenBackgroundColor: '#fff' //当前navigator内容的背景色
      },
      navigatorButtons: {
        navBarBackgroundColor: 'brown'
      },
      // selectedIcon: require('./images/key.png'), // iOS only
      title: '消息'
    }, {
      label: 'Two',
      screen: 'example.SecondTabScreen',
      icon: require('./images/tv.png'),
      iconInsets: {
        top: 6,
        left: 0,
        bottom: 0,
        right: 0,
      },
      // selectedIcon: require('./images/upload.jpg'), // iOS only
      title: 'Screen Two'
    }
  ],
  tabStyle: {
    tabBarButtonColor: '#ffff00',
    tabBarSelectedButtonColor: '#ff9900',
    tabBarBackgroundColor: '#551A8B',
    // initialTabIndex: 10, // optional,
  },
  appStyle: {
    orientation: 'portrait', //IOS 横竖屏
    bottomTabBadgeTextColor: 'red',
    bottomTabBadgeBackgroundColor: 'green',
    // backButtonImage: require('./pathToImage.png'),
    hideBackButtonTitle: true
  },
  drawer: { // optional, add this if you want a side menu drawer in your app
    left: { // optional, define if you want a drawer from the left
      screen: 'example.FirstSideMenu', // unique ID registered with Navigation.registerScreen
      passProps: {}, // simple serializable object that will pass as props to all top screens (optional),
      fixedWidth: 1000, // a fixed width you want your left drawer to have (optional)
    },
    style: { // ( iOS only )
      drawerShadow: true, // optional, add this if you want a side menu drawer shadow
      contentOverlayColor: 'rgba(0,0,0,0.25)', // optional, add this if you want a overlay color when drawer is open
      leftDrawerWidth: 50, // optional, add this if you want a define left drawer width (50=percent)
      rightDrawerWidth: 50, // optional, add this if you want a define right drawer width (50=percent)
      shouldStretchDrawer: true // optional, iOS only with 'MMDrawer' type, whether or not the panning gesture will “hard-stop” at the maximum width for a given drawer side, default : true
    },
    type: 'MMDrawer', // optional, iOS only, types: 'TheSideBar', 'MMDrawer' default: 'MMDrawer'
    animationType: 'parallax', //optional, iOS only, for MMDrawer: 'door', 'parallax', 'slide', 'slide-and-scale'
    // for TheSideBar: 'airbnb', 'facebook', 'luvocracy','wunder-list'
    disableOpenGesture: false // optional, can the drawer be opened with a swipe instead of button
  },
  tabsStyle: { // optional, **iOS Only** add this if you want to style the tab bar beyond the defaults
    // tabBarButtonColor: 'gray',
    // tabFontSize: 10,
    // fontSize: 10,
    // selectedTabFontSize: 10,
    tabBarHidden: true, // make the tab bar hidden
    tabBarSelectedButtonColor: 'blue', // change the color of the selected tab icon and text (only selected)
    tabBarBackgroundColor: '#333', // change the background color of the tab bar
    tabBarTranslucent: false, // change the translucent of the tab bar to false
    tabBarTextFontFamily: 'Avenir-Medium', //change the tab font family
    tabBarLabelColor: 'red', // iOS only. change the color of tab text
    tabBarSelectedLabelColor: '#fff', // iOS only. change the color of the selected tab text
    forceTitlesDisplay: true, // Android only. If true - Show all bottom tab labels. If false - only the selected tab's label is visible.
    tabBarHideShadow: true // Remove default tab bar top shadow (hairline)

  },
  passProps: {}, // simple serializable object that will pass as props to all top screens (optional)
  animationType: 'slide-down' // optional, add transition animation to root change: 'none', 'slide-down', 'fade'
});
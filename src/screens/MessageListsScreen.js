import React from 'react';
import {connect} from 'react-redux';
import layout from '../utils/layout';
import Icon from 'react-native-vector-icons/FontAwesome';
import ChatItem from '../components/ChatItem';
import { TOKEN_TEST } from '../config/config'

import {
  getRoomLists
} from '../actions/index'

function mapStateToProps(state) {
  return {
    roomLists: state.roomListReducer.roomLists
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getRoomLists: (token) => {dispatch(getRoomLists(token))}
  }
}

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Animated,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';

class MessageListsScreen extends React.Component {
  constructor(props){
    super(props);
    this.toggleShowMenu = this.toggleShowMenu.bind(this);
    this.pushNavigator = this.pushNavigator.bind(this);
    this.gotoRoom = this.gotoRoom.bind(this);
    this.state = {
      searchContent: '搜索或开始新的对话',
      showMenu: true,
      menuScale: new Animated.Value(0),
      coverOpacity: new Animated.Value(0),
    };
  }
  componentWillMount () {
    this.getRoomLists();
  }
  getRoomLists () {
    this.props.getRoomLists(TOKEN_TEST)
  }
  _startMenuAnimated_(showMenu) {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(this.state.menuScale, {
          toValue: showMenu ? 0 : 1,
          duration: 200,
        }),
        Animated.timing(this.state.coverOpacity, {
          toValue: showMenu ? 0 : 1,
          duration: 400,
        })
      ])
    ]).start();
  }
  toggleShowMenu(){
    const showMenu = this.state.showMenu;
    this.setState({
      showMenu: !showMenu
    }, () => {
      this._startMenuAnimated_(showMenu);
    });
  }
  gotoRoom() {
    this.props.navigator.push({
      screen: 'ChatIO.ChatScreen',
      duration: '200',
      animationType: 'slide-horizontal',
      navigatorStyle: {
        tabBarHidden: true,
        navBarHidden: true
      },
      appStyle: {
        // orientation: 'landscape'
      }
    });
  }
  pushNavigator(){
    this.props.navigator.push({
      screen: 'ChatIO.UserInfoScreen',
      duration: '200',
      animationType: 'slide-horizontal',
      navigatorStyle: {
        tabBarHidden: true,
        navBarHidden: true
      },
      appStyle: {
        // orientation: 'landscape'
      }
    });
  }
  render(){
    const { TBZ }  = global;
    const { showMenu } = this.state;
    const CoverEle = showMenu ? (
      <TouchableWithoutFeedback onPress={this.toggleShowMenu} style={{ zIndex: 100 }}>
        <Animated.View style={[styles.bgCover, {opacity: this.state.coverOpacity}]} />
      </TouchableWithoutFeedback>) : null;
    return (
      <View style={styles.container}>
        {/*头部*/}
        <View style={styles.header}>
            <TouchableOpacity style={[styles.AvatarBox]} onPress={this.pushNavigator}>
                <Image style={styles.avatar} source={TBZ.DEFAULT_AVATAR} />
                <View style={styles.loginSate} />
            </TouchableOpacity>
            <Text style={styles.title}>消息</Text>
            <Icon name='plus' style={styles.iconPlus} onPress={this.toggleShowMenu} />
        </View>
        {/*菜单*/}
        {CoverEle}
        <Animated.View style={[styles.menu, { transform: [{
            scale: this.state.menuScale
          }] }]}>
          <View style={styles.arrow} />
          <View style={styles.menuItem}>
            <Icon name='plus-square' style={styles.iconMenu} />
            <Text style={styles.menuText}>创建群组</Text>
          </View>
          <View style={styles.menuItem}>
            <Icon name='user-plus' style={styles.iconMenu} />
            <Text style={styles.menuText}>加好友/群</Text>
          </View>
          <View style={styles.menuItem}>
            <Icon name='camera-retro' style={styles.iconMenu} />
            <Text style={styles.menuText}>拍摄</Text>
          </View>
          <View style={styles.menuItem}>
            <Icon name='credit-card' style={styles.iconMenu} />
            <Text style={styles.menuText}>打赏</Text>
          </View>
          <View style={styles.menuItem}>
            <Icon name='map-signs' style={styles.iconMenu} />
            <Text style={styles.menuText}>切换账号</Text>
          </View>
          <View style={styles.menuItem}>
            <Icon name='users' style={styles.iconMenu} />
            <Text style={styles.menuText}>切换账号</Text>
          </View>
        </Animated.View>
        {/*搜索栏*/}
        <View style={[styles.searchBox]}>
            <View style={styles.searchContainer}>
              <Icon name='search' style={styles.iconSearch} />
              <TextInput style={styles.input}
                         maxLength = {20}
                         underlineColorAndroid='transparent'
                         value={this.state.searchContent} />
            </View>
        </View>
        {/*消息列表*/}
        <ChatItem />
      </View>
    )
  }
}

const screenWidth = layout.screenWidth;
const screenHeight = layout.screenHeight;

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
  },
  header: {
    width: screenWidth,
    height: 65,
    backgroundColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 15
  },
  AvatarBox: {
    position: 'relative',
    left: 10,
    zIndex: 100
  },
  loginSate: {
    width: 9,
    height: 9,
    borderRadius: 4.5,
    backgroundColor: '#35c328',
    position: 'absolute',
    right: 1,
    bottom: 1
  },
  avatar: {
    width: 40,
    height:40,
    resizeMode: 'cover',
    borderRadius: 20,
  },
  title: {
    width: screenWidth,
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'absolute',
    left: 0,
    top: 34,
  },
  iconPlus: {
    fontSize: 24,
    position: 'absolute',
    right: 10,
    top: 30,
    color: 'rgba(0, 0, 0, 0.5)'
  },
  bgCover: {
    width: screenWidth,
    height: screenHeight,
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 100,
    backgroundColor: 'rgba(0,0,0,0.2)'
  },
  menu: {
    backgroundColor: '#fff',
    position: 'absolute',
    right: 8,
    top: 74,
    zIndex: 101,
    borderRadius: 4
  },
  menuItem: {
    width: 140,
    height: 36,
    borderBottomColor: '#f6f6f6',
    borderBottomWidth:1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  iconMenu: {
    color: '#5f6379',
    fontSize: 20,
    marginLeft: 10
  },
  menuText: {
    color: '#5f6379',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 10
  },
  arrow: {
    width: 14,
    height: 14,
    backgroundColor: '#fff',
    position: 'absolute',
    right: 10,
    top: -4,
    transform: [{rotate:'45deg'}]
  },
  searchBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: screenWidth,
    height: 45,
    backgroundColor: '#fbfbfb'
  },
  searchContainer: {
    height: 32,
    borderWidth: 1,
    borderColor: '#f6f6f6',
    width: screenWidth*0.93,
    borderRadius: 2,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  iconSearch: {
    color: '#a9a6a6',
    width: 30,
    height: 32,
    textAlign: 'center',
    lineHeight: 32,
    marginLeft:8
  },
  input: {
    width: screenWidth*0.93 - 80,
    height: 32,
    color: 'rgba(0, 0, 0, 0.5)',
    fontWeight: 'bold',
    fontSize: 12,
    marginTop:2,
    paddingLeft: 10,
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(MessageListsScreen);
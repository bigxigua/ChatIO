import React from 'react';
import layout from '../utils/layout';
import SwipeView from 'react-native-swipeout'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

class ChatItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hiddenButtons: [
        {
          backgroundColor: 'red',
          color: 'white',
          text: '删除',
          onPress: () => {}
        },
        {
          backgroundColor: '#C8C7CD',
          color: 'white',
          text: '标为未读',
          onPress: () => {}
        }
      ]
    };
  }
  gotoRoom(){
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
  formatTime(time){
    if(!time) {
      time = new Date(this.props.data.createTime);
    }
    const hour = new Date(time).getHours();
    const chatTime = hour <= 6 ? '凌晨'
      : hour <= 9 ? '清晨' : hour <= 12 ? '上午' : hour <= 18 ? '下午'
        : hour <= '24' ? '晚上' : '外太空' ;
    return `${chatTime}   ${hour}:${new Date(time).getMinutes()}`
  }
  render() {
    return (
      <View style={styles.chatLists}>
        <View style={styles.chatItem}>
          <SwipeView right={this.state.hiddenButtons}>
            <TouchableOpacity style={styles.itemContainer} onPress={this.gotoRoom}>
              <Image style={styles.groupAvatar} source={TBZ.DEFAULT_GROUP_AVATAR} />
              <Text style={styles.groupName}>装逼讨论组</Text>
              <Text style={styles.groupLatestMsg}>TBZ: #(哈哈哈)</Text>
              <Text style={styles.timeStamp}>下午 14:22</Text>
            </TouchableOpacity>
          </SwipeView>
        </View>
      </View>
    )
  }
}

const screenWidth = layout.screenWidth;
const screenHeight = layout.screenHeight;
const styles = StyleSheet.create({
  chatLists: {
    width: screenWidth,
    height: 100
  },
  chatItem: {
    backgroundColor: '#E9EBEB',
    borderBottomColor: '#e6e6e6',
    borderBottomWidth: 1
  },
  itemContainer: {
    width: screenWidth,
    height: 66,
    flexDirection: 'row',
    alignItems: 'center',
  },
  groupAvatar: {
    width: 48,
    height: 48,
    marginLeft: 14,
    borderRadius:24
  },
  groupName: {
    color: 'rgba(0, 0, 0, 0.870588)',
    fontSize: 14,
    fontWeight: 'bold',
    position: 'absolute',
    left: 84,
    top: 15
  },
  groupLatestMsg: {
    color: '#888',
    fontSize: 12,
    fontWeight: 'bold',
    position: 'absolute',
    left: 84,
    top: 38,
  },
  timeStamp: {
    position: 'absolute',
    right: 10,
    top: 15,
    fontWeight: 'bold',
    color: '#999',
    fontSize: 10
  }
});
export default ChatItem;
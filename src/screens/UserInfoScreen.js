import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import layout from '../utils/layout';
import Icon from 'react-native-vector-icons/FontAwesome';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';


class UserInfoScreen extends React.Component {
  constructor(props){
    super(props);
    this.goBack = this.goBack.bind(this);
  }
  goBack(){
    console.log(this.props.navigator)
    this.props.navigator.pop({
      animated: true,
      // animationType: 'slide-horizontal'
    });
  }
  render(){
    return (
      <ImageBackground style={styles.container} source={require('../assets/images/164710527.jpeg')}>
          <View style={styles.top}>
            <TouchableOpacity onPress={this.goBack}>
              <Icon name='angle-double-left' style={styles.back} />
            </TouchableOpacity>
          </View>
          <View style={styles.header}>
              <Image style={styles.avatar} source={require('../assets/images/avatar.jpg')} />
              <Text style={styles.nickname}>Once</Text>
              <Text style={styles.number}>群组 7 | 朋友 0</Text>
              <TouchableOpacity style={styles.editor}>
                  <Icon name='edit' style={styles.editIcon} />
                  <Text style={styles.editWord}>编辑</Text>
              </TouchableOpacity>
          </View>
        <ScrollableTabView
            style={styles.scrollTab}
            initialPage={0}
            page={0}
            tabBarBackgroundColor="#fff"
            tabBarActiveTextColor="#333"
            tabBarInactiveTextColor="gray"
            tabBarTextStyle={styles.tabTextStyle}
            tabBarUnderlineStyle={styles.underLine}
            renderTabBar={() => <ScrollableTabBar style={styles.scrollTabBar} />}>
            <ScrollView tabLabel="群组" style={styles.tabView}>
              <View>
                <Text>1</Text>
              </View>
            </ScrollView>
            <Text tabLabel='动态'>2</Text>
          <Text tabLabel='关于我'>3</Text>
        </ScrollableTabView>
      </ImageBackground>
    )
  }
}

const screenWidth = layout.screenWidth;
const screenHeight = layout.screenHeight;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: screenWidth,
    height: screenHeight,
  },
  top: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
  },
  back: {
    fontSize: 40,
    marginTop:4,
    marginLeft: 10,
    color: '#f3f3f3'
  },
  header: {
    height: 200,
    alignItems: 'center'
  },
  avatar: {
    height: 80,
    width: 80,
    borderRadius: 40
  },
  nickname: {
    color: '#f3f3f3',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 6
  },
  number: {
    color: '#f3f3f3',
    fontSize: 14,
    marginTop: 4
  },
  editor: {
    width: 80,
    height: 26,
    borderRadius: 20,
    borderWidth:1,
    flexDirection: 'row',
    borderColor: '#fff',
    marginTop: 14,
    backgroundColor: 'rgba(0,0,0,0.3)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  editWord: {
    color: '#f3f3f3',
    fontSize: 13
  },
  editIcon: {
    color: '#f3f3f3',
    fontSize: 14,
    position:'relative',
    top: 1,
    marginRight:4
  },
  scrollTab: {
    backgroundColor: '#fff'
  },
  scrollTabBar: {
    height: 44,
    borderBottomWidth:1
  },
  underLine: {
    borderRadius: 2,
    height: 3,
    backgroundColor: '#333'
  },
  tabTextStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: -8
  }
});

export default UserInfoScreen
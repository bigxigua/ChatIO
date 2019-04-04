import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
  FlatList
} from 'react-native';
import layout from '../utils/layout';
import Icon from 'react-native-vector-icons/FontAwesome';


class UserInfoScreen extends React.Component {
  constructor(props){
    super(props);
    this.goBack = this.goBack.bind(this);
    this.createFlatRenderItem = this.createFlatRenderItem.bind(this);
  }
  goBack(){
    this.props.navigator.pop({
      animated: true,
      animationType: 'slide-horizontal'
    });
  }
  createFlatRenderItem(item){
    return (
      <Text>{item.key}</Text>
    )
  }
  render(){
    const messageLists = [{key: 'a'}, {key: 'b'}];
    return (
      <View style={styles.container}>
          <View style={styles.header}>
              <TouchableOpacity onPress={this.goBack} style={{zIndex:100}}>
                <Icon name='angle-double-left' style={styles.backIcon} />
              </TouchableOpacity>
              <Text style={styles.title}>陶宝中</Text>
              <Icon name='user' style={styles.userIcon} />
              <Icon name='phone' style={[styles.userIcon,styles.phoneIcon]} />
          </View>
          <ImageBackground style={styles.chatBox} source={require('../assets/images/bg.jpeg')}>
            <FlatList
              data={messageLists}
              renderItem={({item}) => this.createFlatRenderItem(item)}
              style={styles.lists} />
          </ImageBackground>
          <View style={styles.sendBox}>
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
              <TextInput style={styles.sendInput} />
            </KeyboardAvoidingView>
            <View style={styles.sendIcons}>
              <Icon name='microphone' style={[styles.sendIcon]} />
              <Icon name='image' style={[styles.sendIcon]} />
              <Icon name='camera-retro' style={[styles.sendIcon]} />
              <Icon name='smile-o' style={[styles.sendIcon]} />
              <Icon name='plus-square' style={[styles.sendIcon]} />
              <Icon name='envelope' style={[styles.sendIcon]} />
              <Icon name='music' style={[styles.sendIcon]} />
              <Icon name='rmb' style={[styles.sendIcon]} />
            </View>
          </View>
      </View>
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
  header: {
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3d2b1'
  },
  backIcon: {
    fontSize: 36,
    marginTop:9,
    marginLeft: 10,
    color: '#4b4b4b'
  },
  title: {
    width: screenWidth,
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'absolute',
    left: 0,
    top: 31
  },
  userIcon: {
    position: 'absolute',
    right: 10,
    top: 25,
    fontSize: 26,
    color: '#4b4b4b'
  },
  phoneIcon: {
    right: 44,
    top: 26
  },
  chatBox: {
    width: screenWidth,
    height:screenHeight - 64- 75,
  },
  lists: {
    flex: 1
  },
  sendBox: {
    height: 75,
    backgroundColor:'#f3d2b1',
    alignItems:'center'
  },
  sendInput: {
    width: screenWidth*0.96,
    height: 30,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginTop: 5
  },
  sendIcons: {
    width: screenWidth*0.96,
    height: 40,
    backgroundColor: 'red'
  },
  sendIcon: {
    fontSize: 20,
    color: '#ff9400'
  }
});

export default UserInfoScreen
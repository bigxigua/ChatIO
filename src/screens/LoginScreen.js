import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';
import layout from '../utils/layout';
import Icon from 'react-native-vector-icons/FontAwesome';


class LoginScreen extends React.Component {
  constructor(props){
    super(props);
  }
  _onPressButton() {
    console.log('-----');
  }
  render(){
    return (
      <View style={styles.container}>
          <Image style={styles.logo} source={require('../assets/images/logo.jpeg')} />
          <KeyboardAvoidingView style={styles.keyboard} behavior="padding" enabled>
              <TextInput style={styles.input} placeholder="用户名/邮箱/手机号" />
              <TextInput style={styles.input} placeholder="请输入密码" password={true} />
          </KeyboardAvoidingView>
          <TouchableOpacity onPress={this._onPressButton}>
              <View style={styles.confirmBtn}>
                  <Text style={styles.confirmBtnText}>登录</Text>
              </View>
          </TouchableOpacity>
          <View style={styles.subOperation}>
              <Text style={styles.subOperationText}>新用户注册</Text>
              <Text style={styles.subOperationText}>短信验证码登录</Text>
          </View>
      </View>
    )
  }
}

const screenWidth = layout.screenWidth;
const screenHeight = layout.screenHeight;
const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    height: screenHeight,
    backgroundColor: '#fefffe',
    alignItems: 'center',
    padding: 32,
    paddingTop: 0,
    paddingBottom: 0
  },
  logo: {
    width: 200,
    height: 200
  },
  keyboard: {
    width: '100%',
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#fefffe',
    marginTop: 10,
    borderBottomColor: '#ebeceb',
    borderBottomWidth: 1,
    color: '#333'
  },
  confirmBtn: {
    width: screenWidth - 64,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f9b4b1',
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  confirmBtnText: {
    color: '#fffbfb',
    fontSize: 14
  },
  subOperation: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 20,
  },
  subOperationText: {
    color: '#4d4e4c',
    fontSize: 14
  },
});

export default LoginScreen
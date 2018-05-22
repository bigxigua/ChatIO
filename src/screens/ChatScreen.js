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
      <View style={styles.container}>
          <View style={styles.header}>
              <TouchableOpacity onPress={this.goBack}>
                <Icon name='angle-double-left' style={styles.backIcon} />
              </TouchableOpacity>
              <Text style={styles.title}>陶宝中</Text>
              <Icon name='user' style={styles.userIcon} />
              <Icon name='phone' style={[styles.userIcon,styles.phoneIcon]} />
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
    backgroundColor: '#eee'

  },
  backIcon: {
    fontSize: 40,
    marginTop:8,
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
  }
});

export default UserInfoScreen
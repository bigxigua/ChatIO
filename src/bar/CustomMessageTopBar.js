import React from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

//Header
//icon

import Avatar from '../components/Avatar'

class CustomMessageTopBar extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <View style={styles.container}>
        <Avatar />
        <Text style={{flex: 2}}>{this.props.title}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    flex: 1,
    backgroundColor: 'red',
  }
});

export default CustomMessageTopBar;
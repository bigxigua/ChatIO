import React from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class FirstTabScreen extends React.Component {
  constructor(props){
    super(props);
    this.pushNavigator = this.pushNavigator.bind(this);
    this.state = {
      log: '222'
    }
  }
  pushNavigator(){
    console.log('-----')
    this.props.navigator.push({
      screen: 'example.SecondTabScreen',
      title: 'fuck'
    });
    this.setState(previousState => {
      return { log: JSON.stringify(this.props.navigator) };
    });
  }
  render(){
    const { log } = this.state;
    return (
      <View>
        <Text>
          {log}
        </Text>
        <Text onPress={this.pushNavigator}>胡3242432金文</Text>
      </View>
    )
  }
}
export default FirstTabScreen;
import React from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class Avatar extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <View style={styles.container}>
        <Text style={{textAlign: 'center'}}>这是Avatar component</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: 200,
    // height: 200,
    // backgroundColor: 'red',
  }
});

export default Avatar;
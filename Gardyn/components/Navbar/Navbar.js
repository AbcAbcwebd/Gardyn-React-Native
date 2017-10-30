import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

export default class Navbar extends Component {
  render() {
    return (
      <View>
        <Image
          style={{width: 50, height: 50}}
          source={require("../../images/leaf.png")}
        />
        <Text>Hello world</Text>
      </View>
    );
  }
}
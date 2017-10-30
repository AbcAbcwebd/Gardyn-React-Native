import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export default class Navbar extends Component {
  render() {
    return (
      <View>
        <Image
          style={styles.logo}
          source={require("../../images/leaf.png")}
        />
        <Text style={styles.title}>Hello world</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    width: 50, 
    height: 50,
  },
  title: {
    fontWeight: 'bold',
  },
});
import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export default class Navbar extends Component {
  render() {
    return (
      <View
        style={styles.parentView}
      >
        <Image
          style={styles.logo}
          source={require("../../images/leaf.png")}
        />
        <Text style={styles.title}>Gardyn</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    height: 50,
    width: 50,
    justifyContent: "flex-start",
    padding: 20,
  },
  title: {
    fontWeight: 'bold',
    justifyContent: 'space-between',
  },
  parentView: {
    height: 50,
    padding: 10,
  },
});
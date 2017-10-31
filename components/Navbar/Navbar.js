import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, Container, Left, Button, Icon, Title, Header, Body, Right } from 'react-native';

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
  },
  title: {
    fontWeight: 'bold',
  },
  parentView: {
    height: 80,
    padding: 10,
    backgroundColor: '#c3ffba',
    justifyContent: "center",
  },
});
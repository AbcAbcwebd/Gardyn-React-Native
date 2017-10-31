import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, Button } from 'react-native';
import AllPlants from "../AllPlants";

export default class Home extends Component {
  state = {

  }

  render() {
    return (
      <View>
        <AllPlants 
          changeDisplay={this.props.changeDisplay}
        /> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {

  },
});
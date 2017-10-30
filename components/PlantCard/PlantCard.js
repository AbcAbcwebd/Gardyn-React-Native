import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export default class PlantCard extends Component {
  render() {
    return (
      <View
        style={styles.parentView}
      >
        <Image
          style={styles.logo}
          source={{uri: 'https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/images/tomatoplant.jpg?itok=KJNBeA6X'}}
        />
        <Text style={styles.title}>Tomato</Text>
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
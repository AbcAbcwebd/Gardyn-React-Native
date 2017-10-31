import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';

  const PlantCard = (props) => {
    return (
        <TouchableOpacity
          style={styles.parentView}
          onPress={() => props.changeDisplay(props.item)}
        >
          <View>
            <Image
              style={styles.logo}
              source={{uri: props.item.imageURL }}
            />
            <Text style={styles.title}>{props.item.title}</Text>
          </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  logo: {
    height: 50,
    width: 50,
    justifyContent: 'space-between',
    padding: 30,
  },
  title: {
    fontWeight: 'bold',
    justifyContent: 'space-between',
  },
  parentView: {
    height: 50,
    padding: 40,
  },
  displayElement: {
    height: 60,
    width: 60,
  }
});

export default PlantCard;
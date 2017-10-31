import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import axios from "axios";
import PlantCard from "./components/PlantCard";

export default class AllPlants extends Component {
  // This stores what plant data should be displayed
  // Includes dummy data in case the component loads before the data is retrieved. 
  state = {
    plantData: [{plantName: "Loading...", _id: "000"}]
  }

  // Retrieves plant data from the backend and stores it in state. 
  retrievePlants = () => {
    // To ensure context of 'this' isn't lost inside the axios function. 
    const parentObj = this;
    axios.get('/api/plants')
        .then(function (response) {
          parentObj.setState({
            plantData: response.data
          })
        })
        .catch(function (error) {
          console.log(error);
        });
  }

  // Before the component can load the retrieveCrops function is executed in order to retrieve data from the backend. 
  componentWillMount() {
      this.retrievePlants();
  }

  render() {
    return (
      <View>
        {
            this.state.plantData.map(item => (
              <PlantCard
                item = {item}
              />
            ))
          }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {

  },
});
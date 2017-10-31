import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, Button } from 'react-native';
import PlantCard from "../PlantCard";

export default class AllPlants extends Component {
  // This stores what plant data should be displayed
  // Includes dummy data in case the component loads before the data is retrieved. 
  state = {
    plantData: [{plantName: "Loading...", _id: "000"}, {random: "OBJ"}],
    renderCall: false
  }

  // Retrieves plant data from the backend and stores it in state. 
  retrievePlants = () => {
    // To ensure context of 'this' isn't lost inside the API function. 
    const parentObj = this;
    fetch('https://gardyn.herokuapp.com/api/plants')
        .then(function (response) {
          console.log("About to log response");
          console.log(response._bodyText);
          const returnedObj = JSON.parse(response._bodyText);
          parentObj.setState({
            plantData: returnedObj
          })
        })
        .catch(function (error) {
          console.log(error);
        });
  }

  // Before the component can load the retrievePlants function is executed in order to retrieve data from the backend. 
  componentWillMount() {
      this.retrievePlants();
  }
  
  render() {
    return (
      <View>
        {
            this.state.plantData.map(item => (
              <PlantCard
                item={item}
                changeDisplay={this.props.changeDisplay}
                key={item._id + Math.floor((Math.random() * 100) + 1)}
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
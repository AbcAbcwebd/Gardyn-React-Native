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
          console.log("About to log response")
          console.log(response._bodyText)
          parentObj.setState({
            plantData: response._bodyText
          })
        })
        .catch(function (error) {
          console.log(error);
        });
  }
/*
  // Before the component can load the retrieveCrops function is executed in order to retrieve data from the backend. 
  componentWillMount() {
      this.retrievePlants();
  }
*/
  printState = () => {
    console.log("Function hit")
    console.log(this.state.plantData)
  }

  loadContent = () => {
    this.state.renderCall = true;
  }

  hideContent = () => {
    this.state.renderCall = false;
  }

  render() {
    return (
      <View>
        {
          this.state.renderCall ? (
            this.state.plantData.map(item => (
              <PlantCard
                item = {item}
              />
            ))
          ) : (
            <Text>Waiting to load</Text>
          )
        }
          <Button
            onPress={this.printState}
            title="Check State"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
          <Button
            onPress={this.retrievePlants}
            title="API Call"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
          <Button
            onPress={this.loadContent}
            title="Run Map Function"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
          <Button
            onPress={this.hideContent}
            title="Hide Contents"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
      
      </View>
    );
  }
}

/*


          <Button
            onPress={this.printState}
            title="Check State"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
          */

const styles = StyleSheet.create({
  logo: {

  },
});
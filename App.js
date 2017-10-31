import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import PlantDetail from "./components/PlantDetail";

export default class App extends React.Component {
  state = {
    displaying: "Home"
  }

  Body = () => {
    if (this.state.displaying === "Home"){
      return <Home 
        changeDisplay={this.changeDisplay}
      />
    } else if (!this.state.displaying.body) {
      return <PlantDetail
        data={this.state.displaying}
      />
    } else {
      return <Text>Page failed to load</Text>
    }
  }

  changeDisplay = (newValue) => {
    console.log("Function hit")
    this.setState({
      displaying: newValue
    })
  }

  render() {
    return (
      <View>
        <Navbar 
            style={styles.navbar}
          />
        {this.Body()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
  },
  navbar: {
    justifyContent: "flex-start",
    width: 100,
  },
  plantCard: {
    alignItems: 'center',
  }
});
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import PlantDetail from "./components/PlantDetail";
import LinearGradient from 'react-native-linear-gradient';

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
      console.log("Passing props:");
      console.log(this.state.displaying)
      return <PlantDetail
        data={this.state.displaying}
      />
    } else {
      return <Text>Page failed to load</Text>
    }
  }

  parentOBJ = this;

  changeDisplay = (newValue) => {
    console.log("Function hit")
    this.setState({
      displaying: newValue
    })
  }

  render() {
    return (
      <View>
        <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']}>
          <Navbar 
            style={styles.navbar}
            changeDisplay={this.changeDisplay}
          />
         {this.Body()}
        </LinearGradient>
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
  },
});
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
// import { Switch, Route, Router } from 'react-router-dom';
import {
  StackNavigator,
} from 'react-navigation';
/*
export default class App extends React.Component {
  render() {
    return (
      <View>
        <Navbar 
          style={styles.navbar}
        />
        <Router>
        <Switch>
          <Route exact path='/' component={AllPlants} />
          <Route path='/plants/:name' component={AllPlants} />
          <Route path='/guide/:name' component={AllPlants}/>
        </Switch>
        </Router>
      </View>
    );
  }
}
*/

const App = StackNavigator({
  Home: { screen: HomeScreen },
  PlantPage: { screen: ProfileScreen },
});

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
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from "./components/Navbar";
import AllPlants from "./components/AllPlants";
import { Switch, Route, Router } from 'react-router-dom';

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
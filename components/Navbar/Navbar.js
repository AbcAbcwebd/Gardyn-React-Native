import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, Container, Left, Button, Icon, Title, Header, Body, Right } from 'react-native';

export default class Navbar extends Component {
  render() {
    return (


         <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
      </Container>

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
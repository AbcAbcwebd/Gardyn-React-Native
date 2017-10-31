import React, { Component } from 'react';
import PlantCard from "../PlantCard";
import { Text, View, Image, StyleSheet } from 'react-native';

const Plant = (props) => {
  
	  return (
		  <View>
		  	<Text>{props.title}</Text>
		      {
	      	  (!props.data.isCat)
				?
				<View>
				        	<Image
				        	  style={styles.mainPhoto}
				              source={{uri: props.data.imageURL }}
				            />

								<Text>{props.data.Sunlight} Hours of Sunlight</Text>
								<Text>{props.data.skillLevel}</Text>
								<Text>{props.data.Spacing} Inches Spacing</Text>
			
						<Text>Climate</Text>
						<Text>{props.data.Climate}</Text>
						<Text>Special</Text>
						<Text>{props.data.Water}</Text>
						<Text>{props.data.Special}</Text>
				</View>
				:
				<View>
				  <Text>{props.data.description}</Text>
				  <Text>Varieties:</Text>
					{
						props.data.childPlants.map(item => (
							<PlantCard
								item = {item}
							/>
						))
					}
				</View>
		  	  }
		</View>
)};

const styles = StyleSheet.create({
  mainPhoto: {
    height: 50,
    width: 50,
    justifyContent: "flex-start",
    padding: 20,
  },
});

export default Plant;

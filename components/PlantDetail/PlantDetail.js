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
				<View style={styles.holder}>
				<Image
				    style={styles.mainPhoto}
				    source={{uri: props.data.imageURL }}
				/>

								<Text style={styles.textCenter}>{props.data.Sunlight} Hours of Sunlight</Text>
								<Text style={styles.textCenter}>{props.data.skillLevel}</Text>
								<Text style={styles.textCenter}>{props.data.Spacing} Inches Spacing</Text>
			
						<Text style={styles.textCenter}>Climate</Text>
						<Text style={styles.textCenter}>{props.data.Climate}</Text>
						<Text style={styles.textCenter}>Special</Text>
						<Text style={styles.textCenter}>{props.data.Water}</Text>
						<Text style={styles.textCenter}>{props.data.Special}</Text>
				</View>
				:
				<View>
				  <Text style={styles.textCenter}>{props.data.description}</Text>
				  <Text style={styles.textCenter}>Varieties:</Text>
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
    width: 150,
    height: 150,
    padding: 20,
  }, 
  holder: {
  	justifyContent: "center",
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCenter: {
  	textAlign: 'center',
  }
});

export default Plant;

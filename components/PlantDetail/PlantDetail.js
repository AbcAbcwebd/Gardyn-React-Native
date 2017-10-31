import React from "react";
import Navbar from "../Navbar";
import Wrapper from "../Wrapper";
import "./Plant.css";
import PlantCard from "../PlantCard";
import { Text, View, Image, StyleSheet } from 'react-native';
import PlantCard from "../PlantCard";

// Uses a ternatry statement to either render a plant or category detail page.
const Plant = (props) => {
  
	  return (
		  <View>
		  	<Text>{props.title}</Text>
		      {
	      	  (!props.isCat)
				?
				<View>
				        	<Image
				              source={{uri: props.imageURL }}
				            />

						<div className="col-md-6">
								<Image
					              source={{uri: 'http://www.iconarchive.com/download/i89293/icons8/ios7/Weather-Sun.ico' }}
					            />
								<Text>{props.Sunlight} Hours</Text>
								<Text>{props.skillLevel}</Text>

								<img src="http://downloadicons.net/sites/default/files/left-right-double-arrow-symbols-icons-68674.png" id="sunlightDivIcon"></img>
								<Image
					              source={{uri: 'http://downloadicons.net/sites/default/files/left-right-double-arrow-symbols-icons-68674.png' }}
					            />
								<Text>{props.Spacing} Inches</Text>

								<Text>Support: </Text>
										<Image
							              source={{uri: 'http://icons.iconarchive.com/icons/icons8/android/512/Very-Basic-Checkmark-icon.png' }}
							            />
							            <Image
							              source={{uri: 'http://icons.iconarchive.com/icons/icons8/ios7/512/Healthcare-Scales-Of-Balance-Filled-icon.png' }}
							            />
			
						<Text>Climate</Text>
						<Text>{props.Climate}</Text>
						<br />
						<Text>Special</Text>
						<Text>{props.Water}</Text>
						<Text>{props.Special}</Text>
				</View>
				:
				<View>
				  <Text>{props.description}</Text>
				  <Text>Varieties:</Text>
					{
						props.childPlants.map(item => (
							<PlantCard
								item = {item}
							/>
						))
					}
				</View>
		  	  }
		</View>
)};

export default Plant;

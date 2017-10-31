import React, { Component } from 'react';
import PlantCard from "../PlantCard";
import { Text, View, Image, StyleSheet } from 'react-native';

// Uses a ternatry statement to either render a plant or category detail page.
const Plant = (props) => {
  
	  return (
		  <View>
		  	<Text>{props.title}</Text>
		      {
	      	  (!props.data.isCat)
				?
				<View>
				        	<Image
				              source={{uri: props.data.imageURL }}
				            />

								<Image
					              source={{uri: 'http://www.iconarchive.com/download/i89293/icons8/ios7/Weather-Sun.ico' }}
					            />
								<Text>{props.data.Sunlight} Hours</Text>
								<Text>{props.data.skillLevel}</Text>

								<Image
					              source={{uri: 'http://downloadicons.net/sites/default/files/left-right-double-arrow-symbols-icons-68674.png' }}
					            />
								<Text>{props.data.Spacing} Inches</Text>

								<Text>Support: </Text>
										<Image
							              source={{uri: 'http://icons.iconarchive.com/icons/icons8/android/512/Very-Basic-Checkmark-icon.png' }}
							            />
							            <Image
							              source={{uri: 'http://icons.iconarchive.com/icons/icons8/ios7/512/Healthcare-Scales-Of-Balance-Filled-icon.png' }}
							            />
			
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

export default Plant;

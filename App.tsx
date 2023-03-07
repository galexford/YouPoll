import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View, Image } from 'react-native';
import Button from './components/Button';
import ImageViewer from './components/ImageViewer';
import RNPoll, { IChoice } from "react-native-poll";
import PollContainer from './components/PollContainer';
import Title
 from './components/Title';
 import RNAnimated from "react-native-animated-component";
 
const choices: Array<IChoice> = [
  { id: 1, choice: "Nike", votes: 12 },
  { id: 2, choice: "Adidas", votes: 1 },
  { id: 3, choice: "Puma", votes: 3 },
  { id: 4, choice: "Reebok", votes: 5 },
  { id: 5, choice: "Under Armour", votes: 9 },
];

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Title titleText={"YouPoll"}/>
      <RNPoll
        totalVotes={30}
        choices={choices}
        onChoicePress={(selectedChoice: IChoice) =>
          console.log("SelectedChoice: ", selectedChoice)
        }
      />
      {/* <PollContainer prompt={"Who will win Best Picture at the Oscars?"}/>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Choose a photo" />
        <Button label="Use this photo" />
      </View>
      <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0ead6',
    alignItems: 'center',
    paddingTop: 60,
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});

export default App;

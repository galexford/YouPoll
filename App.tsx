import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View, Image } from 'react-native';
import Button from './components/Button';
import ImageViewer from './components/ImageViewer';
import RNPoll, { IChoice } from "react-native-poll";
import PollContainer from './components/PollContainer';
import Title
 from './components/Title';
const PlaceholderImage = require('./assets/images/background-image.png');

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Title titleText={"YouPoll"}/>
      <PollContainer prompt={"Who will win Best Picture at the Oscars?"}/>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Choose a photo" />
        <Button label="Use this photo" />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000f0e',
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

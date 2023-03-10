import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View, Image } from 'react-native';
import Button from './components/Button';
import ImageViewer from './components/ImageViewer';
import RNPoll, { IChoice } from 'react-native-poll';
import PollContainer from './components/PollContainer';
import Title from './components/Title';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreatePollScreen from './screens/CreatePollScreen';

function DetailsScreen() {
    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
            <Text>Details Screen</Text>
        </View>
    );
}

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Create Poll" component={CreatePollScreen} />
                <Stack.Screen name="YouPoll" component={HomeScreen} />
            </Stack.Navigator>
            <SafeAreaView style={styles.container}>
                {/* <PollContainer prompt={"Who will win Best Picture at the Oscars?"}/>
        <View style={styles.footerContainer}>
          <Button theme="primary" label="Choose a photo" />
          <Button label="Use this photo" />
        </View>
        <StatusBar style="auto" /> */}
            </SafeAreaView>
        </NavigationContainer>
    );
};

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

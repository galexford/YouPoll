import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, CreatePollScreen } from '../screens';

import { NavigationContainer } from '@react-navigation/native';
import { screenMap } from './screenMap';

const AppContainer = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name={screenMap.Home}
                    component={HomeScreen}
                />
                <Stack.Screen
                    name={screenMap.CreatePoll}
                    component={CreatePollScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppContainer;

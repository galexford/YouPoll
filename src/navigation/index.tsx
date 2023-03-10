import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, CreatePollScreen } from '../screens';
import { NavigationContainer } from '@react-navigation/native';
import { screenMap } from './screenMap';
import { Button } from 'react-native';

const AppContainer = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={screenMap.Home}>
                <Stack.Screen
                    name={screenMap.Home}
                    component={HomeScreen}
                    options={({ navigation, route }) => ({
                        headerRight: () => (
                            <Button
                                title={screenMap.CreatePoll}
                                onPress={() =>
                                    navigation.navigate(screenMap.CreatePoll)
                                }
                            />
                        ),
                    })}
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

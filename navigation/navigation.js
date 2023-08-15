import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import MovieScreen from '../screens/MovieScreen';
import PersonScreen from '../screens/PersonScreen';

const Stack = createNativeStackNavigator();

export default function Navigation() {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
                <Stack.Screen options={{headerShown: false}} name="Movie" component={MovieScreen} />
                <Stack.Screen options={{headerShown: false}} name="Person" component={PersonScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
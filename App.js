import React from 'react';
import {View} from 'react-native';
import {DashBoard} from './src/screens/dashBoard';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="DashBoard" component={DashBoard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

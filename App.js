import React from 'react';
import {View} from 'react-native';
import {DashBoard} from './src/screens/dashBoard';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Categories} from './src/screens/categories';
import {Setting} from './src/screens/setting';

const Stack = createNativeStackNavigator();

export function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: true}}>
        <Stack.Screen name="dashBoard" component={DashBoard} />
        <Stack.Screen name="categories" component={Categories} />
        <Stack.Screen name="setting" component={Setting} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

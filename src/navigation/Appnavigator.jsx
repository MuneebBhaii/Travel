import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screen/Frontend/Splash';
import Page1 from '../screen/Frontend/Page1';

const Stack = createNativeStackNavigator()
export default function Appnavigator() {
  return (
    <NavigationContainer>r
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}} />
        <Stack.Screen name='Page1' component={Page1} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
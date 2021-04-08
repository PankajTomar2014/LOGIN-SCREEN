import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import StoriesList from '../screens/Stories';
import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="StoriesList" component={StoriesList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screen/home';
import DetailScreen from './src/screen/detail';

const Stack = createStackNavigator();

export default function App() {
  const deepLinking = {
    prefixes: ['https://deepLinkTest.com', 'deepLinkTest://'],
    config: {
      Home: 'HomePath',
      Details: {
        path: 'Details/:itemId',
        params: {
          itemId: null,
        },
      },
    },
  };
  return (
    <NavigationContainer linking={deepLinking}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

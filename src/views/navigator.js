import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import React from 'react';
import { Home } from './home';
import { Game } from './game';
import { Routes } from '../global/values';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={Routes.Home} component={Home} />
        <Stack.Screen name={Routes.Game} component={Game} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export { AppNavigator };

// Lentl - App.js
// Copyright (c) John Gabatin. All rights reserved.
// Issues: proper ProductScreen navigation

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './app/screens/LoginScreen';
import HomeScreen from './app/screens/HomeScreen';
import ProductScreen from './app/screens/ProductScreen';

const Menu = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Menu.Navigator>

        <Menu.Screen options={{headerShown: false}}
                     name="LoginScreen"
                     component={LoginScreen} />

        <Menu.Screen options={{headerShown: false}}
                     name="HomeScreen"
                     component={HomeScreen} />

        <Menu.Screen options={{headerShown: false}}
                     name="ProductScreen"
                     component={ProductScreen} />

      </Menu.Navigator>
    </NavigationContainer>
  )
}

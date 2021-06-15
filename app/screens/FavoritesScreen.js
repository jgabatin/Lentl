// Lentl - FavoritesScreen.js
// Copyright (c) John Gabatin. All rights reserved.

import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  View,
  SafeAreaView,
  Image,
  Text } from 'react-native';

import colors from '../config/colors';
import Favorites from '../config/favorites';

export default function FavoritesScreen() {
  return (
    <View style={styles.bg}>

      <SafeAreaView style={styles.header}>
        {/* Favorites text */}
        <Text style={styles.favoritesText}>Favorites</Text>
      </SafeAreaView>

      {/* Favorites data */}
      <Favorites />

    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  header: {
    width: '100%',
    height: 40,
    top: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  favoritesText: {
    fontSize: 22,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'HelveticaNeue',
  },
});

// Lentl - BrowseScreen.js
// Copyright (c) John Gabatin. All rights reserved.

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  Text,
  TextInput,
  TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import colors from '../config/colors';
import Browse from '../config/browse';

export default function BrowseScreen() {
    return (
      <View style={styles.bg}>

        <SafeAreaView style={styles.header}>
          {/* Browse text */}
          <Text style={styles.browseText}>Browse</Text>
        </SafeAreaView>

        <SafeAreaView style={styles.searchContainer}>
          {/* Search bar element */}
          <TextInput
            style={styles.searchBar}
            placeholder='try Gucci, Louis Vuitton, etc.'
            placeholderTextColor='silver'/>
        </SafeAreaView>

        {/* Search bar data */}
        <Browse />

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
    top: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  browseText: {
    fontSize: 22,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'HelveticaNeue',
  },
  searchContainer: {
    top: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBar: {
    borderWidth: 1,
    margin: 10,
    width: 325,
    height: 30,
    top: 30,
    position: 'relative',
    paddingLeft: 20,
    borderRadius: 20,
    borderColor: colors.secondary,
    fontFamily: 'HelveticaNeue',
  },
});

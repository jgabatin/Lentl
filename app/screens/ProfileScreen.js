// Lentl - ProfileScreen.js
// Copyright (c) John Gabatin. All rights reserved.

import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  Text,
  TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import colors from '../config/colors';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.bg}>
      <ScrollView showsVerticalScrollIndicator={false}>

      {/* Profile image container */}
      <View style={{ alignSelf: 'center' }}>
          <View style={styles.image}>
              <Image source={require('../assets/profile-pic.jpg')} style={styles.profileImage} resizeMode='cover'></Image>
          </View>

          <TouchableOpacity style={styles.editPhoto}>
              <Ionicons name='ios-add' size={24} color='white' style={{ marginTop: 2, marginLeft: 2 }}></Ionicons>
          </TouchableOpacity>
      </View>

      {/* Profile info container */}
      <View style={styles.infoContainer}>
        <Text style={[styles.text, { color: 'black', fontSize: 32 }]}>Joe Smith</Text>
        <TouchableOpacity>
          <Text style={[styles.text, { color: 'gray', fontSize: 18, marginTop: 12 }]}>@j_smith</Text>
        </TouchableOpacity>
      </View>

      {/* Profile stats container */}
      <View style={styles.statsContainer}>
        <TouchableOpacity style={styles.statsBox}>
          <Text style={[styles.text, { fontSize: 24, color: 'black' }]}>2</Text>
          <Text style={[styles.text, styles.subText]}>Rented</Text>
        </TouchableOpacity>

        <View style={[styles.statsBox, { borderColor: colors.secondary, borderLeftWidth: 1, borderRightWidth: 1 }]}>
          <TouchableOpacity style={styles.statsBox}>
            <Text style={[styles.text, { fontSize: 24, color: 'black' }]}>5</Text>
            <Text style={[styles.text, styles.subText]}>Following</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.statsBox}>
            <Text style={[styles.text, { fontSize: 24, color: 'black' }]}>3</Text>
            <Text style={[styles.text, styles.subText]}>Favorites</Text>
        </TouchableOpacity>
      </View>

      {/* Options container */}
     <View style={styles.optionsContainer}>
          <TouchableOpacity style={styles.optionItem}>
            <Ionicons name='ios-cash' color="#c9e265" size={25}/>
            <Text style={styles.optionText}>Become A Lenter</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionItem}>
            <Ionicons name="ios-help-circle" color="#c9e265" size={25}/>
            <Text style={styles.optionText}>How Lentl Works</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionItem}>
            <Ionicons name="ios-map" color="#c9e265" size={25}/>
            <Text style={styles.optionText}>Drop Off Locations</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionItem}>
            <Ionicons name="ios-hammer" color="#c9e265" size={25}/>
            <Text style={styles.optionText}>Support</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionItem}>
            <Ionicons name="ios-settings" color="#c9e265" size={25}/>
            <Text style={styles.optionText}>Settings</Text>
          </TouchableOpacity>
      </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: 190,
    height: 190,
    marginTop: 12,
    borderRadius: 100,
    overflow: 'hidden',
  },
  profileImage: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  text: {
    fontFamily: 'HelveticaNeue',
  },
  subText: {
    fontSize: 12,
    textTransform: 'uppercase',
    fontWeight: '500',
    color: 'silver',
  },
  editPhoto: {
    width: 30,
    height: 30,
    position: 'absolute',
    bottom: 0,
    right: 30,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.secondary,
  },
  infoContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 32,
  },
  statsBox: {
    flex: 1,
    alignItems: 'center',
  },
  optionsContainer: {
    marginTop: 32,
  },
  optionItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 45,
  },
  optionText: {
    marginLeft: 20,
    fontSize: 18,
    lineHeight: 26,
    color: 'gray',
    fontFamily: 'HelveticaNeue',
  },
});

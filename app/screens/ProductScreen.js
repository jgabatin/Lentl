// Lentl - ProductScreen.js
// Copyright (c) John Gabatin. All rights reserved.
// Issue: bad navigation

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

export default function ProductScreen({navigation}) {
  return (
    <SafeAreaView style={styles.bg}>
      <ScrollView showsVerticalScrollIndicator={false}>

      <TouchableOpacity
        style={styles.contentArrow}
        onPress={() => navigation.navigate('HomeScreen')}>
        <Ionicons name='ios-arrow-back' size={35} color='black' style={{ marginTop: 2, marginLeft: 2 }}></Ionicons>
      </TouchableOpacity>

      {/* Product image */}
      <View style={styles.imageContainer}>
          <View style={styles.image}>
              <Image
                source={{uri: 'https://cdn-images.farfetch-contents.com/12/93/76/59/12937659_13417876_600.jpg'}}
                style={styles.product}>
              </Image>
          </View>

          <TouchableOpacity style={styles.faveButton}>
              <Ionicons name='ios-heart' size={22} color={colors.secondary} style={{ marginTop: 4, marginLeft: 1, alignSelf: 'center' }}></Ionicons>
          </TouchableOpacity>
          <Text style={styles.faveCount}>5</Text>
      </View>

      {/* Product name */}
      <View style={styles.productContainer}>
          <Text style={styles.brandText}>Gucci</Text>
          <Text>Web belt with Double G buckle</Text>
          <Text style={{ color: 'gray' }}>$450 MSRP</Text>
      </View>

      <TouchableOpacity style={styles.contactPad}>
        <Text style={styles.contactText}>Contact Lenter</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.rentPad}>
        <Text style={styles.rentText}>Rent for $45</Text>
      </TouchableOpacity>

      {/* Product description */}
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsText}>Details</Text>
        <Text style={styles.description}>
          Min Length: 32 inches {"\n"}
          Max Length: 35 inches {"\n"}
          Buckle: 3.03"W x 2.36"H {"\n"}
          {"\n"}
          Made In Italy.
        </Text>
      </View>

      <View style={styles.conditionContainer}>
        <Text style={styles.conditionText}>Condition</Text>
        <Text style={styles.condition}> Like New </Text>
      </View>

      <TouchableOpacity>
        <Text style={styles.lentText}>Have a similar belt? Become a Lenter!</Text>
      </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentArrow: {
    left: 30,
    top: 20,
    bottom: 5,
  },
  imageContainer: {
    alignSelf: 'center',
  },
  image: {
    width: 350,
    height: 350,
    marginTop: 12,
    borderRadius: 100,
    overflow: 'hidden',
  },
  product: {
    flex: 1,
  },
  faveButton: {
    width: 30,
    height: 30,
    position: 'absolute',
    bottom: 100,
    right: 30,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  faveCount: {
    fontSize: 22,
    bottom: 102,
    left: 325,
  },
  brandText: {
    fontSize: 40,
    fontWeight: '500',
    color: 'black',
    textTransform: 'uppercase',
    fontFamily: 'HelveticaNeue',
  },
  productContainer: {
    left: 25,
    bottom: 75,
  },
  contactPad: {
    margin: 20,
    bottom: 65,
    width: '38%',
    height: 35,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 20,
    backgroundColor: 'silver',
  },
  contactText: {
    left: 4,
    fontSize: 18,
    paddingTop: 6,
    paddingRight: 10,
    width: '100%',
    color: 'white',
    fontFamily: 'HelveticaNeue',
  },
  rentPad: {
    margin: 20,
    bottom: 140,
    left: 180,
    width: '48%',
    height: 35,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 20,
    backgroundColor: colors.primary,
  },
  rentText: {
    left: 40,
    fontSize: 18,
    paddingTop: 6,
    paddingRight: 15,
    width: '200%',
    color: 'white',
    fontFamily: 'HelveticaNeue',
  },
  detailsContainer: {
    flex: 1,
    bottom: 130,
    left: 25,
  },
  detailsText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    top: 10,
  },
  conditionContainer: {
    flex: 1,
    bottom: 90,
    left: 25,
  },
  conditionText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  condition: {
    top: 10,
    right: 3,
  },
  lentText: {
    textAlign: 'center',
    fontSize: 10,
    color: colors.secondary,
    fontFamily: 'HelveticaNeue',
  }
});

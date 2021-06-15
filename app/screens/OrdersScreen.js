// Lentl - OrdersScreen.js
// Copyright (c) John Gabatin. All rights reserved.

import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  View,
  SafeAreaView,
  Image,
  Text,
  TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import colors from '../config/colors';

export default function OrdersScreen() {
  return (
    <View style={styles.bg}>

      <SafeAreaView style={styles.header}>
        {/* Orders text */}
        <Text style={styles.ordersText}>Orders</Text>
      </SafeAreaView>

      {/* Louis Vuitton card */}
      <TouchableOpacity style={styles.card}>
        <SafeAreaView style={styles.cardImgWrapper}>
          <Image
            style={styles.cardImg}
            source={{uri: 'https://stockx.imgix.net/products/handbags/Louis-Vuitton-x-Nigo-Squared-Reversible-Belt-Damier-Ebene-Giant-40MM-Brown-3.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&trimcolor=ffffff&updated_at=1592608840'}}
            resizeMode="cover"
          />
        </SafeAreaView>

        <SafeAreaView style={styles.cardInfo}>
          <Text style={styles.cardTitle}>Louis Vuitton Belt</Text>
          <Text style={styles.cardDetails}>Status: Processing</Text>
        </SafeAreaView>

        <View style={styles.contentArrow}>
            <Ionicons name='ios-arrow-forward' size={24} color={colors.secondary} style={{ marginTop: 2, marginLeft: 2 }}></Ionicons>
        </View>
      </TouchableOpacity>

      {/* YSL card */}
      <TouchableOpacity style={styles.card}>
        <SafeAreaView style={styles.cardImgWrapper}>
          <Image
            style={styles.cardImg}
            source={{uri: 'https://cdn-images.farfetch-contents.com/13/57/11/50/13571150_27102241_1000.jpg'}}
            resizeMode="cover"
          />
        </SafeAreaView>

        <SafeAreaView style={styles.cardInfo}>
          <Text style={styles.cardTitle}>Yves Saint Laurent Belt</Text>
          <Text style={styles.cardDetails}>Status: Delivered</Text>
        </SafeAreaView>

        <View style={styles.contentArrow}>
            <Ionicons name='ios-arrow-forward' size={24} color={colors.secondary} style={{ marginTop: 2, marginLeft: 2 }}></Ionicons>
        </View>
      </TouchableOpacity>

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
  ordersText: {
    fontSize: 22,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'HelveticaNeue',
  },
  cardsWrapper: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
  },
  card: {
    top: 100,
    height: 100,
    left: 5,
    marginVertical: 10,
    flexDirection: 'row',
    padding: 10,
    shadowColor: 'rgb(0, 0, 0)',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: 'white',
  },
  cardTitle: {
    left: 20,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: 'gray',
    fontFamily: 'HelveticaNeue',
  },
  cardDetails: {
    left: 20,
    fontSize: 12,
    color: colors.secondary,
    fontFamily: 'ArialHebrew-Light',
  },
  contentArrow: {
    top: 50,
    right: 20,
  },
});

// Lentl - HomeScreen.js
// Copyright (c) John Gabatin. All rights reserved.

import React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import colors from '../config/colors';
import Slider from '../config/slider';
import BrowseScreen from './BrowseScreen';
import FavoritesScreen from './FavoritesScreen';
import OrdersScreen from './OrdersScreen';
import ProfileScreen from './ProfileScreen';

const trending = [
  'https://cdn-images.farfetch-contents.com/12/93/76/59/12937659_13417876_600.jpg',
  'https://cdn-images.farfetch-contents.com/13/57/11/50/13571150_27102241_1000.jpg',
  'https://stockx.imgix.net/products/handbags/Louis-Vuitton-x-Nigo-Squared-Reversible-Belt-Damier-Ebene-Giant-40MM-Brown-3.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&trimcolor=ffffff&updated_at=1592608840'
]

const recent = [
  'https://cdn-images.farfetch-contents.com/13/53/79/93/13537993_16066491_1000.jpg',
  'https://imcut.jollychic.com//uploads/jollyimg/imageService/img/goods/2019/11/26/17/00/8d11279a-ba2b-4f58-bf6e-cf55bee9e00c.jpg',
]

class HomeScreen extends React.Component {

  render() {
    return (
      <ScrollView style={[styles.bg, { showsVerticalScrollIndicator:'false' }]}>

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.welcomeText}>Welcome back, Joe</Text>
        </View>

        {/* Top content */}
        <View style={styles.topContentContainer}>
          <View style={styles.contentBox}>
            <Text style={styles.contentText}>{`
              Wear luxury accessories
              at a discounted price.
            `}</Text>

            <View style={styles.contentArrow}>
                <Ionicons name='ios-arrow-forward' size={24} color='white' style={{ marginTop: 2, marginLeft: 2 }}></Ionicons>
            </View>
          </View>
        </View>

        <SafeAreaView style={styles.sliderContainer}>

          {/* Trending text and header */}
          <SafeAreaView style={styles.trendPad}>
            <Text style={styles.trendText}>Trending</Text>
          </SafeAreaView>
          <Text style={styles.exploreText}>Explore</Text>

          {/* Slider component */}
          <Slider images={trending} />

          {/* Recent text and header */}
          <SafeAreaView style={styles.recentPad}>
            <Text style={styles.recentText}>Recently Viewed</Text>
          </SafeAreaView>
          <Text style={styles.seeText}>See All</Text>

          {/* Slider component */}
          <SafeAreaView style={styles.bottomSlider}>
            <Slider images={recent} />
          </SafeAreaView>

        </SafeAreaView>

        {/* Rental path */}
        <SafeAreaView style={styles.rentContainer}>

          <Text style={styles.rentText}>I'm renting for...</Text>

          {/* Occasion container */}
          <View style={styles.occContainer}>
            <TouchableOpacity style={styles.occBox}>
              <Ionicons name='ios-rose' color={colors.secondary} size={50} />
              <Text style={styles.occText}>Formal</Text>
            </TouchableOpacity>

            <View style={styles.occBox}>
              <TouchableOpacity style={styles.occBox}>
                <Ionicons name='ios-beer' color={colors.secondary} size={50} />
                <Text style={styles.occText}>Function</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.occBox}>
                <Ionicons name='logo-instagram' color={colors.secondary} size={50} />
                <Text style={styles.occText}>Flex</Text>
            </TouchableOpacity>
          </View>

        </SafeAreaView>

        {/* Promotional content */}
        <View style={styles.botContentContainer}>
          <View style={styles.contentBox}>
            <Text style={styles.contentText}>{`
              Take 20% off
              all designer belts.
            `}</Text>

            <View style={styles.contentArrow}>
                <Ionicons name='ios-arrow-forward' size={24} color='white' style={{ marginTop: 2, marginLeft: 2 }}></Ionicons>
            </View>
          </View>
        </View>

        {/* Request text */}
        <TouchableOpacity>
          <Text style={styles.requestText}>Couldn't find an accessory that you wanted? Submit a request</Text>
        </TouchableOpacity>

      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  bg: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  header: {
    width: '100%',
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  welcomeText: {
    top: 35,
    fontSize: 24,
    fontWeight: '400',
    fontFamily: 'HelveticaNeue',
    color: 'black',
  },
  topContentContainer: {
    top: 30,
  },
  botContentContainer: {
    bottom: 65,
  },
  contentBox: {
    width: '95%',
    height: 100,
    left: 10,
    borderRadius: 25,
    elevation: 2,
    padding: 10,
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  contentText: {
    top: 4,
    right: 65,
    fontSize: 20,
    color: 'white',
    fontFamily: 'HelveticaNeue',
  },
  contentArrow: {
    left: 350,
    bottom: 5,
  },
  sliderContainer: {
    flex: 1,
    bottom: 50,
  },
  trendPad: {
    top: 100,
    margin: 10,
    width: '23%',
    height: 30,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 20,
    backgroundColor: colors.secondary,
  },
  trendText: {
    fontSize: 16,
    paddingTop: 6,
    paddingLeft: 15,
    paddingRight: 15,
    width: '100%',
    color: 'white',
    fontFamily: 'HelveticaNeue',
  },
  exploreText: {
    fontSize: 14,
    textDecorationLine: 'underline',
    textAlign: 'right',
    marginRight: 15,
    top: 88,
    color: 'gray',
    fontFamily: 'ArialHebrew-Light',
  },
  recentPad: {
    margin: 10,
    width: '36%',
    height: 30,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 20,
    backgroundColor: colors.secondary,
  },
  recentText: {
    fontSize: 16,
    paddingTop: 6,
    paddingLeft: 15,
    paddingRight: 15,
    width: '100%',
    color: 'white',
    fontFamily: 'HelveticaNeue',
  },
  seeText: {
    fontSize: 14,
    textDecorationLine: 'underline',
    textAlign: 'right',
    marginRight: 15,
    bottom: 22,
    color: 'gray',
    fontFamily: 'ArialHebrew-Light',
  },
  bottomSlider: {
    bottom: 100,
  },
  rentContainer: {
    bottom: 100,
  },
  rentText : {
    textAlign: 'center',
    fontSize: 24,
    color: 'gray',
    fontFamily: 'HelveticaNeue',
  },
  occContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 32,
  },
  occBox: {
    flex: 1,
    alignItems: 'center',
  },
  occText: {
    fontWeight: '500',
    fontSize: 14,
    color: 'gray',
    fontFamily: 'HelveticaNeue',
  },
  requestText: {
    bottom: 40,
    textAlign: 'center',
    fontSize: 10,
    color: colors.secondary,
    fontFamily: 'HelveticaNeue',
  }
});

const Tab = createMaterialBottomTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor= '#ffffff'>

      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: '',
          tabBarColor: colors.secondary,
          tabBarIcon: ({ color }) => (
            <Ionicons name='ios-home' color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Browse"
        component={BrowseScreen}
        options={{
          tabBarLabel: '',
          tabBarColor: colors.secondary,
          tabBarIcon: ({ color }) => (
            <Ionicons name='ios-search' color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarLabel: '',
          tabBarColor: colors.secondary,
          tabBarIcon: ({ color }) => (
            <Ionicons name='ios-heart' color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Orders"
        component={OrdersScreen}
        options={{
          tabBarLabel: '',
          tabBarColor: colors.secondary,
          tabBarIcon: ({ color }) => (
            <Ionicons name='ios-pricetags' color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: '',
          tabBarColor: colors.secondary,
          tabBarIcon: ({ color }) => (
            <Ionicons name='ios-person' color={color} size={26} />
          ),
        }}
      />

    </Tab.Navigator>
  );
}

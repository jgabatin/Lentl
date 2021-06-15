// Lentl - LoginScreen.js
// Copyright (c) John Gabatin. All rights reserved.

import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity } from 'react-native';

import colors from '../config/colors';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.bg}>

      {/* Logo */}
      <Image
        style={styles.logo}
        source={require('../assets/logo.png')}
      />

      {/* Email bar */}
      <TextInput
        style={styles.input}
        autoCapitalize='none'
        placeholder='Email'
        placeholderTextColor='silver'
      />

      {/* Password bar */}
      <TextInput
        style={styles.input}
        autoCapitalize='none'
        placeholder='Password'
        placeholderTextColor='silver'
        secureTextEntry={true}
      />

      {/* Sign up button */}
      <TouchableOpacity
        style={styles.signUp}
        title="Sign Up"
        onPress={() => navigation.navigate('HomeScreen')}>

        <Text style={styles.upText}>Sign Up</Text>

      </TouchableOpacity>

      {/* Sign in button */}
      <TouchableOpacity
        style={styles.signIn}
        title="Account Active"
        onPress={() => navigation.navigate('ProductScreen')}>

        <Text style={styles.inText}>Already have an account? Sign in</Text>

      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  logo: {
    resizeMode:'contain',
    width: 150,
    height: 150,
    bottom: 70,
  },
  input: {
    borderWidth: 1,
    margin: 10,
    width: 325,
    height: 30,
    position: 'relative',
    paddingLeft: 20,
    borderRadius: 20,
    bottom: 100,
    borderColor: colors.secondary,
    fontFamily: 'HelveticaNeue',
  },
  signUp: {
    margin: 10,
    width: 325,
    height: 30,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 20,
    bottom: 85,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  upText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
    fontFamily: 'HelveticaNeue',
  },
  signIn: {
    bottom: 75,
  },
  inText: {
    fontSize: 10,
    color: colors.secondary,
    fontFamily: 'HelveticaNeue',
  },
});

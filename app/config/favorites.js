// Lentl - favorites.js
// Copyright (c) John Gabatin. All rights reserved.

import React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Dimensions,
  Image,
  ImageBackground,
  Text,
  FlatList,
  TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import colors from './colors';

const data = [
  {image: 'https://cdn-images.farfetch-contents.com/12/93/76/59/12937659_13417876_600.jpg',
   key: "Gucci"},
  {image: 'https://imcut.jollychic.com//uploads/jollyimg/imageService/img/goods/2019/11/26/17/00/8d11279a-ba2b-4f58-bf6e-cf55bee9e00c.jpg',
   key: "Burberry"},
  {image: 'https://neimanmarcus.scene7.com/is/image/NeimanMarcus/NMM2R5T_01_m?&wid=1200&height=1500',
   key: "Versace"},
]

const columns = 1
const width = Dimensions.get('window').width
const ht = (width / columns) / 2

export default class Favorites extends React.Component {

  renderData = ({item, index}) => {
    return (
      <View style={styles.item}>
        <TouchableOpacity style={styles.itemRedirect}>
          <ImageBackground
            source={{uri: item.image}}
            style={{width: '100%', height: '100%'}} />

          <View style={styles.faveContainer}>
            <TouchableOpacity style={styles.faveButton}>
                <Ionicons name='ios-heart' size={22} color={colors.secondary} style={{ marginTop: 4, marginLeft: 1, alignSelf: 'center' }}></Ionicons>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    return (
      <View style ={styles.container}>
        <FlatList
          data={data}
          renderItem={this.renderData}
          keyExtractor={(item, index) => index.toString()}
          numColumns={columns}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 115,
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    height: ht,
    flex: 1,
    margin: 8,
    borderRadius: 25,
    elevation: 2,
    padding: 10,
    shadowColor: 'rgb(0, 0, 0)',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    backgroundColor: 'white',
  },
  itemRedirect: {
    width: '95%',
    height: '95%',
    alignItems: 'center',
  },
  faveContainer: {
    flex: 1,
    left: 220,
    top: 100,
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
});

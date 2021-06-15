// Lentl - browse.js
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

import colors from './colors';

const data = [
  {image: 'https://cdn-images.farfetch-contents.com/12/93/76/59/12937659_13417876_600.jpg',
   key: "Gucci"},
  {image: 'https://cdn-images.farfetch-contents.com/13/57/11/50/13571150_27102241_1000.jpg',
   key: "Yves Saint Laurent"},
  {image: 'https://cdn-images.farfetch-contents.com/13/53/79/93/13537993_16066491_1000.jpg',
   key: "Salvatore Ferragamo"},
  {image: 'https://imcut.jollychic.com//uploads/jollyimg/imageService/img/goods/2019/11/26/17/00/8d11279a-ba2b-4f58-bf6e-cf55bee9e00c.jpg',
   key: "Burberry"},
  {image: 'https://cdn-images.farfetch-contents.com/14/73/48/34/14734834_23533676_600.jpg',
   key: "Fendi"},
  {image: 'https://neimanmarcus.scene7.com/is/image/NeimanMarcus/NMM2R5T_01_m?&wid=1200&height=1500',
   key: "Versace"},
  {image: 'https://stockx.imgix.net/products/handbags/Louis-Vuitton-x-Nigo-Squared-Reversible-Belt-Damier-Ebene-Giant-40MM-Brown-3.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&trimcolor=ffffff&updated_at=1592608840',
   key: "Louis Vuitton"},
]

const columns = 2
const width = Dimensions.get('window').width

export default class Browse extends React.Component {

  format = (data, columns) => {
    const rows = Math.floor(data.length / columns)
    let lastrow = data.length - (rows * columns)

    {/* Add an empty panel if num of column items is odd */}
    while (lastrow !== 0 && lastrow !== columns) {
      data.push({key: "empty", empty: true})
      lastrow++
    }

    return data
  }

  renderData = ({item, index}) => {
    {/* Index to display all items */}
    return (
      <View style={styles.item}>
        <TouchableOpacity style={styles.itemRedirect}>
          <ImageBackground
            source={{uri: item.image}}
            style={{width: '100%', height: '100%'}} />
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    return (
      <View style ={styles.container}>
        <FlatList
          data={this.format(data,columns)}
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
    height: width / columns,
    flex: 1,
    margin: 4,
    backgroundColor: 'white',
  },
  itemRedirect: {
    width: '95%',
    height: '95%',
    alignItems: 'center',
  },
});

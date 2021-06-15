// Lentl - slider.js
// Copyright (c) John Gabatin. All rights reserved.

import React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image,
  Text } from 'react-native';

import colors from './colors';

const { width } = Dimensions.get("window");
const height = width * 0.6;

export default class Slider extends React.Component {
  state = {
    active: 0
  }

  change = ({ nativeEvent }) => {
    const slide = Math.ceil(nativeEvent.contentOffset.x /
                            nativeEvent.layoutMeasurement.width);

    if (slide != this.state.active) {
      this.setState({active: slide});
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.slides}>

        {/* Slider structure */}
        <ScrollView
          pagingEnabled
          horizontal
          onScroll={this.change}
          showsHorizontalScrollIndicator={false}
          style={styles.scroll}
        >
          {
            this.props.images.map((images, index) => (
              <Image
                key={index}
                source={{uri: images}}
                style={styles.images} />
            ))
          }
        </ScrollView>

        {/* Slider buttons */}
        <View style={styles.pagination}>
          {
            this.props.images.map((i, k) => (
              <Text key={k} style={k==this.state.active ?
                                      styles.pagTextActive :
                                      styles.pagText}>●</Text>
            ))
          }
        </View>

      </SafeAreaView>
    )
  }
}


const styles = StyleSheet.create({
  slides: {
    marginTop: 100,
    width,
    height,
  },
  scroll: {
    width,
    height,
  },
  images: {
    width,
    height,
    resizeMode: 'cover',
  },
  pagination: {
    flexDirection:'row',
    position:'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
  pagText: {
    fontSize: (width / 30),
    margin: 3,
    color: '#888',
  },
  pagTextActive: {
    fontSize: (width / 30),
    margin: 3,
    color: colors.primary,
  },
});

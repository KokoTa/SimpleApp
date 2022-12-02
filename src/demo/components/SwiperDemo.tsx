import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Swiper from 'react-native-swiper';

function SwiperDemo() {
  return (
    <View style={styles.swiperWrap}>
      <Swiper>
        <View style={styles.swiperItem}>
          <Image
            style={styles.swiperImage}
            source={{uri: 'https://placekitten.com/100/100'}}
            resizeMode="cover"
          />
        </View>
        <View style={styles.swiperItem}>
          <Image
            style={styles.swiperImage}
            source={{uri: 'https://placekitten.com/200/200'}}
            resizeMode="cover"
          />
        </View>
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  swiperWrap: {
    height: 200,
  },
  swiperImage: {
    flex: 1,
  },
  swiperItem: {
    flex: 1,
  },
});

export default SwiperDemo;

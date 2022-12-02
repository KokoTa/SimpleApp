import React from 'react';
import {StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

function SkeletonDemo() {
  return (
    <View style={styles.wrap}>
      <ShimmerPlaceHolder style={styles.item} LinearGradient={LinearGradient} />
      <ShimmerPlaceHolder style={styles.item} LinearGradient={LinearGradient} />
      <ShimmerPlaceHolder style={styles.item} LinearGradient={LinearGradient} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    marginTop: 10,
    height: 20,
  },
});

export default SkeletonDemo;

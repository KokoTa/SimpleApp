import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function TrendingHot() {
  return (
    <View style={styles.wrap}>
      <Text>TrendingHot</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TrendingHot;

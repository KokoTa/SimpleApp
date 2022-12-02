import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function TrendingTop() {
  return (
    <View style={styles.wrap}>
      <Text>TrendingTop</Text>
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

export default TrendingTop;

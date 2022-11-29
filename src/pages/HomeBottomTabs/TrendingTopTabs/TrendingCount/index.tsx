import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function TrendingCount() {
  return (
    <View style={styles.wrap}>
      <Text>TrendingCount</Text>
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

export default TrendingCount;

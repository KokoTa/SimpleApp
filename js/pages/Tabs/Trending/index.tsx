import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function Trending() {
  return (
    <View style={styles.root}>
      <Text>Trending</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default Trending;

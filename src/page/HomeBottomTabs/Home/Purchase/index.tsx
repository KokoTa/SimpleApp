import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function Purchase() {
  return (
    <View style={styles.wrap}>
      <Text>Purchase</Text>
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

export default Purchase;

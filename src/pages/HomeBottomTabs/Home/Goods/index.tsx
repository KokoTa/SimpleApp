import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function Goods() {
  return (
    <View style={styles.wrap}>
      <Text>Goods</Text>
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

export default Goods;

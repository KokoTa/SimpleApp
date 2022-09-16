import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function Hot() {
  return (
    <View style={styles.root}>
      <Text>Hot</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default Hot;

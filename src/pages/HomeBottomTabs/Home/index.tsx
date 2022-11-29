import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function Home() {
  return (
    <View style={styles.wrap}>
      <Text>Home</Text>
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

export default Home;

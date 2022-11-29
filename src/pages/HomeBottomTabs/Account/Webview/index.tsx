import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function Webview() {
  return (
    <View style={styles.wrap}>
      <Text>Webview</Text>
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

export default Webview;

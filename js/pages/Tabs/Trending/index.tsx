import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '../../../global/colors';

function Trending() {
  return (
    <SafeAreaView
      edges={['top', 'left', 'right']}
      mode="padding"
      style={styles.root}>
      <View style={styles.content}>
        <Text>Trending</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.PURPLE,
  },
  content: {
    flex: 1,
    backgroundColor: colors.GRAY,
  },
});

export default Trending;

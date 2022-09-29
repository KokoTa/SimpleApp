import React from 'react';
import {
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  TouchableOpacity,
} from 'react-native';
import RenderHTML from 'react-native-render-html';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '../../../global/colors';
import NavigationUtil from '../../../navigator/NavigationUtil';

function Trending() {
  const {width} = useWindowDimensions();
  return (
    <SafeAreaView
      edges={['top', 'left', 'right']}
      mode="padding"
      style={styles.root}>
      <View style={styles.content}>
        <RenderHTML source={{html: '<h1>Hello</h1>'}} contentWidth={width} />
        <TouchableOpacity onPress={() => NavigationUtil.to('TrendingDetail')}>
          <Text>Go Detail</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  content: {
    flex: 1,
  },
});

export default Trending;

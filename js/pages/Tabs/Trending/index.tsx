import React, {useEffect} from 'react';
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
import EventBus from '../../../utils/EventBus';

function Trending({route}: any) {
  const {width} = useWindowDimensions();

  useEffect(() => {
    if (route.params?.count) {
      console.log('route.params.count', route.params?.count);
      EventBus.emit('test', 'I just call once~'); // 发送事件
    }
  }, [route.params?.count]);

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

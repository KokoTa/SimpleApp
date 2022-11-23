import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import RenderHTML from 'react-native-render-html';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '../../../global/colors';
import NavigationUtil from '../../../navigator/NavigationUtil';
import EventBus from '../../../utils/EventBus';
import CustomScrollSelect from './components/CustomScrollSelect';
import LinkApp from './components/LinkApp';
import CopyValue from './components/CopyValue';
import DateSelect from './components/DateSelect';
import NBActionSheet from './components/NBActionSheet';
import RNECheckBoxGroup from './components/RNECheckBoxGroup';
import BottomSheetPanel from './components/BottomSheetPanel';
import NBCheckBoxGroup from './components/NBCheckBoxGroup';
import ShareMessage from './components/ShareMessage';
import MaskedText from './components/MaskedText';
import {useAppDispatch} from '../../../redux';
import {onVisibleChange} from '../../../redux/reducer/modal';

function Trending({route}: any) {
  const {width} = useWindowDimensions();
  const dispatch = useAppDispatch();

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
      <ScrollView style={styles.content}>
        <View>
          {/* RenderHTML */}
          <View style={styles.item}>
            <RenderHTML
              source={{html: '<h1>Hello</h1>'}}
              contentWidth={width}
            />
          </View>

          {/* Webview */}
          <View style={styles.item}>
            <TouchableOpacity
              onPress={() => NavigationUtil.to('TrendingWebview')}>
              <Text>Go Webview</Text>
            </TouchableOpacity>
          </View>

          {/* Parallax */}
          <View style={styles.item}>
            <TouchableOpacity
              onPress={() => NavigationUtil.to('TrendingParallax')}>
              <Text>Go Parallax</Text>
            </TouchableOpacity>
          </View>

          {/* Link */}
          <View style={styles.item}>
            <LinkApp />
          </View>

          {/* Copy */}
          <View style={styles.item}>
            <CopyValue />
          </View>

          {/* RNE checkbox */}
          <View style={styles.item}>
            <RNECheckBoxGroup />
          </View>

          {/* NB checkbox */}
          <View style={styles.item}>
            <NBCheckBoxGroup />
          </View>

          {/* Date Picker */}
          <View style={styles.item}>
            <DateSelect />
          </View>

          {/* Scroll Select */}
          <View style={styles.item}>
            <CustomScrollSelect />
          </View>

          {/* NB ActionSheet */}
          <View style={styles.item}>
            <NBActionSheet />
          </View>

          {/* Bottom Sheet Panel */}
          <View style={styles.item}>
            <BottomSheetPanel />
          </View>

          {/* Share */}
          <View style={styles.item}>
            <ShareMessage />
          </View>

          {/* Masked View */}
          <View style={styles.item}>
            <MaskedText />
          </View>

          {/* Global Modal */}
          <View style={styles.item}>
            <TouchableOpacity onPress={() => dispatch(onVisibleChange(true))}>
              <Text>Show Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
});

export default Trending;

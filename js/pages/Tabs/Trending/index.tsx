import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  TouchableOpacity,
  Linking,
} from 'react-native';
import RenderHTML from 'react-native-render-html';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '../../../global/colors';
import NavigationUtil from '../../../navigator/NavigationUtil';
import EventBus from '../../../utils/EventBus';
import Clipboard from '@react-native-clipboard/clipboard';
import dayjs from 'dayjs';
import DatePicker from 'react-native-date-picker';
import CheckBoxGroup from './components/CheckBoxGroup';

function Trending({route}: any) {
  const [copiedText, setCopiedText] = useState('');

  const [list, setList] = useState<CheckBoxGroupItem[]>([
    {
      title: 'a',
      checked: false,
      value: 1,
    },
    {
      title: 'b',
      checked: false,
      value: 2,
    },
  ]);

  const [date, setDate] = useState(new Date());
  const [datePickerShow, setDatePickerShow] = useState(false);

  const {width} = useWindowDimensions();

  useEffect(() => {
    if (route.params?.count) {
      console.log('route.params.count', route.params?.count);
      EventBus.emit('test', 'I just call once~'); // 发送事件
    }
  }, [route.params?.count]);

  const handleOpenOtherApp = async () => {
    const url = 'map://';
    try {
      await Linking.canOpenURL(url);
      await Linking.openURL(url);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCopy = async () => {
    Clipboard.setString('Hello');
    setTimeout(async () => {
      const text = await Clipboard.getString();
      setCopiedText(text);
    }, 3000);
  };

  const handleCheckBoxChange = (item: CheckBoxGroupItem) => {
    setList(
      list.map((boxItem: CheckBoxGroupItem) => {
        if (boxItem.title === item.title) {
          boxItem.checked = !boxItem.checked;
        }
        return boxItem;
      }),
    );
  };

  const handleOpenDatePicker = () => {
    setDatePickerShow(true);
  };
  const handleDatePickerConfirm = (res: any) => {
    console.log(res);
    setDatePickerShow(false);
    setDate(res);
  };

  return (
    <SafeAreaView
      edges={['top', 'left', 'right']}
      mode="padding"
      style={styles.root}>
      <View style={styles.content}>
        <View style={styles.item}>
          <RenderHTML source={{html: '<h1>Hello</h1>'}} contentWidth={width} />
        </View>

        <View style={styles.item}>
          <TouchableOpacity
            onPress={() => NavigationUtil.to('TrendingWebview')}>
            <Text>Go Webview</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.item}>
          <TouchableOpacity
            onPress={() => NavigationUtil.to('TrendingParallax')}>
            <Text>Go Parallax</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.item}>
          <TouchableOpacity onPress={handleOpenOtherApp}>
            <Text>Open Other App</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.item}>
          <TouchableOpacity onPress={handleCopy}>
            <Text>Copy Value</Text>
          </TouchableOpacity>
          <Text>Show Copy Value: {copiedText}</Text>
        </View>

        <View style={styles.item}>
          <CheckBoxGroup
            list={list}
            onPress={handleCheckBoxChange}
            isInline={true}
          />
        </View>

        <View style={styles.item}>
          <TouchableOpacity onPress={handleOpenDatePicker}>
            <Text>Open DatePicker</Text>
          </TouchableOpacity>
          <DatePicker
            modal
            mode={'date'}
            open={datePickerShow}
            date={date}
            onConfirm={handleDatePickerConfirm}
            onCancel={() => {
              setDatePickerShow(false);
            }}
          />
          <Text>{dayjs(date).format('YYYY-MM-DD HH:mm:ss')}</Text>
        </View>
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
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
});

export default Trending;

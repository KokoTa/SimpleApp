import React, {useEffect, useState} from 'react';
import {Keyboard, StyleSheet, View} from 'react-native';
import {
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/AntDesign';
import {getTestApi} from '../../api';
import colors from '../../global/colors';
import EventBus from '../../utils/EventBus';
import MusicList from './components/MusicList';

function Index() {
  const [searchKey, setSearchKey] = useState('');
  const [listData, setListData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);

  const searchByKey = async () => {
    const res = await getTestApi({searchKey});
    return res.data.data;
  };

  useEffect(() => {
    setTimeout(() => {
      handleReachBottom();
    }, 100); // 等待渲染完成后再出发

    // 测试 EventBus
    EventBus.on('test', (data: any) => {
      console.log(data);
      EventBus.remove('test');
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRefresh = async () => {
    setRefreshing(true);
    const list = await searchByKey();
    setListData(list as any);
    setRefreshing(false);
  };

  const handleReachBottom = async () => {
    if (!loading) {
      setLoading(true);
      const list = (await searchByKey()) as any;
      setListData([...listData, ...list] as any);
      setLoading(false);
    }
  };

  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={styles.root}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.searchWrap}>
          <View style={styles.searchInputWrap}>
            <TextInput
              style={styles.searchInput}
              onChangeText={text => setSearchKey(text)}
              onSubmitEditing={handleRefresh}
              placeholder="Search music by key"
            />
            <Icon
              size={24}
              name={'search1'}
              color={colors.PURPLE}
              onPress={handleRefresh}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
      <MusicList
        listData={listData}
        refreshing={refreshing}
        onRefresh={handleRefresh}
        isLoading={loading}
        onReachBottom={handleReachBottom}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  searchWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  searchInputWrap: {
    width: '60%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.PURPLE,
  },
  searchInput: {
    width: '90%',
    paddingVertical: 0, // Android 会有默认 padding
  },
});

export default Index;

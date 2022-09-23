import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/AntDesign';
import {getTestApi} from '../../api';
import colors from '../../global/colors';
import MusicList from './components/MusicList';

function Index() {
  const [searchKey, setSearchKey] = useState('');
  const [listData, setListData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const searchByKey = async () => {
    const res = await getTestApi({searchKey});
    setListData(res.data.data);
  };

  useEffect(() => {
    searchByKey();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRefresh = async () => {
    setRefreshing(true);
    await searchByKey();
    setRefreshing(false);
  };

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.searchWrap}>
        <View style={styles.searchInputWrap}>
          <TextInput
            style={styles.searchInput}
            onChangeText={text => setSearchKey(text)}
            onSubmitEditing={searchByKey}
            placeholder="Search music by key"
          />
          <Icon
            size={24}
            name={'search1'}
            color={colors.PURPLE}
            onPress={searchByKey}
          />
        </View>
      </View>
      <View style={styles.listWrap}>
        <MusicList
          listData={listData}
          refreshing={refreshing}
          onRefresh={handleRefresh}
        />
      </View>
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
  },
  listWrap: {
    flexGrow: 1,
  },
});

export default Index;

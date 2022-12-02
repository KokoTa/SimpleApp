import React from 'react';
import {StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import BottomModalDemo from '../../../components/BottomModalDemo';
import DatePickerDemo from '../../../components/DatePickerDemo';
import GlobalModalDemo from '../../../components/GlobalModalDemo';
import LocalizeDemo from '../../../components/LocalizeDemo';
import ShareDemo from '../../../components/ShareDemo';
import SwiperDemo from '../../../components/SwiperDemo';
import UploadFileDemo from '../../../components/UploadFileDemo';

function Home() {
  return (
    <FlatList
      style={styles.wrap}
      data={[]}
      renderItem={() => null}
      ListFooterComponent={() => (
        <>
          <SwiperDemo />
          <GlobalModalDemo />
          <BottomModalDemo />
          <UploadFileDemo />
          <DatePickerDemo />
          <ShareDemo />
          <LocalizeDemo />
        </>
      )}
    />
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
  },
});

export default Home;

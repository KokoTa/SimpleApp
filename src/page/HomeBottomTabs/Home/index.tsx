import React from 'react';
import {StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import BottomModalDemo from '../../../demo/BottomModalDemo';
import DatePickerDemo from '../../../demo/DatePickerDemo';
import GlobalModalDemo from '../../../demo/GlobalModalDemo';
import SwiperDemo from '../../../demo/SwiperDemo';
import UploadFileDemo from '../../../demo/UploadFileDemo';

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

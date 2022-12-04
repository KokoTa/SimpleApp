import React from 'react';
import {StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import BottomModalDemo from '../../../components/BottomModalDemo';
import DatePickerDemo from '../../../components/DatePickerDemo';
import DropMenuDemo from '../../../components/DropMenuDemo';
import GlobalModalDemo from '../../../components/GlobalModalDemo';
import InputNumberDemo from '../../../components/InputNumberDemo';
import LocalizeDemo from '../../../components/LocalizeDemo';
import NetworkInfoDemo from '../../../components/NetworkInfoDemo';
import SelectionDemo from '../../../components/SelectionDemo';
import ShareDemo from '../../../components/ShareDemo';
import SkeletonDemo from '../../../components/SkeletonDemo';
import StepDemo from '../../../components/StepDemo';
import SwiperDemo from '../../../components/SwiperDemo';
import UploadFileDemo from '../../../components/UploadFileDemo';
import ValidCodeDemo from '../../../components/ValidCodeDemo';

function Home() {
  return (
    <FlatList
      style={styles.wrap}
      data={[]}
      renderItem={() => null}
      ListFooterComponent={() => (
        <>
          <SelectionDemo />
          <SwiperDemo />
          <ValidCodeDemo />
          <GlobalModalDemo />
          <BottomModalDemo />
          <UploadFileDemo />
          <DatePickerDemo />
          <ShareDemo />
          <LocalizeDemo />
          <SkeletonDemo />
          <InputNumberDemo />
          <NetworkInfoDemo />
          <DropMenuDemo />
          <StepDemo />
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

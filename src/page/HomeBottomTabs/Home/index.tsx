import React, {useRef} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import GlobalStyle from '../../../style/GlobalStyle';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {FlatList} from 'react-native-gesture-handler';
import BottomModal from '../../../component/BottomModal';
import {useAppDispatch} from '../../../reducer';
import {toggle} from '../../../reducer/modalSlider';

function Home() {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = ['50%'];
  const handlePresentModalPress = () => {
    bottomSheetModalRef.current?.present();
  };
  const handlePresentModalClose = () => {
    bottomSheetModalRef.current?.close();
  };

  const dispatch = useAppDispatch();

  const handleToggleGlobalModal = () => {
    dispatch(toggle());
  };

  return (
    <View style={styles.wrap}>
      <TouchableOpacity onPress={handlePresentModalPress}>
        <Text style={GlobalStyle.ButtonText}>Open Bottom Modal</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleToggleGlobalModal}>
        <Text style={GlobalStyle.ButtonText}>Open Global Modal</Text>
      </TouchableOpacity>

      <BottomModal
        ref={bottomSheetModalRef}
        snapPoints={snapPoints}
        onBlur={handlePresentModalClose}>
        <FlatList
          data={Array(40)
            .fill(0)
            .map((item, index) => index)}
          renderItem={({item}) => <Text>{item}</Text>}
        />
      </BottomModal>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;

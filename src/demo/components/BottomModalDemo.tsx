import React, {useRef} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {FlatList} from 'react-native-gesture-handler';
import GlobalStyle from '../../styles/GlobalStyle';
import BottomModal from '../../components/BottomModal';

function BottomModalDemo() {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = ['60%'];
  const handlePresentModalPress = () => {
    bottomSheetModalRef.current?.present();
  };
  const handlePresentModalClose = () => {
    bottomSheetModalRef.current?.close();
  };

  return (
    <View style={styles.wrap}>
      <TouchableOpacity onPress={handlePresentModalPress}>
        <Text style={GlobalStyle.ButtonText}>Open Bottom Modal</Text>
      </TouchableOpacity>

      <BottomModal
        ref={bottomSheetModalRef}
        snapPoints={snapPoints}
        onBlur={handlePresentModalClose}
        detached={true}
        bottomInset={10}>
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
    height: 400,
  },
});

export default BottomModalDemo;

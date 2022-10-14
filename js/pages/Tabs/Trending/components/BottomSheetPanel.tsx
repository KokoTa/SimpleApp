import BottomSheet from '@gorhom/bottom-sheet';
import React, {useCallback, useMemo, useRef} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function BottomSheetPanel() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['40%', '80%'], []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => bottomSheetRef.current?.expand()}>
        <Text>BottomSheet expand</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => bottomSheetRef.current?.collapse()}>
        <Text>BottomSheet collapse</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => bottomSheetRef.current?.close()}>
        <Text>BottomSheet close</Text>
      </TouchableOpacity>
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}>
        <View style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text>Awesome2 🎉</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text>Awesome3 🎉</Text>
        </View>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 400,
    backgroundColor: '#eee',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default BottomSheetPanel;

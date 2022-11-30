import React from 'react';
import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RootState, useAppDispatch, useAppSelector} from '../reducer';
import {toggle} from '../reducer/modalSlider';

function GlobalModal() {
  const visible = useAppSelector((state: RootState) => state.modal.visible);
  const dispatch = useAppDispatch();
  return (
    <Modal animationType="slide" visible={visible}>
      <View style={styles.wrap}>
        <TouchableOpacity onPress={() => dispatch(toggle())}>
          <Text>Hide Modal</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default GlobalModal;

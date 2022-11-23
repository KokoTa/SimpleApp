import {View} from 'native-base';
import React from 'react';
import {Modal, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useAppDispatch, useAppSelector} from '../redux';
import {onVisibleChange, selectModalVisible} from '../redux/reducer/modal';

function GlobalModal() {
  const visible = useAppSelector(selectModalVisible);
  const dispatch = useAppDispatch();
  return (
    <>
      <Modal animationType="slide" visible={visible}>
        <View style={styles.wrap}>
          <TouchableOpacity onPress={() => dispatch(onVisibleChange(false))}>
            <Text>Hide Modal</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </>
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

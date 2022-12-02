import React, {Ref} from 'react';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetHandle,
} from '@gorhom/bottom-sheet';
import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';

const BottomModal = React.forwardRef((props: any, ref: Ref<any>) => {
  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={ref}
        index={0}
        snapPoints={props.snapPoints}
        backdropComponent={() => (
          <View onTouchEnd={props.onBlur} style={styles.modalBackdrop} />
        )}
        handleComponent={
          props.handleComponent ? props.handleComponent : BottomSheetHandle
        }
        activeOffsetX={[-999, 999]}
        activeOffsetY={[-5, 5]}>
        {props.children}
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
});

const styles = StyleSheet.create({
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
});

BottomModal.propTypes = {
  children: PropTypes.node, // modal 内容
  snapPoints: PropTypes.array, // modal 显示比例
  onBlur: PropTypes.func, // modal 点击外部回调
  handleComponent: PropTypes.node, // modal 头部操作组件
};

export default BottomModal;

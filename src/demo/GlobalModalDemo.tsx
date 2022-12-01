import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useAppDispatch} from '../reducer';
import {toggle} from '../reducer/modalSlider';
import GlobalStyle from '../style/GlobalStyle';

function GlobalModalDemo() {
  const dispatch = useAppDispatch();

  const handleToggleGlobalModal = () => {
    dispatch(toggle());
  };

  return (
    <>
      <TouchableOpacity onPress={handleToggleGlobalModal}>
        <Text style={GlobalStyle.ButtonText}>Open Global Modal</Text>
      </TouchableOpacity>
    </>
  );
}

export default GlobalModalDemo;

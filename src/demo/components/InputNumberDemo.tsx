import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import InputSpinner from 'react-native-input-spinner';

function InputNumberDemo() {
  const [number, setNumber] = useState(0);

  return (
    <View style={styles.wrap}>
      <View style={styles.inputNumber}>
        <InputSpinner
          skin="square"
          max={10}
          min={2}
          step={2}
          colorMax={'#f04048'}
          colorMin={'#40c5f4'}
          value={number}
          onChange={(num: number) => {
            setNumber(num);
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputNumber: {
    width: 200,
    height: 40,
  },
});

export default InputNumberDemo;

import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, TextInput, View} from 'react-native';

function LoginInput(props: any) {
  const {label, placeholder, shortLine, secure, onChangeText} = props;

  return (
    <View style={styles.wrap}>
      <View style={styles.row}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          secureTextEntry={secure}
          onChangeText={onChangeText}
          // 取消大小写
          autoCapitalize={'none'}
        />
      </View>
      <View style={[styles.line, shortLine ? styles.short : null]} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
  },
  line: {
    height: 0.5,
    backgroundColor: '#eee',
  },
  label: {
    padding: 15,
    width: 90,
  },
  input: {
    flex: 1,
    paddingRight: 15,
  },
  short: {
    marginLeft: 20,
  },
});

LoginInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  shortLine: PropTypes.bool,
  secure: PropTypes.bool,
  onChangeText: PropTypes.func,
};

export default LoginInput;

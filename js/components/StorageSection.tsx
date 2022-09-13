import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import sectionStyle from '../global/sectionStyle';

function StorageSection(props: any) {
  const STORAGE_KEY = 'STORAGE_KEY';
  const [localData, setLocalData] = useState('');
  const [text, setText] = useState('');

  const handleStorageSave = async () => {
    await AsyncStorage.setItem(STORAGE_KEY, text);
  };
  const handleStorageGet = async () => {
    const res = await AsyncStorage.getItem(STORAGE_KEY);
    setLocalData(res || '');
  };
  const handleStorageDel = async () => {
    await AsyncStorage.removeItem(STORAGE_KEY);
  };

  return (
    <View style={sectionStyle.sectionContainer}>
      <Text style={sectionStyle.sectionTitle}>{props.title}</Text>
      <TextInput
        style={sectionStyle.sectionButton}
        value={text}
        onChangeText={setText}
        placeholder="请输入"
        clearButtonMode="always"
      />
      <TouchableOpacity
        style={sectionStyle.sectionButton}
        onPress={handleStorageSave}>
        <Text>存储数据</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={sectionStyle.sectionButton}
        onPress={handleStorageGet}>
        <Text>获取数据</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={sectionStyle.sectionButton}
        onPress={handleStorageDel}>
        <Text>删除数据</Text>
      </TouchableOpacity>
      <Text>数据显示: {localData}</Text>
    </View>
  );
}

StorageSection.propTypes = {
  title: PropTypes.string,
};

export default StorageSection;

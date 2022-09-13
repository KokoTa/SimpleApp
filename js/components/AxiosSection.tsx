import React from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity, View} from 'react-native';
import sectionStyle from '../global/sectionStyle';
import request from '../config/request';

function AxiosSection(props: any) {
  const handleAxiosRequest = async () => {
    try {
      const res = await fetch(
        'https://api.devio.org/uapi/popular?q=java&pageIndex=1&pageSize=25',
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={sectionStyle.sectionContainer}>
      <Text style={sectionStyle.sectionTitle}>{props.title}</Text>
      <TouchableOpacity
        style={sectionStyle.sectionButton}
        onPress={handleAxiosRequest}>
        <Text>发送请求</Text>
      </TouchableOpacity>
    </View>
  );
}

AxiosSection.propTypes = {
  title: PropTypes.string,
};

export default AxiosSection;

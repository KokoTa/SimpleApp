import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import sectionStyle from '../global/sectionStyle';
import {getTestApi} from '../api';

function AxiosSection(props: any) {
  const [requestResult, setRequestResult] = useState('');

  const handleAxiosRequest = async () => {
    try {
      const res = await getTestApi({});
      setRequestResult(JSON.stringify(res.data));
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
      <ScrollView style={sectionStyle.data}>
        <Text>{requestResult}</Text>
      </ScrollView>
    </View>
  );
}

AxiosSection.propTypes = {
  title: PropTypes.string,
};

export default AxiosSection;

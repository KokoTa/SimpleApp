import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View} from 'react-native';
import sectionStyle from '../global/sectionStyle';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  IconAndroid,
  IconIos,
  IconWeixin,
  IconZhifubao,
} from '../assets/iconfont';
import VectorImage from 'react-native-vector-image';

function IconSection(props: any) {
  return (
    <View style={sectionStyle.sectionContainer}>
      <Text style={sectionStyle.sectionTitle}>{props.title}</Text>

      {/* https://github.com/oblador/react-native-vector-icons */}
      <Text>react-native-vector-icons 字体图标</Text>
      <View style={styles.row}>
        <Icon name="ad" size={30} />
      </View>

      {/* https://github.com/oblador/react-native-vector-image */}
      <Text>react-native-vector-image SVG图标</Text>
      <VectorImage
        style={styles.svg}
        source={require('../assets/svg/facebook.svg')}
      />

      {/* https://github.com/iconfont-cli/react-native-iconfont-cli */}
      <Text>iconfont SVG图标</Text>
      <View style={styles.row}>
        <IconIos />
        <IconAndroid />
        <IconWeixin />
        <IconZhifubao />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  svg: {
    width: 24,
    height: 24,
  },
});

IconSection.propTypes = {
  title: PropTypes.string,
};

export default IconSection;

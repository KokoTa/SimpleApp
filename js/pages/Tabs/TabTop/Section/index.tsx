/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import LoginSection from '../../../../sections/LoginSection';
import AxiosSection from '../../../../sections/AxiosSection';
import StorageSection from '../../../../sections/StorageSection';
import IconSection from '../../../../sections/IconSection';
import TimerSection from '../../../../sections/TimerSection';

const Section = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View>
          <StorageSection title="数据存储" />
          <AxiosSection title="发送请求" />
          <LoginSection title="登录模块" />
          <IconSection title="图标模块" />
          <TimerSection title="定时器模块" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default Section;

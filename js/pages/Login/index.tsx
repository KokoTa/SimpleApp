import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import NavigationUtil from '../../navigator/NavigationUtil';

function Login() {
  return (
    <SafeAreaView style={styles.root}>
      <View>
        <Text>Login</Text>
        <Button
          onPress={() => NavigationUtil.replace('TabNav')}
          title={'跳转到 TabNav'}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default Login;

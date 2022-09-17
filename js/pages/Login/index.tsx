import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import NavigationUtil from '../../navigator/NavigationUtil';
import {useAppDispatch, useAppSelector} from '../../redux';
import {
  onThemeColorChangeAsync,
  selectThemeColor,
} from '../../redux/reducer/theme';

function Login() {
  const themeColor = useAppSelector(selectThemeColor);
  const dispatch = useAppDispatch();

  return (
    <SafeAreaView style={styles.root}>
      <View>
        <Text>Login</Text>
        <Button
          onPress={() => NavigationUtil.replace('TabNav')}
          title={'跳转到 TabNav'}
        />
        <Text>{themeColor}</Text>
        <Button
          onPress={() => dispatch(onThemeColorChangeAsync('blue'))}
          title={'改变颜色'}
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

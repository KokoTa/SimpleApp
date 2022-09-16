import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import NavigationUtil from '../../navigator/NavigationUtil';

function Index() {
  return (
    <View style={styles.root}>
      <Text>Index</Text>
      <Button
        onPress={() => NavigationUtil.to('Trending')}
        title={'跳转到 Trending'}
      />
      <Button
        onPress={() => NavigationUtil.to('TabStackNav')}
        title={'跳转到 TabStackNav'}
      />
      <Button
        onPress={() => NavigationUtil.to('TabStackNav', {screen: 'Hot'})}
        title={'跳转到 Hot'}
      />
      <Button
        onPress={() => NavigationUtil.to('TabStackNav', {screen: 'Section'})}
        title={'跳转到 Section'}
      />
      <Button
        onPress={() =>
          NavigationUtil.to('TabStackNav', {screen: 'TabStackTopNav'})
        }
        title={'跳转到 TabStackTopNav'}
      />
      <Button
        onPress={() => NavigationUtil.replace('Login')}
        title={'重置回 Login'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default Index;

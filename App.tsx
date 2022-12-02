/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';
import {store} from './src/reducer';
import {Provider} from 'react-redux';
import Root from './src/demo/pages';

const App = () => {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={styles.wrap}>
        <NavigationContainer>
          <Root />
        </NavigationContainer>
      </GestureHandlerRootView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
  },
});

export default App;

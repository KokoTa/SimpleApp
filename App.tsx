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
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeBottomTabs from './src/page/HomeBottomTabs';
import Login from './src/page/Login';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';
import {store} from './src/reducer';
import {Provider} from 'react-redux';
import GlobalModal from './src/component/GlobalModal';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={styles.wrap}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Group>
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen
                name="HomeBottomTabs"
                component={HomeBottomTabs}
                options={{headerShown: false}}
              />
            </Stack.Group>
          </Stack.Navigator>
          <GlobalModal />
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

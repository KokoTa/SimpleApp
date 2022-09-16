import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Index from '../pages/Tabs';
import Trending from '../pages/Tabs/Trending';
import About from '../pages/Tabs/Fun/About';
import Login from '../pages/Login';
import Section from '../pages/Tabs/Fun/Section';
import Hot from '../pages/Tabs/Fun/Hot';
import Icon from 'react-native-vector-icons/AntDesign';
import NavigationUtil from './NavigationUtil';
import Desc from '../pages/Tabs/Fun/Desc';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {View} from 'react-native';

const Top = createMaterialTopTabNavigator();

const TabStackTopNav = () => {
  const safeArea = useSafeAreaInsets();
  return (
    <View style={{flex: 1, top: safeArea.top}}>
      <Top.Navigator initialRouteName="Top">
        <Top.Screen
          name="Desc"
          component={Desc}
          options={{tabBarLabel: 'Home'}}
        />
        <Top.Screen
          name="About"
          component={About}
          options={{tabBarLabel: 'Updates'}}
        />
      </Top.Navigator>
    </View>
  );
};

const TabStackNav = () =>
  NavigationUtil.createStackNav([
    {
      name: 'Hot',
      screen: Hot,
    },
    {
      name: 'Section',
      screen: Section,
    },
    {
      name: 'TabStackTopNav',
      screen: TabStackTopNav,
      options: {
        headerShown: false,
      },
    },
  ]);

const TabNav = () =>
  NavigationUtil.createBottomTabNav([
    {
      name: 'Index',
      screen: Index,
      options: {
        tabBarIcon: ({color, size}) => (
          <Icon name="home" color={color} size={size} />
        ),
      },
    },
    {
      name: 'Trending',
      screen: Trending,
      options: {
        tabBarIcon: ({color, size}) => (
          <Icon name="linechart" color={color} size={size} />
        ),
      },
    },
    {
      name: 'TabStackNav',
      screen: TabStackNav,
      options: {
        tabBarIcon: ({color, size}) => (
          <Icon name="user" color={color} size={size} />
        ),
        headerShown: false,
      },
    },
  ]);

const StackNav = () =>
  NavigationUtil.createStackNav([
    {
      name: 'Login',
      screen: Login,
      options: {
        headerShown: false,
      },
    },
    {
      name: 'TabNav',
      screen: TabNav,
      options: {
        headerShown: false,
      },
    },
  ]);

export const createApp = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  </SafeAreaProvider>
);

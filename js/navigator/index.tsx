import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Index from '../pages/Tabs';
import Trending from '../pages/Tabs/Trending';
import About from '../pages/Tabs/Fun/About';
import Login from '../pages/Login';
import Icon from 'react-native-vector-icons/AntDesign';
import NavigationUtil from './NavigationUtil';
import Desc from '../pages/Tabs/Fun/Desc';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import store from '../redux';
import Toast from 'react-native-toast-message';
import colors from '../global/colors';

const topStyles = StyleSheet.create({
  tabBarItemStyle: {
    padding: 0,
  },
  tabBarStyle: {
    backgroundColor: colors.WHITE,
  },
  tabBarIndicatorStyle: {
    backgroundColor: colors.PURPLE,
    height: 5,
  },
  tabBarLabelStyle: {
    textTransform: 'none', // 取消安卓大写
  },
});

const TabStackTopNav = () =>
  NavigationUtil.createTopNav(
    [
      {
        name: 'Desc',
        screen: Desc,
        options: {
          tabBarLabel: 'Desc',
        },
      },
      {
        name: 'About',
        screen: About,
        options: {
          tabBarLabel: 'About',
        },
      },
    ],
    {
      lazy: true,
      tabBarItemStyle: topStyles.tabBarItemStyle,
      tabBarScrollEnabled: true,
      tabBarInactiveTintColor: colors.LIGHT_PURPLE,
      tabBarActiveTintColor: colors.PURPLE,
      tabBarStyle: topStyles.tabBarStyle,
      tabBarIndicatorStyle: topStyles.tabBarIndicatorStyle,
      tabBarLabelStyle: topStyles.tabBarLabelStyle,
      safeArea: true,
    },
  );

// const TabStackNav = () =>
//   NavigationUtil.createStackNav([
//     {
//       name: 'Hot',
//       screen: Hot,
//     },
//     {
//       name: 'Section',
//       screen: Section,
//     },
//     {
//       name: 'TabStackTopNav',
//       screen: TabStackTopNav,
//       options: {
//         headerShown: false,
//       },
//     },
//   ]);

const TabNav = () =>
  NavigationUtil.createBottomTabNav(
    [
      {
        name: 'Index',
        screen: Index,
        options: {
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
          headerShown: false,
        },
      },
      {
        name: 'Trending',
        screen: Trending,
        options: {
          tabBarIcon: ({color, size}) => (
            <Icon name="linechart" color={color} size={size} />
          ),
          headerShown: false,
        },
      },
      {
        name: 'Category',
        screen: TabStackTopNav,
        options: {
          tabBarIcon: ({color, size}) => (
            <Icon name="user" color={color} size={size} />
          ),
          headerShown: false,
        },
      },
    ],
    {
      tabBarActiveTintColor: colors.PURPLE,
    },
  );

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

export const createApp = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <StackNav />
        </NavigationContainer>
      </SafeAreaProvider>
      <Toast />
    </Provider>
  );
};

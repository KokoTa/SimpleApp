import React, {useRef} from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import Index from '../pages/Tabs';
import Trending from '../pages/Tabs/Trending';
import About from '../pages/Tabs/TabTop/About';
import Login from '../pages/Login';
import Icon from 'react-native-vector-icons/AntDesign';
import NavigationUtil from './NavigationUtil';
import Desc from '../pages/Tabs/TabTop/Desc';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import store from '../redux';
import Toast from 'react-native-toast-message';
import colors from '../global/colors';
import Webview from '../pages/Tabs/Trending/Webview';
import Parallax from '../pages/Tabs/Trending/Parallax';
import RNBootSplash from 'react-native-bootsplash';
import {init, enterPage, leavePage} from '@react-native-hero/umeng-analytics';
import useAppState from '../hooks/useAppState';

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

const TabTopNav = () =>
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
        name: 'TabTop',
        screen: TabTopNav,
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
    {
      name: 'TrendingWebview',
      screen: Webview,
      options: {
        headerShown: false,
      },
    },
    {
      name: 'TrendingParallax',
      screen: Parallax,
      options: {
        headerShown: false,
      },
    },
  ]);

export function CreateApp() {
  const navigationRef = useNavigationContainerRef();
  const routeNameRef = useRef<string>('');
  // APP 状态
  console.log(useAppState());

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer
          ref={navigationRef}
          onReady={() => {
            // 记录初始路由名
            routeNameRef.current = navigationRef.getCurrentRoute()!.name;
            // 通过友盟记录页面访问
            enterPage(routeNameRef.current);

            // 初始化友盟
            init().then((deviceInfo: any) => {
              console.log('deviceId:', deviceInfo.deviceId);
              console.log('deviceType:', deviceInfo.deviceType);
              console.log('brand:', deviceInfo.brand);
              console.log('bundleId:', deviceInfo.bundleId);
            });

            // 关闭Splash
            RNBootSplash.hide();
          }}
          onStateChange={() => {
            const previousRouteName = routeNameRef.current;
            const nowRouteName = navigationRef.getCurrentRoute()!.name;
            console.log(previousRouteName, nowRouteName);
            // 监听路由变化，通过友盟记录页面访问
            if (previousRouteName !== nowRouteName) {
              leavePage(previousRouteName);
              enterPage(nowRouteName);
            }
            routeNameRef.current = nowRouteName;
          }}>
          <StackNav />
        </NavigationContainer>
      </SafeAreaProvider>
      <Toast />
    </Provider>
  );
}

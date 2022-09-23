import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {
  NavigationProp,
  StackActions,
  useNavigation,
} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import React from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

/**
 * 导航工具类
 */
export default class NavigationUtil {
  static navigation: NavigationProp<any>;

  /**
   * 跳转
   * @param name
   * @param params
   * @param navigationParam
   * @returns
   */
  static to(name: string, params?: any, navigationParam?: NavigationProp<any>) {
    const navigate = NavigationUtil.navigation || navigationParam;
    if (!navigate) {
      console.log('navigation is null');
      return;
    }
    navigate.navigate(name, params);
  }

  /**
   * 返回
   * @param navigationParam
   */
  static back(navigationParam?: NavigationProp<any>) {
    const navigate = NavigationUtil.navigation || navigationParam;
    if (!navigate) {
      console.log('navigation is null');
      return;
    }
    navigate.goBack();
  }

  /**
   * 替换
   * @param name
   * @param params
   * @param navigationParam
   * @returns
   */
  static replace(
    name: string,
    params?: any,
    navigationParam?: NavigationProp<any>,
  ) {
    const navigate = NavigationUtil.navigation || navigationParam;
    if (!navigate) {
      console.log('navigation is null');
      return;
    }
    navigate.dispatch(StackActions.replace(name, params));
  }

  /**
   * 生成堆栈导航
   * @param stackInfos
   * @param screenOptions
   * @returns
   */
  static createStackNav = (
    stackInfos: StackInfo[],
    screenOptions?: NativeStackNavigationOptions,
  ) => {
    const Stack = createNativeStackNavigator();
    this.navigation = useNavigation();
    return (
      <Stack.Navigator screenOptions={screenOptions}>
        {stackInfos.map(({name, screen, options}) => (
          <Stack.Screen
            key={name}
            name={name}
            component={screen}
            options={options}
          />
        ))}
      </Stack.Navigator>
    );
  };

  /**
   * 生成底部导航
   * @param tabInfos
   * @param screenOptions
   * @returns
   */
  static createBottomTabNav = (
    tabInfos: TabInfo[],
    screenOptions?: BottomTabNavigationOptions,
  ) => {
    const Tab = createBottomTabNavigator();
    this.navigation = useNavigation();
    return (
      <Tab.Navigator screenOptions={screenOptions}>
        {tabInfos.map(({name, screen, options}) => (
          <Tab.Screen
            key={name}
            name={name}
            component={screen}
            options={options}
          />
        ))}
      </Tab.Navigator>
    );
  };

  /**
   * 生成顶部导航
   * @param topInfos
   * @returns
   */
  static createTopNav = (
    topInfos: TopInfo[],
    screenOptions?: TopNavigationOptions,
  ) => {
    const Top = createMaterialTopTabNavigator();
    const safeArea = useSafeAreaInsets();
    this.navigation = useNavigation();
    const wrapStyle = {
      flex: 1,
      top: screenOptions?.safeArea ? safeArea.top : 0,
    };
    return (
      <View style={wrapStyle}>
        <Top.Navigator screenOptions={screenOptions}>
          {topInfos.map(({name, screen, options}) => (
            <Top.Screen
              key={name}
              name={name}
              component={screen}
              options={options}
            />
          ))}
        </Top.Navigator>
      </View>
    );
  };
}

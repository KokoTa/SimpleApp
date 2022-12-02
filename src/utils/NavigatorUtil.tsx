import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {
  NavigationProp,
  ParamListBase,
  RouteProp,
  StackActions,
  useNavigation,
} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import React from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Colors from '../styles/Colors';

/**
 * 导航工具类
 */
export default class NavigationUtil {
  static navigation: NavigationProp<any>;

  /**
   * 跳转
   * @param name
   * @param params
   * @param merge
   * @param navigationParam
   * @returns
   */
  static to(
    name: string,
    params?: any,
    merge?: boolean,
    navigationParam?: NavigationProp<any> | null,
  ) {
    const navigate = NavigationUtil.navigation || navigationParam;
    if (!navigate) {
      console.log('navigation is null');
      return;
    }
    if (!merge) {
      navigate.navigate(name, params);
    } else {
      navigate.navigate({name, params, merge});
    }
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
    screenOptions?: StackNavigationOptions,
    otherScreenAttribute = {},
  ) => {
    const Stack = createStackNavigator();
    this.navigation = useNavigation();
    return (
      <Stack.Navigator screenOptions={screenOptions} {...otherScreenAttribute}>
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
    screenOptions?:
      | BottomTabNavigationOptions
      | ((props: {
          route: RouteProp<ParamListBase>;
          navigation: any;
        }) => BottomTabNavigationOptions),
    otherScreenAttribute = {},
  ) => {
    const Tab = createBottomTabNavigator();
    this.navigation = useNavigation();
    return (
      <Tab.Navigator screenOptions={screenOptions} {...otherScreenAttribute}>
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
    otherScreenAttribute = {},
  ) => {
    const Top = createMaterialTopTabNavigator();
    const safeArea = useSafeAreaInsets();
    this.navigation = useNavigation();
    const wrapStyle = {
      flex: 1,
    };
    const blockStyle = {
      height: screenOptions?.safeArea ? safeArea.top : 0,
      backgroundColor: screenOptions?.safeAreaBackgroundColor || Colors.White,
    };
    return (
      <View style={wrapStyle}>
        <View style={blockStyle} />
        <Top.Navigator screenOptions={screenOptions} {...otherScreenAttribute}>
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

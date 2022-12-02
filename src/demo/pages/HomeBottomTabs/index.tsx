import React from 'react';
import Home from './Home';
import TrendingTopTabs from './TrendingTopTabs';
import Icon from 'react-native-vector-icons/AntDesign';
import NavigationUtil from '../../../utils/NavigatorUtil';

const BottomTabRoutes = () =>
  NavigationUtil.createBottomTabNav(
    [
      {
        name: 'Home',
        screen: Home,
      },
      {
        name: 'TrendingTopTabs',
        screen: TrendingTopTabs,
        options: {
          headerShown: false,
        },
      },
    ],
    ({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName = '';

        if (route.name === 'Home') {
          iconName = focused ? 'apple1' : 'apple-o';
        }
        if (route.name === 'TrendingTopTabs') {
          iconName = focused ? 'aliwangwang' : 'aliwangwang-o1';
        }
        if (route.name === 'AccountStack') {
          iconName = focused ? 'minuscircle' : 'minuscircleo';
        }

        return <Icon name={iconName} size={size} color={color} />;
      },
    }),
  );

function IndexBottomTabs() {
  return <BottomTabRoutes />;
}

export default IndexBottomTabs;

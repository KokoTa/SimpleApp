import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from './Home';
import TrendingTopTabs from './TrendingTopTabs';
import Account from './Account';
import Icon from 'react-native-vector-icons/AntDesign';

const BottomTab = createBottomTabNavigator();

function IndexBottomTabs() {
  return (
    <BottomTab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName = '';

          if (route.name === 'Home') {
            iconName = focused ? 'apple1' : 'apple-o';
          }
          if (route.name === 'TrendingTopTabs') {
            iconName = focused ? 'aliwangwang' : 'aliwangwang-o1';
          }
          if (route.name === 'Account') {
            iconName = focused ? 'minuscircle' : 'minuscircleo';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}>
      <BottomTab.Screen name="Home" component={Home} />
      <BottomTab.Screen
        name="TrendingTopTabs"
        component={TrendingTopTabs}
        options={{headerShown: false}}
      />
      <BottomTab.Screen name="Account" component={Account} />
    </BottomTab.Navigator>
  );
}

export default IndexBottomTabs;

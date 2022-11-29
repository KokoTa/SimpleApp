import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from './Home';
import TrendingTopTabs from './TrendingTopTabs';
import Account from './Account';

const BottomTab = createBottomTabNavigator();

function IndexBottomTabs() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Home" component={Home} />
      <BottomTab.Screen name="TrendingTopTabs" component={TrendingTopTabs} />
      <BottomTab.Screen name="Account" component={Account} />
    </BottomTab.Navigator>
  );
}

export default IndexBottomTabs;

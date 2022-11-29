import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import TrendingCount from './TrendingCount';
import TrendingHot from './TrendingHot';
import TrendingTop from './TrendingTop';

const TopTab = createMaterialTopTabNavigator();

function Trending() {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="TrendingTop" component={TrendingTop} />
      <TopTab.Screen name="TrendingHot" component={TrendingHot} />
      <TopTab.Screen name="TrendingCount" component={TrendingCount} />
    </TopTab.Navigator>
  );
}

export default Trending;

import React from 'react';
import NavigationUtil from '../../../../utils/NavigatorUtil';
import TrendingCount from './TrendingCount';
import TrendingHot from './TrendingHot';
import TrendingTop from './TrendingTop';

const TopTabRoues = () =>
  NavigationUtil.createTopNav(
    [
      {
        name: 'TrendingTop',
        screen: TrendingTop,
      },
      {
        name: 'TrendingHot',
        screen: TrendingHot,
      },
      {
        name: 'TrendingCount',
        screen: TrendingCount,
      },
    ],
    {
      tabBarLabelStyle: {
        textTransform: 'none',
      },
      lazy: true,
      safeArea: true,
    },
  );

function Trending() {
  return <TopTabRoues />;
}

export default Trending;

import React from 'react';
import NavigationUtil from '../../utils/NavigatorUtil';
import HomeBottomTabs from './HomeBottomTabs';
import Login from './Login';
import Webview from './Webview';

const StackRoutes = () =>
  NavigationUtil.createStackNav([
    {
      name: 'Login',
      screen: Login,
    },
    {
      name: 'HomeBottomTabs',
      screen: HomeBottomTabs,
      options: {
        headerShown: false,
      },
    },
    {
      name: 'Webview',
      screen: Webview,
    },
  ]);

function Root() {
  return <StackRoutes />;
}

export default Root;

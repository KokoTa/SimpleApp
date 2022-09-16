import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import React from 'react';

declare global {
  interface TabInfo {
    name: string;
    screen: React.FC;
    options?: BottomTabNavigationOptions;
  }
  interface StackInfo {
    name: string;
    screen: React.FC;
    options?: NativeStackNavigationOptions;
  }
}

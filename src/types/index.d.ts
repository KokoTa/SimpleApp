import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import {MaterialTopTabNavigationOptions} from '@react-navigation/material-top-tabs';

declare global {
  interface TabInfo {
    name: string;
    screen: React.FC;
    options?: BottomTabNavigationOptions;
  }
  interface StackInfo {
    name: string;
    screen: React.FC;
    options?: StackNavigationOptions;
  }
  interface TopInfo {
    name: string;
    screen: React.FC;
    options?: MaterialTopTabNavigationOptions;
  }
  interface TopNavigationOptions extends MaterialTopTabNavigationOptions {
    safeArea?: boolean;
    safeAreaBackgroundColor?: string;
  }
  interface ActionType {
    type: string;
    data: any;
  }
}

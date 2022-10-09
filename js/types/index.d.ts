import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import {MaterialTopTabNavigationOptions} from '@react-navigation/material-top-tabs';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {CheckBoxProps} from '@rneui/themed';

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
  interface TopInfo {
    name: string;
    screen: React.FC;
    options?: MaterialTopTabNavigationOptions;
  }
  interface TopNavigationOptions extends MaterialTopTabNavigationOptions {
    safeArea?: boolean;
  }
  interface ActionType {
    type: string;
    data: any;
  }
  interface CheckBoxGroupItem extends CheckBoxProps {
    value: any;
    checked: boolean;
  }
}

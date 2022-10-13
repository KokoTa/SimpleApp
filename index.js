/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import HotPush from './js/utils/HotPush';

AppRegistry.registerComponent(appName, () => HotPush);

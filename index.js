/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {createApp as App} from './js/navigator/index';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

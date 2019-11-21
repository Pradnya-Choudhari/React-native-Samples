/**
 * @format
 */

import {AppRegistry, YellowBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

YellowBox.ignoreWarnings([
    'VirtualizedLists should never be nested inside plain ScrollViews with the same orientation - use another VirtualizedList-backed container instead', 
    'Warning: DatePickerAndroid has been merged with DatePickerIOS and will be removed in a future release',
    'Warning: componentWillMount has been renamed, and is not recommended for use', 
    'Warning: componentWillReceiveProps has been renamed, and is not recommended for use', 
    'Module RCTImageLoader']);
AppRegistry.registerComponent(appName, () => App);

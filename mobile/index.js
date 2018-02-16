// import 'haul/hot/patch';
// import {
//   makeHot,
//   tryUpdateSelf,
//   callOnce,
//   clearCacheFor,
//   redraw
// } from 'haul/hot';

import React from 'react';

import { AppRegistry } from 'react-native';
import App from './App';

import { Provider } from 'react-redux';

import store from './store';

const AppRedux = () => <Provider store={store}><App /></Provider>

AppRegistry.registerComponent('mobile', () => AppRedux);


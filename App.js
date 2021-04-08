import React, {useEffect, Component} from 'react';
import {LogBox} from 'react-native';
import Navigator from './src/Navigation/Navigaton';
LogBox.ignoreAllLogs();

const App = () => {
  return <Navigator />;
};
export default App;

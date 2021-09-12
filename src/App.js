import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Router from '../src/router';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default App;

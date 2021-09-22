import React from 'react';
import FlashMessage from 'react-native-flash-message';
import {NavigationContainer} from '@react-navigation/native';
import {Provider, useSelector} from 'react-redux';

import Router from '../src/router';
import store from './redux/store';
import {Loading} from './components';

const MainApp = () => {
  const {isLoading} = useSelector(state => state.mitraReducer);
  return (
    <NavigationContainer>
      <Router />
      {isLoading && <Loading />}
      <FlashMessage position="Top" />
    </NavigationContainer>
  );
};
const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

export default App;

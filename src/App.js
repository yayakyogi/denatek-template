import React from 'react';
import Router from '../src/router';
import {NavigationContainer} from '@react-navigation/native';
import {Provider, useSelector} from 'react-redux';
import store from './redux/store';
import {Loading} from './components';

const MainApp = () => {
  const {isLoading} = useSelector(state => state.mitraReducer);
  return (
    <NavigationContainer>
      <Router />
      {isLoading && <Loading />}
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

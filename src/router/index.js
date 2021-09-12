import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// impor halaman dari folder pages
import {Splash, Login} from '../pages';
const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      {/* halaman splash screen */}
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      {/* halaman login */}
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;

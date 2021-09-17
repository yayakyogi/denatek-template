import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// halaman
import {
  Splash,
  Login,
  MitraDashboard,
  MitraProfile,
  MitraCheckIn,
  MitraCheckOut,
  MitraVisitDetail,
} from '../pages';
import {BottomTab} from '../components';
import {colors, fonts} from '../utils';

// variabel untuk menentukan route
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomTab {...props} />}>
      <Tab.Screen
        name="Dashboard"
        component={MitraDashboard}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={MitraProfile}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
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
      {/* halaman dashboard */}
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      {/* halaman checkIn */}
      <Stack.Screen
        name="MitraCheckIn"
        component={MitraCheckIn}
        options={{
          title: 'Absen Pagi',
          headerStyle: {backgroundColor: colors.secondary},
          headerTintColor: colors.normal,
          headerTitleStyle: {fontFamily: fonts.primary.SMB},
        }}
      />
      {/* halaman checkOut */}
      <Stack.Screen
        name="MitraCheckOut"
        component={MitraCheckOut}
        options={{
          title: 'Absen Pulang',
          headerStyle: {backgroundColor: colors.secondary},
          headerTintColor: colors.normal,
          headerTitleStyle: {fontFamily: fonts.primary.SMB},
        }}
      />
      {/* halaman mitraVisitDetail */}
      <Stack.Screen
        name="MitraVisitDetail"
        component={MitraVisitDetail}
        options={{
          title: 'Detail Kunjungan',
          headerStyle: {backgroundColor: colors.secondary},
          headerTintColor: colors.normal,
          headerTitleStyle: {fontFamily: fonts.primary.SMB},
        }}
      />
    </Stack.Navigator>
  );
};

export default Router;

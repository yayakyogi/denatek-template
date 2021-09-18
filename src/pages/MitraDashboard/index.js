import React from 'react';
import {StyleSheet, View, ScrollView, useColorScheme} from 'react-native';

import {colors, darkMode} from '../../utils';
import {MenuDashboard} from '../../components';

const MitraDashboard = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark'; // set darkMode
  return (
    <View style={styles.container}>
      <View style={[styles.wrapper, darkMode(isDarkMode)]}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainer={styles.scrollview}>
          <MenuDashboard
            isDarkMode={isDarkMode} // props untuk menentukan apakah tema hp dark atau light untuk mengganti icon detail kunjungan
            darkMode={darkMode(isDarkMode)} // props untuk merubah background dan warna text saat darkMode
            title="Dashboard Marketer"
            id="anJAk909a"
            onPressCheckIn={() => {
              navigation.navigate('MitraCheckIn'); // tombol checkin atau absen pagi
            }}
            onPressCheckOut={() => {
              navigation.navigate('MitraCheckOut'); // tombol checkout atau absen pulang
            }}
            onPressLaporan={() => {
              navigation.navigate('MitraSendReport'); // tombol laporan
            }}
            onPressStatus={() => {}} // tombol set status
            onPressDetail={() => {
              navigation.navigate('CanvaserVisitDetail'); // tombol detail kunjungan
            }}
            onPressAddMitra={() => {
              navigation.navigate('CanvaserAddMitra'); // tombol menambah mitras
            }}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default MitraDashboard;

const styles = StyleSheet.create({
  scrollview: {flexGrow: 1},
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  wrapper: {
    flex: 1,
    paddingVertical: 25,
    paddingHorizontal: 32,
    backgroundColor: colors.normal,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});

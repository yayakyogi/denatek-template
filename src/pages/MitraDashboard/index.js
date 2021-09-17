import React from 'react';
import {StyleSheet, View, ScrollView, useColorScheme} from 'react-native';

import {colors} from '../../utils';
import {MenuDashboard} from '../../components';

const MitraDashboard = ({navigation}) => {
  // set darkMode
  const isDarkMode = useColorScheme() === 'dark';
  const darkMode = {
    backgroundColor: isDarkMode
      ? colors.dark.background
      : colors.light.background,
    color: isDarkMode ? colors.dark.text : colors.light.text,
  };

  return (
    <View style={styles.container}>
      <View style={[styles.wrapper, darkMode]}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainer={styles.scrollview}>
          <MenuDashboard
            isDarkMode={isDarkMode} // props untuk menentukan apakah tema hp dark atau light untuk mengganti icon detail kunjungan
            darkMode={darkMode} // props untuk merubah background dan warna text saat darkMode
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
              navigation.navigate('MitraVisitDetail'); // tombol detail kunjungan
            }}
            onPressAddMitra={() => {}} // tombol menambah mitra
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

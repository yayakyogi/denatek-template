import React from 'react';
import {View} from 'react-native';

import {TitleDashboard} from '../../atom';
import {MenuFlex} from '../../molekul';
import {
  ILCheckIn,
  ILCheckOut,
  ILSetStatus,
  ILDetailKunjungan,
  ILKirimLaporan,
  ILMitraBaru,
  ILDetailKunjunganDark,
} from '../../../assets';

const MenuDashboard = ({
  title,
  id,
  onPressCheckIn,
  onPressCheckOut,
  onPressLaporan,
  onPressStatus,
  onPressDetail,
  onPressAddMitra,
  darkMode, // props untuk merubah warna background dan text
  isDarkMode, // props untuk menentukan tema bawaan hp dark atau light
}) => {
  return (
    <View>
      <TitleDashboard title={title} id={id} darkMode={darkMode} />
      {/* menu 1 */}
      <MenuFlex
        // menu sebelah kiri
        titleLeft="Check In"
        iconLeft={ILCheckIn}
        onPressMenuLeft={onPressCheckIn}
        // menu sebelah kanan
        titleRight="Status Berangkat"
        iconRight={ILSetStatus}
        onPressMenuRight={onPressStatus}
      />
      {/* Menu 2 */}
      <MenuFlex
        // menu sebelah kiri
        titleLeft="Detail Kunjungan"
        iconLeft={isDarkMode ? ILDetailKunjunganDark : ILDetailKunjungan}
        onPressMenuLeft={onPressStatus}
        // menu sebelah kanan
        titleRight="Kirim Laporan"
        iconRight={ILKirimLaporan}
        onPressMenuRight={onPressLaporan}
      />
      {/* Menu 3 */}
      <MenuFlex
        // menu sebelah kiri
        titleLeft="Tambah Mitra"
        iconLeft={ILMitraBaru}
        onPressMenuLeft={onPressAddMitra}
        // menu sebelah kanan
        titleRight="Check Out"
        iconRight={ILCheckOut}
        onPressMenuRight={onPressCheckOut}
      />
    </View>
  );
};

export default MenuDashboard;

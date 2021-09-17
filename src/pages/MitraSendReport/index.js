import React from 'react';
import {StyleSheet, Text, View, useColorScheme} from 'react-native';

import {colors} from '../../utils';
import {MenuFlex, Announce, Gap} from '../../components';
import {ILProdukTerjual, ILProdukToko, ILSisaProduk} from '../../assets';

const MitraSendReport = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const darkMode = {
    backgroundColor: isDarkMode
      ? colors.dark.background
      : colors.light.background,
    color: isDarkMode ? colors.dark.text : colors.light.text,
    borderColor: isDarkMode ? colors.dark.border : colors.light.border,
  };
  return (
    <View style={[styles.container, darkMode]}>
      <Announce message="Pilih menu laporan yang akan anda kirim" />
      <Gap height={25} />
      <MenuFlex
        titleLeft="Produk Terjual"
        iconLeft={ILProdukTerjual}
        onPressMenuLeft={() => {}}
        titleRight="Produk Terjual"
        iconRight={ILProdukToko}
        onPressMenuRight={() => {}}
      />
      <MenuFlex
        titleLeft="Sisa Produk"
        iconLeft={ILSisaProduk}
        onPressMenuLeft={() => {}}
        titleRight=""
      />
    </View>
  );
};

export default MitraSendReport;

const styles = StyleSheet.create({
  container: {flex: 1, paddingVertical: 25, paddingHorizontal: 32},
});

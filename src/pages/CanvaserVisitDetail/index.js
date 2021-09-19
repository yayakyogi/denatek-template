import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  useColorScheme,
  StatusBar,
} from 'react-native';

import {darkMode, statusBarDark, colors} from '../../utils';
import {
  Announce,
  Gap,
  PhotoForm,
  TextInput,
  Line,
  Button,
} from '../../components';

const CanvaserVisitdetail = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={[styles.container, darkMode(isDarkMode)]}>
      <ScrollView
        style={styles.scrollview}
        showsVerticalScrollIndicator={false}>
        <StatusBar
          backgroundColor={statusBarDark(isDarkMode).backgroundColor}
        />
        <Announce message="Kirim detail kunjungan serta swafoto di depan toko dan produk di etalase" />
        <Gap height={20} />
        <PhotoForm
          image=""
          label="Foto Toko"
          darkMode={darkMode(isDarkMode)}
          onPress={() => {}}
          onDelete={() => {}}
        />
        <Gap height={10} />
        <PhotoForm
          image=""
          label="Foto Produk"
          darkMode={darkMode(isDarkMode)}
          onPress={() => {}}
          onDelete={() => {}}
        />
        <Gap height={30} />
        <Line height={1.5} color={colors.primary} />
        <Gap height={20} />
        <TextInput
          label="Produk Terjual"
          darkMode={darkMode(isDarkMode)}
          value=""
          placeholder="Jumlah produk yang sudah terjual"
        />
        <Gap height={10} />
        <TextInput
          label="Laporan Penjualan"
          darkMode={darkMode(isDarkMode)}
          value=""
          placeholder="Laporan jumlah penjualan mitra"
        />
        <Gap height={10} />
        <TextInput
          label="Catatan"
          darkMode={darkMode(isDarkMode)}
          value=""
          placeholder="Masukkan catatan untuk toko"
        />
        <Gap height={15} />
      </ScrollView>
      <View style={styles.btnView}>
        <Button title="SIMPAN" />
      </View>
    </View>
  );
};

export default CanvaserVisitdetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    paddingTop: 25,
    paddingBottom: 15,
  },
  scrollview: {flexGrow: 1},
});

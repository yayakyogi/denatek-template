import React from 'react';
import {StyleSheet, View, useColorScheme, ScrollView} from 'react-native';

import {colors} from '../../utils';
import {
  TextInput,
  Gap,
  ButtonList,
  Button,
  PhotoAddMitra,
} from '../../components';

const CanvaserAddMitra = () => {
  // variabel untuk menentukan apakah tema hp dalam mode darkMode
  const isDarkMode = useColorScheme() === 'dark';
  const darkMode = {
    backgroundColor: isDarkMode
      ? colors.dark.background
      : colors.light.background,
    color: isDarkMode ? colors.dark.text : colors.light.text,
    borderColor: isDarkMode ? colors.dark.border : colors.light.border,
  };
  const margin = 10; // variabel untuk memberikan jarak antar textInput
  return (
    <View style={[styles.container, darkMode]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollview}>
        <View style={styles.wrapper}>
          {/* list kategori toko */}
          <ButtonList label="Kategori Toko" value="" darkMode={darkMode} />
          <Gap height={margin} />

          {/* nama toko */}
          <TextInput
            label="Nama Toko"
            placeholder="Masukkan nama toko"
            darkMode={darkMode}
          />
          <Gap height={margin} />

          {/* alamat toko */}
          <TextInput
            label="Alamat Toko"
            placeholder="Masukkan alamat lengkap"
            darkMode={darkMode}
          />
          <Gap height={margin} />

          {/* nomor telepon */}
          <TextInput
            label="Nomor Telepon"
            placeholder="Masukkan nomor telepon aktif"
            darkMode={darkMode}
            keyboardType="number-pad"
          />
          <Gap height={margin} />

          {/* kode area */}
          <TextInput
            label="Kode Area"
            placeholder="Masukkan kode area"
            darkMode={darkMode}
          />
          <Gap height={margin} />

          {/* tambah foto tampak luar */}
          <PhotoAddMitra darkMode={darkMode} label="Foto Tampak Luar" />
          <Gap height={margin} />

          {/* tambah foto tampak dalam */}
          <PhotoAddMitra darkMode={darkMode} label="Foto Tampak Dalam" />
          <Gap height={20} />
        </View>
      </ScrollView>
      <View style={[styles.btnView, darkMode]}>
        <Button title="Simpan" />
      </View>
    </View>
  );
};

export default CanvaserAddMitra;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 10,
  },
  wrapper: {paddingHorizontal: 32},
  scrollview: {flexGrow: 1},
  btnView: {borderTopWidth: 0.9, paddingHorizontal: 32},
});

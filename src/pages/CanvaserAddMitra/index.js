import React from 'react';
import {StyleSheet, View, useColorScheme, ScrollView} from 'react-native';

import {colors} from '../../utils';
import {TextInput, Gap, ButtonList, Button} from '../../components';

const CanvaserAddMitra = () => {
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
        <Button title="Simpan" />
      </ScrollView>
    </View>
  );
};

export default CanvaserAddMitra;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    paddingBottom: 20,
  },
  scrollview: {flexGrow: 1},
});

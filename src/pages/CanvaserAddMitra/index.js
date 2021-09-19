import React, {useState} from 'react';
import {StyleSheet, View, useColorScheme, ScrollView} from 'react-native';

import {colors} from '../../utils';
import {
  TextInput,
  Gap,
  ButtonList,
  Button,
  PhotoForm,
  Announce,
  Line,
} from '../../components';

const CanvaserAddMitra = () => {
  const [imageOut, setImageOut] = useState(''); // state untuk menampung foto tampak luar
  const [imageIn, setImageIn] = useState(''); // state untuk menampung foto tampak dalam
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
        {/* <View style={styles.wrapper}> */}
        <Gap height={25} />
        <Announce message="Kirim data dari mitra serta swafoto di depan dan dalam toko" />
        <Gap height={20} />
        {/* tambah foto tampak luar */}
        <PhotoForm
          darkMode={darkMode}
          label="Foto Tampak Luar"
          image={imageOut}
          onPress={() => {}}
          onDelete={() => {}}
        />
        <Gap height={margin} />

        {/* tambah foto tampak dalam */}
        <PhotoForm
          darkMode={darkMode}
          label="Foto Tampak Dalam"
          image={imageIn}
          onPress={() => {}}
          onDelete={() => {}}
        />
        <Gap height={20} />
        <Line height={2} color={colors.primary} />
        <Gap height={20} />
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
        {/* </View> */}
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
    paddingHorizontal: 32,
  },
  // wrapper: {paddingHorizontal: 32},
  scrollview: {flexGrow: 1},
});

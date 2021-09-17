import React, {useState} from 'react';
import {StyleSheet, ScrollView, useColorScheme} from 'react-native';

import {colors} from '../../utils';
import {ILApp} from '../../assets';
import {MenuVisitDetail} from '../../components';

const CanvaserVisitdetail = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const darkMode = {
    backgroundColor: isDarkMode
      ? colors.dark.background
      : colors.light.background,
    color: isDarkMode ? colors.dark.text : colors.light.text,
    borderColor: isDarkMode ? colors.dark.border : colors.light.border,
  };

  const [images, setImages] = useState('');
  return (
    <ScrollView
      style={[styles.container, darkMode]}
      showsVerticalScrollIndicator={false}>
      <MenuVisitDetail
        image={images} // kirim gambar ke component
        darkMode={darkMode} // kirim style darkMode ke component
        onCapture={() => {}} // tombol untuk mengambi gambar
        onDelete={() => {}} // tombol untuk menghapus gambar
        value="" // value dari textInput catatan toko
        onChangeText={() => {}} // untuk menyimpan setiap pergantian text
        onSave={() => {}} // tombol untuk menyimpan data detail kunjungan
      />
    </ScrollView>
  );
};

export default CanvaserVisitdetail;

const styles = StyleSheet.create({
  container: {flexGrow: 1},
});

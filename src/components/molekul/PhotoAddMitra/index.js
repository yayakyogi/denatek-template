import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import {colors, fonts} from '../../../utils';

const PhotoAddMitra = ({image, label, darkMode, onPress}) => {
  return (
    <>
      <Text style={[styles.label, darkMode]}>{label}</Text>
      {image ? (
        // jika ada gambar tampilkan gambar tersebut
        <></>
      ) : (
        // jika tidak tampilkan tombol untuk mengupload gambar
        <TouchableOpacity onPress={onPress} style={[styles.button, darkMode]}>
          <View style={styles.placeholder(darkMode)}>
            <Text style={styles.text(darkMode)}>Ambil foto</Text>
          </View>
          <Text style={[styles.msg, darkMode]}>
            *Belum ada foto yang dipilih
          </Text>
        </TouchableOpacity>
      )}
    </>
  );
};

export default PhotoAddMitra;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontFamily: fonts.primary.REG,
    marginBottom: 6,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  placeholder: darkMode => ({
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: darkMode ? colors.dark.border : colors.light.mode,
    backgroundColor: darkMode ? colors.primary : colors.disable,
    width: 110,
    paddingVertical: 5,
  }),
  text: darkMode => ({
    fontSize: 12,
    fontFamily: fonts.primary.SMB,
    textAlign: 'center',
    color: darkMode ? colors.text.normal : colors.text.primary,
  }),
  msg: {fontSize: 10, fontFamily: fonts.primary.REG},
});

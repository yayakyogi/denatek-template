import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

import {ILGetGalery, ICButtonDel} from '../../../assets';
import {colors, fonts} from '../../../utils';

const PhotoLaporan = ({image, onDelete, onCapture}) => {
  return (
    <View style={styles.container}>
      {image ? (
        <View style={styles.photoNotNull}>
          <Image source={image} style={styles.images} />
          <TouchableOpacity style={styles.btnDel} onPress={onDelete}>
            <ICButtonDel />
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <TouchableOpacity style={styles.photoNull} onPress={onCapture}>
            <Image source={ILGetGalery} style={styles.img} />
            <Text style={styles.text}>Ambil foto selfie</Text>
          </TouchableOpacity>
          <Text style={styles.warning}>
            Usahakan orientasi foto diambil secara landscape
          </Text>
        </>
      )}
    </View>
  );
};

export default PhotoLaporan;

const styles = StyleSheet.create({
  container: {alignItems: 'center', marginTop: 30},
  photoNull: {
    borderWidth: 1,
    borderColor: colors.primary,
    width: 180,
    height: 150,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.button.menu.background,
  },
  img: {width: 100, height: 100},
  text: {
    fontSize: 12,
    fontFamily: fonts.primary.BLD,
    color: colors.primary,
  },
  warning: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 14,
    fontFamily: fonts.primary.SMB,
    color: colors.text.danger,
  },
  photoNotNull: {alignItems: 'center', position: 'relative'},
  images: {width: 300, height: 150},
  btnDel: {position: 'absolute', top: 0, right: 0},
});

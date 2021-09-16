import React from 'react';
import {StyleSheet, Image, View, TouchableOpacity} from 'react-native';

import {colors} from '../../../utils';
import {ILUserDefault, ICButtonAdd, ICButtonDel} from '../../../assets';

const PhotoAbsent = ({image, onPressAdd, onPressDel}) => {
  console.log(image);
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        {image ? (
          // jika ada gambar
          <>
            <Image source={image} style={styles.img} />
            <TouchableOpacity onPress={onPressAdd} style={styles.btnAdd}>
              <ICButtonDel />
            </TouchableOpacity>
          </>
        ) : (
          // jika tidak ada gambar
          <>
            <Image source={ILUserDefault} style={styles.img} />
            <TouchableOpacity onPress={onPressDel} style={styles.btnAdd}>
              <ICButtonAdd />
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};

export default PhotoAbsent;

const styles = StyleSheet.create({
  container: {
    marginVertical: 40,
    alignItems: 'center',
  },
  wrapper: {
    width: 170,
    height: 170,
    borderWidth: 1,
    borderRadius: 170 / 2,
    borderColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  img: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    borderWidth: 0.1,
    borderColor: colors.primary,
  },
  btnAdd: {
    position: 'absolute',
    bottom: 0,
    right: 10,
  },
});

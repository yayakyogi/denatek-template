import React from 'react';
import {StyleSheet, Image, View, TouchableOpacity} from 'react-native';

import {colors} from '../../../utils';
import {ILUserDefault, ICButtonAdd, ICButtonDel} from '../../../assets';

const PhotoAbsent = ({image, onPressAdd, onPressDel}) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        {image ? (
          // jika ada gambar
          <>
            <Image source={{uri: image}} style={styles.img} />
            <TouchableOpacity onPress={onPressDel} style={styles.btnAdd}>
              <ICButtonDel />
            </TouchableOpacity>
          </>
        ) : (
          // jika tidak ada gambar
          <>
            <Image source={ILUserDefault} style={styles.img} />
            <TouchableOpacity onPress={onPressAdd} style={styles.btnAdd}>
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
    marginTop: 40,
    alignItems: 'center',
  },
  wrapper: {
    width: 180,
    height: 180,
    borderWidth: 1,
    borderRadius: 180 / 2,
    borderColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  img: {
    width: 160,
    height: 160,
    borderRadius: 160 / 2,
    borderWidth: 0.1,
    borderColor: colors.primary,
  },
  btnAdd: {
    position: 'absolute',
    bottom: 0,
    right: 10,
  },
});

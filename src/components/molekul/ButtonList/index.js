import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import {fonts, colors} from '../../../utils';
import {ICSortDown, ICSortDownDark} from '../../../assets';

const ButtonList = ({label, value, onPress, darkMode}) => {
  return (
    <>
      <Text style={[styles.label, darkMode]}>{label}</Text>
      <TouchableOpacity
        style={[styles.buttonList, darkMode]}
        onPress={onPress}
        activeOpacity={0.5}>
        {value ? (
          <Text style={[styles.valueNotNull, darkMode]}>{value}</Text>
        ) : (
          <Text style={styles.valueNull}>Pilih kategori toko</Text>
        )}
        {darkMode ? <ICSortDownDark /> : <ICSortDown />}
      </TouchableOpacity>
    </>
  );
};

export default ButtonList;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontFamily: fonts.primary.REG,
    marginBottom: 6,
    marginTop: 24,
  },
  buttonList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 15,
    borderRadius: 10,
  },
  valueNotNull: {
    fontSize: 15,
    fontFamily: fonts.primary.REG,
  },
  valueNull: {
    fontSize: 15,
    fontFamily: fonts.primary.MED,
    color: colors.text.secondary,
  },
});

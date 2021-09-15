import React from 'react';
import {StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

import {colors, fonts} from '../../../utils';

const ButtonMenu = ({icon, title, onPress}) => {
  return (
    <TouchableOpacity style={styles.buttonMenu} onPress={onPress}>
      <Image source={icon} style={styles.iconImg} />
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonMenu;

const styles = StyleSheet.create({
  buttonMenu: {
    width: 150,
    height: 150,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.button.menu.background,
  },
  iconImg: {width: 75, height: 75},
  buttonText: {
    fontSize: 13,
    fontFamily: fonts.primary.BLK,
    color: colors.button.menu.text,
    marginTop: 10,
  },
});

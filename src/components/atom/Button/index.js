import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import {colors, fonts} from '../../../utils';

const Button = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    width: '100%',
    borderRadius: 10,
    backgroundColor: colors.button.primary.background,
    alignItems: 'center',
    marginTop: 20,
  },
  btnText: {
    fontSize: 18,
    fontFamily: fonts.primary.SMB,
    color: colors.button.primary.text,
  },
});

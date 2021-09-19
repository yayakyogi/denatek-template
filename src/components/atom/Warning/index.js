import React from 'react';
import {StyleSheet, Text} from 'react-native';

import {fonts} from '../../../utils';
const Warning = ({message, color}) => {
  return <Text style={styles.message(color)}>{message}</Text>;
};

export default Warning;

const styles = StyleSheet.create({
  message: color => ({
    fontSize: 10,
    fontFamily: fonts.primary.SMB,
    color: color,
  }),
});

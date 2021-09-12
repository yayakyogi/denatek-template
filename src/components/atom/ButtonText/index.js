import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import {fonts} from '../../../utils';

const ButtonText = ({onPress, labelDark, text}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.showpassword}>
      <Text style={[styles.showpasswordtext, labelDark]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonText;

const styles = StyleSheet.create({
  showpassword: {position: 'absolute', right: 10, bottom: -25},
  showpasswordtext: {fontSize: 12, fontFamily: fonts.primary.MED},
});

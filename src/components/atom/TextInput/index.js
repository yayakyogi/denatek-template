import React from 'react';
import {StyleSheet, Text, TextInput as InputText} from 'react-native';

import {fonts} from '../../../utils';

const TextInput = ({label, darkTheme, ...props}) => {
  return (
    <>
      <Text style={[styles.label, darkTheme]}>{label}</Text>
      <InputText {...props} style={[styles.textinput, darkTheme]} />
    </>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontFamily: fonts.primary.REG,
    marginBottom: 6,
    marginTop: 24,
  },
  textinput: {borderWidth: 1, padding: 12, borderRadius: 10},
});

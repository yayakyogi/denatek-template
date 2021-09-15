import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import {colors, fonts} from '../../../utils';

const ButtonSwitch = ({title, onPress, bgDark, isActive = false}) => {
  return (
    <View style={styles.container}>
      {isActive ? (
        <View style={styles.btn(isActive)}>
          <Text style={styles.text(isActive)}>{title}</Text>
        </View>
      ) : (
        <TouchableOpacity onPress={onPress} style={styles.btn(isActive)}>
          <Text style={styles.text(isActive)}>{title}</Text>
        </TouchableOpacity>
      )}
      <View style={styles.active}>
        <View style={[styles.flexLeft, styles.flexs, bgDark]} />
        <View style={isActive ? [styles.line] : ''} />
        <View style={[styles.flexRight, styles.flexs, bgDark]} />
      </View>
    </View>
  );
};

export default ButtonSwitch;

const styles = StyleSheet.create({
  container: {width: '48%', alignItems: 'center'},
  btnView: {
    flex: 1,
  },
  btn: isActive => ({
    backgroundColor: isActive
      ? colors.button.primary.background
      : 'transparent',
    alignItems: 'center',
    paddingVertical: 10,
    width: '100%',
    borderRadius: 10,
    borderWidth: isActive ? 0 : 1,
    borderColor: colors.light.border,
  }),
  text: isActive => ({
    fontSize: 15,
    fontFamily: isActive ? fonts.primary.BLD : fonts.primary.ELT,
    color: isActive ? colors.normal : colors.text.secondary,
  }),
  active: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'relative',
    backgroundColor: colors.button.primary.background,
  },
  line: {
    width: 135,
    height: 20,
  },
  flexs: {
    height: 25,
    width: 70,
    position: 'absolute',
    zIndex: 2,
  },
  flexRight: {
    borderTopLeftRadius: 25,
    right: -2,
  },
  flexLeft: {
    borderTopRightRadius: 25,
    left: -2,
  },
});

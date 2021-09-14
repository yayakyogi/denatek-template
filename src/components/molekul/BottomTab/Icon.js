import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import {
  ICHomeActive,
  ICHomeInActive,
  ICProfileActive,
  ICProfileInActive,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Icon = ({label, onPress, onLongPress, isFocused}) => {
  const Icons = () => {
    if (label === 'Dashboard') {
      return isFocused ? <ICHomeActive /> : <ICHomeInActive />;
    } else if (label === 'Profile') {
      return isFocused ? <ICProfileActive /> : <ICProfileInActive />;
    }
    return <ICHomeInActive />;
  };

  return (
    <TouchableOpacity onPress={onPress} onLongPress={onLongPress}>
      <View style={styles.container}>
        <Icons />
        <Text style={styles.textIcon(isFocused)}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Icon;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  textIcon: isFocused => ({
    fontSize: 12,
    fontFamily: isFocused ? fonts.primary.SMB : fonts.primary.REG,
    color: isFocused ? colors.text.normal : colors.text.secondary,
    marginTop: 3,
  }),
});

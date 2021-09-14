import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

import {ICHomeOn, ICHomeOff, ICProfileOn, ICProfileOff} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Icon = ({label, onPress, onLongPress, isFocused}) => {
  const Icons = () => {
    if (label === 'Dashboard') {
      return (
        <Image source={isFocused ? ICHomeOn : ICHomeOff} style={styles.icon} />
      );
    } else if (label === 'Profile') {
      return (
        <Image
          source={isFocused ? ICProfileOn : ICProfileOff}
          style={styles.icon}
        />
      );
    }
    return null;
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
    fontFamily: isFocused ? fonts.primary.SMB : fonts.primary.ELT,
    color: isFocused ? colors.text.normal : colors.text.secondary,
    marginTop: 3,
  }),
  icon: {width: 20, height: 20},
});

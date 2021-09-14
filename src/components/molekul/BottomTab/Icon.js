import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import {
  ICHomeActive,
  ICHomeInActive,
  ICProfileActive,
  ICProfileInActive,
} from '../../../assets';

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
      <View>
        <Icons />
        <Text>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Icon;

const styles = StyleSheet.create({});

import React from 'react';
import {StyleSheet, Text, View, useColorScheme} from 'react-native';

import {colorScheme} from '../../utils';
const MitraCheckIn = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const darkMode = {
    backgroundColor: isDarkMode
      ? colorScheme.dark.background
      : colorScheme.light.background,
  };
  return (
    <View style={[styles.container, darkMode]}>
      <Text>MitraCheckIn</Text>
    </View>
  );
};

export default MitraCheckIn;

const styles = StyleSheet.create({
  container: {flex: 1},
});

import React from 'react';
import {StyleSheet, Text, View, useColorScheme, StatusBar} from 'react-native';

import {colors} from '../../utils';
const MitraCheckIn = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const darkMode = {
    backgroundColor: isDarkMode
      ? colors.dark.background
      : colors.light.background,
  };
  return (
    <View style={[styles.container, darkMode]}>
      <StatusBar
        backgroundColor={
          isDarkMode ? colors.dark.statusbar : colors.light.statusbar
        }
      />
      <Text>MitraCheckIn</Text>
    </View>
  );
};

export default MitraCheckIn;

const styles = StyleSheet.create({
  container: {flex: 1},
});

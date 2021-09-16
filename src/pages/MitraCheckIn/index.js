import React from 'react';
import {StyleSheet, Text, View, useColorScheme, StatusBar} from 'react-native';

import {colors} from '../../utils';
import {MenuAbsent} from '../../components';

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
      <MenuAbsent darkMode={darkMode} />
    </View>
  );
};

export default MitraCheckIn;

const styles = StyleSheet.create({
  container: {flex: 1},
});

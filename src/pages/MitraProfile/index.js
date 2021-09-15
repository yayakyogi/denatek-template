import React from 'react';
import {StyleSheet, View, useColorScheme} from 'react-native';

import {MenuProfile} from '../../components';
import {colors} from '../../utils';

const MitraProfile = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const darkMode = {
    backgroundColor: isDarkMode
      ? colors.darkMode.background
      : colors.lightMode.background,
    color: isDarkMode ? colors.darkMode.text : colors.lightMode.text,
  };
  return (
    <View style={styles.container}>
      <View style={[styles.wrapper, darkMode]}>
        <MenuProfile
          darkMode={darkMode}
          type={`${'Marketer'}`}
          id={`${'ASA89ASD'}`}
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

export default MitraProfile;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.primary},
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});

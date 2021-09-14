import React from 'react';
import {StyleSheet, Text, View, ScrollView, useColorScheme} from 'react-native';

import {colors, fonts} from '../../utils';
import {Gap} from '../../components';

const MitraDashboard = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const darkMode = {
    backgroundColor: isDarkMode
      ? colors.darkMode.background
      : colors.lightMode.background,
  };
  return (
    <View style={styles.container}>
      <View style={[styles.wrapper, darkMode]}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainer={styles.scrollview}>
          <Text>Dashboard</Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default MitraDashboard;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.primary},
  wrapper: {
    flex: 1,
    backgroundColor: colors.normal,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});

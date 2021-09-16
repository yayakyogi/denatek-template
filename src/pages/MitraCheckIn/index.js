import React, {useState} from 'react';
import {StyleSheet, View, useColorScheme, StatusBar} from 'react-native';

import {colors} from '../../utils';
import {MenuAbsent} from '../../components';

const MitraCheckIn = () => {
  const [image, setImage] = useState('');
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
      <MenuAbsent
        darkMode={darkMode}
        image={image}
        onPressAdd={() => {}}
        onPressDel={() => {}}
        onSave={() => {}}
      />
    </View>
  );
};

export default MitraCheckIn;

const styles = StyleSheet.create({
  container: {flex: 1},
});

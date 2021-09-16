import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  useColorScheme,
} from 'react-native';

import {ILApp} from '../../assets';
import {colors, fonts} from '../../utils';

const Splash = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const darkTheme = {
    backgroundColor: isDarkMode
      ? colors.dark.background
      : colors.light.background,
    color: isDarkMode ? colors.dark.text : colors.light.text,
  };
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={[styles.container, darkTheme]}>
      <StatusBar
        backgroundColor={isDarkMode ? colors.secondary : colors.normal}
      />
      <Image source={ILApp} style={styles.img} />
      <Text style={[styles.title, darkTheme]}>Denatek</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  img: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {fontSize: 20, fontFamily: fonts.primary.SMB},
});

import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image, StatusBar} from 'react-native';
import {ILApp} from '../../assets';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#ffffff" />
      <Image source={ILApp} style={styles.img} />
      <Text style={styles.title}>DENATEK</Text>
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
  title: {fontSize: 20, fontWeight: '300'},
});

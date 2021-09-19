import React from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';

import {colors, fonts} from '../../../utils';
const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0BCAD4" />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontFamily: fonts.primary.REG,
    marginTop: 12,
    color: colors.primary,
  },
});

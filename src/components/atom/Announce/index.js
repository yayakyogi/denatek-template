import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {colors, fonts} from '../../../utils';

const Announce = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Upload foto anda untuk melakukan absensi harian
      </Text>
    </View>
  );
};

export default Announce;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: colors.primary,
    borderStyle: 'dotted',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  text: {
    fontSize: 14,
    color: colors.primary,
    textAlign: 'center',
    fontFamily: fonts.primary.BLD,
  },
});

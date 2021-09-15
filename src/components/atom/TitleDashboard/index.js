import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {colors, fonts} from '../../../utils';

const TitleDashboard = ({title, id, darkMode}) => {
  return (
    <View>
      <Text style={[styles.title, darkMode]}>{title}</Text>
      <Text style={[styles.id, darkMode]}>{id}</Text>
    </View>
  );
};

export default TitleDashboard;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontFamily: fonts.primary.BLD,
    color: colors.text.primary,
  },
  id: {
    fontSize: 15,
    fontFamily: fonts.primary.REG,
    color: colors.text.secondary,
    marginBottom: 40,
  },
});

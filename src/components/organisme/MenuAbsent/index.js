import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Announce} from '../../atom';

const Absent = ({darkMode}) => {
  return (
    <View style={styles.container}>
      <Announce />
    </View>
  );
};

export default Absent;

const styles = StyleSheet.create({
  container: {paddingVertical: 25, paddingHorizontal: 32},
});

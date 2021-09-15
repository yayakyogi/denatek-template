import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {fonts} from '../../../utils';

const TitleProfile = ({darkMode, type, id}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.profile, darkMode]}>Profile {type}</Text>
      <Text style={[styles.id, darkMode]}>ID {id}</Text>
    </View>
  );
};

export default TitleProfile;

const styles = StyleSheet.create({
  container: {alignItems: 'center', marginBottom: 20},
  profile: {fontSize: 20, fontFamily: fonts.primary.SMB},
  id: {fontSize: 15, fontFamily: fonts.primary.LGT},
});

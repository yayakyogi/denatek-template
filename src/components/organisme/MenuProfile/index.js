import React from 'react';
import {StyleSheet, View} from 'react-native';

import {ButtonMenu, TitleProfile} from '../../atom';
import {ILLogout} from '../../../assets';

const MenuProfile = ({onPress, type, id, darkMode}) => {
  return (
    <View style={styles.container}>
      <TitleProfile darkMode={darkMode} type={type} id={id} />
      <ButtonMenu title="Logout" icon={ILLogout} onPress={onPress} />
    </View>
  );
};

export default MenuProfile;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

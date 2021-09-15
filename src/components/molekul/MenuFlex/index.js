import React from 'react';
import {StyleSheet, View} from 'react-native';

import {ButtonMenu, Gap} from '../../atom';

const MenuFlex = ({
  titleLeft,
  titleRight,
  iconLeft,
  iconRight,
  onPressMenuLeft,
  onPressMenuRight,
}) => {
  return (
    <>
      <View style={styles.container}>
        <ButtonMenu
          title={titleLeft}
          icon={iconLeft}
          onPress={onPressMenuLeft}
        />
        <Gap width={20} />
        <ButtonMenu
          title={titleRight}
          icon={iconRight}
          onPress={onPressMenuRight}
        />
      </View>
      <Gap height={20} />
    </>
  );
};

export default MenuFlex;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

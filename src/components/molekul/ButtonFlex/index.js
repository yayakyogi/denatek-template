import React from 'react';
import {StyleSheet, View} from 'react-native';

import {ButtonSwitch, Gap} from '../../atom';

const ButtonFlex = ({
  onPress1,
  onPress2,
  title1,
  title2,
  btn1Active,
  btn2Active,
  darkMode,
  bgDark,
}) => {
  return (
    <View style={styles.container}>
      <ButtonSwitch
        title={title1}
        onPress={onPress1}
        isActive={btn1Active}
        bgDark={bgDark}
      />
      <Gap width={10} />
      <ButtonSwitch
        title={title2}
        onPress={onPress2}
        isActive={btn2Active}
        bgDark={bgDark}
      />
    </View>
  );
};

export default ButtonFlex;

const styles = StyleSheet.create({
  container: {flexDirection: 'row', justifyContent: 'center'},
});

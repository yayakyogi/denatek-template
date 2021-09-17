import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Announce, Button} from '../../atom';
import {PhotoAbsent} from '../../molekul';

const Absent = ({darkMode, image, onPressAdd, onPressDel, onSave}) => {
  return (
    <View style={styles.container}>
      <Announce message="Upload foto anda untuk melakukan absensi harian" />
      <PhotoAbsent
        image={image}
        onPressAdd={onPressAdd}
        onPressDel={onPressDel}
      />
      <Button title="Simpan" onPress={onSave} />
    </View>
  );
};

export default Absent;

const styles = StyleSheet.create({
  container: {flex: 1, paddingVertical: 25, paddingHorizontal: 32},
});

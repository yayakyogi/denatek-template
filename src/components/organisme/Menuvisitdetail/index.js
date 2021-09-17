import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Announce, TextInput, Button} from '../../atom';
import {PhotoLaporan} from '../../molekul';

const MenuVisitDetail = ({
  darkMode,
  value,
  image,
  onChangeText,
  onSave,
  onCapture,
  onDelete,
}) => {
  return (
    <View style={styles.container}>
      <Announce message="Kirim detail kunjungan dan swafoto bersama produk di etalase" />
      <PhotoLaporan image={image} onCapture={onCapture} onDelete={onDelete} />
      <TextInput
        label="Catatan"
        darkTheme={darkMode}
        value={value}
        onChangeText={onChangeText}
        placeholder="Masukkan catatan untuk toko"
      />
      <Button title="Kirim" onPress={onSave} />
    </View>
  );
};

export default MenuVisitDetail;

const styles = StyleSheet.create({
  container: {paddingHorizontal: 32, paddingVertical: 25},
});

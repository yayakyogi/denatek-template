import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Announce, TextInput, Button, Gap} from '../../atom';
import {PhotoReport} from '../../molekul';

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
      <PhotoReport image={image} onCapture={onCapture} onDelete={onDelete} />
      <TextInput
        label="Catatan"
        darkMode={darkMode}
        value={value}
        onChangeText={onChangeText}
        placeholder="Masukkan catatan untuk toko"
      />
      <Gap height={20} />
      <Button title="Kirim" onPress={onSave} />
    </View>
  );
};

export default MenuVisitDetail;

const styles = StyleSheet.create({
  container: {paddingHorizontal: 32, paddingVertical: 25},
});

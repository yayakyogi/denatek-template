import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import {TextInput, Button, Gap} from '../../components';
import {storeData, getData, multiRemove, showMessage} from '../../utils';

const Try = () => {
  const [data, setData] = useState('');
  const [data2, setData2] = useState('');

  const dataKu = {
    data,
  };
  const dataLu = {
    data2,
  };

  const onSave1 = () => {
    // storeData('data1', dataKu);
    if (data === 'yayak') {
      showMessage('Sukses menyimpan data', 'success');
    } else {
      showMessage('Gagal menyimpan data');
    }
    setData('');
  };
  const onSave2 = () => {
    storeData('data2', dataLu);
  };
  const onShow = () => {
    getData('data2').then(res => {
      console.log(res);
    });
  };
  const onDelete = () => {
    const navigation = '';
    const key = ['data1', 'data2'];
    multiRemove(key, navigation, '', 'Sukses menghapus semua data storage');
  };
  return (
    <View style={styles.container}>
      <TextInput
        label="Data 1"
        value={data}
        onChangeText={value => setData(value)}
      />
      <Button title="SAVE 1" onPress={onSave1} />
      <Gap height={20} />
      <TextInput
        label="Data 2"
        value={data2}
        onChangeText={value => setData2(value)}
      />
      <Button title="SAVE 2" onPress={onSave2} />
      <Gap height={30} />
      <Button title="SHOW" onPress={onShow} />
      <Button title="DELETE" onPress={onDelete} />
    </View>
  );
};

export default Try;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 32,
    paddingVertical: 25,
  },
});

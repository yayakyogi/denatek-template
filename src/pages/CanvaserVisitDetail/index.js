import React from 'react';
import * as ImagePicker from 'react-native-image-picker';
import {
  StyleSheet,
  ScrollView,
  View,
  useColorScheme,
  StatusBar,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {darkMode, statusBarDark, colors} from '../../utils';
import {
  Announce,
  Gap,
  PhotoForm,
  TextInput,
  Line,
  Button,
  Warning,
} from '../../components';
import {
  visitPhotoOutUri,
  visitPhotoInUri,
  clearVisitPhotoOutUri,
  clearVisitPhotoInUri,
  visitLog,
  setDefault,
} from '../../redux/action';

const CanvaserVisitdetail = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const canvaserReducer = useSelector(state => state.canvaserReducer);
  const dispatch = useDispatch();
  const margin = 10;

  const addOutPhoto = () => {
    ImagePicker.launchCamera(
      {
        mediaType: 'photo',
        includeBase64: true,
        quality: 0.5,
      },
      response => {
        const source = `${response.assets[0].uri}`;
        const imgBase64 = response.assets[0].base64;
        dispatch(visitPhotoOutUri(source, 'imgBase64_OUT'));
      },
    );
  };
  const addInPhoto = () => {
    ImagePicker.launchCamera(
      {
        mediaType: 'photo',
        includeBase64: true,
        quality: 0.5,
      },
      response => {
        const source = `${response.assets[0].uri}`;
        const imgBase64 = response.assets[0].base64;
        dispatch(visitPhotoInUri(source, 'imgBase64_IN'));
      },
    );
  };

  const delOutPhoto = () => {
    dispatch(clearVisitPhotoOutUri());
  };
  const delInPhoto = () => {
    dispatch(clearVisitPhotoInUri());
  };

  const onInputChange = (value, input) => {
    dispatch(visitLog(input, value));
  };

  const onSave = () => {
    console.log(canvaserReducer.visitLog);
    setTimeout(() => {
      dispatch(setDefault());
    }, 1000);
  };

  return (
    <View style={[styles.container, darkMode(isDarkMode)]}>
      <ScrollView
        style={styles.scrollview}
        showsVerticalScrollIndicator={false}>
        <StatusBar
          backgroundColor={statusBarDark(isDarkMode).backgroundColor}
        />
        <Announce message="Kirim detail kunjungan serta swafoto di depan toko dan produk di etalase" />
        <Gap height={15} />
        <Warning
          message="*Usahakan orientasi foto adalah landscape"
          color={colors.danger}
        />
        <Gap height={margin} />
        <PhotoForm
          image={canvaserReducer.visitPhotoOutUri}
          label="Foto Toko"
          darkMode={darkMode(isDarkMode)}
          onPress={addOutPhoto}
          onDelete={delOutPhoto}
        />
        <Gap height={margin} />
        <PhotoForm
          image={canvaserReducer.visitPhotoInUri}
          label="Foto Produk"
          darkMode={darkMode(isDarkMode)}
          onPress={addInPhoto}
          onDelete={delInPhoto}
        />
        <Gap height={25} />
        <Line height={1.5} color={colors.primary} />
        <Gap height={20} />
        <TextInput
          label="Produk Terjual"
          darkMode={darkMode(isDarkMode)}
          placeholder="Jumlah produk yang sudah terjual"
          value={canvaserReducer.visitLog.mitraReportSale}
          onChangeText={value => onInputChange(value, 'mitraReportSale')}
        />
        <Gap height={margin} />
        <TextInput
          label="Laporan Penjualan"
          darkMode={darkMode(isDarkMode)}
          placeholder="Laporan jumlah penjualan mitra"
          value={canvaserReducer.visitLog.productMarketerSale}
          onChangeText={value => onInputChange(value, 'productMarketerSale')}
        />
        <Gap height={margin} />
        <TextInput
          label="Catatan"
          darkMode={darkMode(isDarkMode)}
          placeholder="Masukkan catatan untuk toko"
          value={canvaserReducer.visitLog.notes}
          onChangeText={value => onInputChange(value, 'notes')}
        />
        <Gap height={margin} />
      </ScrollView>
      <View style={styles.btnView}>
        <Button title="SIMPAN" onPress={onSave} />
      </View>
    </View>
  );
};

export default CanvaserVisitdetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    paddingTop: 25,
    paddingBottom: 15,
  },
  scrollview: {flexGrow: 1},
});

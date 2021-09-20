import React from 'react';
import * as ImagePicker from 'react-native-image-picker';
import {
  StyleSheet,
  View,
  useColorScheme,
  ScrollView,
  StatusBar,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {colors, darkMode, statusBarDark, optionCamera} from '../../utils';
import {
  TextInput,
  Gap,
  ButtonList,
  Button,
  PhotoForm,
  Announce,
  Line,
} from '../../components';
import {
  addPhotoOutUri,
  addPhotoInUri,
  clearAddPhotoOutUri,
  clearAddPhotoInUri,
  addMitra,
  setDefault,
  setLoading,
  canvaserAddMitra,
} from '../../redux/action';

const CanvaserAddMitra = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const canvaserReducer = useSelector(state => state.canvaserReducer);
  const dispatch = useDispatch();
  const margin = 10;

  const addOutPhoto = () => {
    ImagePicker.launchCamera(optionCamera, response => {
      const source = `${response.assets[0].uri}`;
      const imgBase64 = response.assets[0].base64;
      dispatch(addPhotoOutUri(source, 'imgBase64_OUT'));
    });
  };
  const addInPhoto = () => {
    ImagePicker.launchCamera(optionCamera, response => {
      const source = `${response.assets[0].uri}`;
      const imgBase64 = response.assets[0].base64;
      dispatch(addPhotoInUri(source, 'imgBase64_IN'));
    });
  };

  const delOutPhoto = () => {
    dispatch(clearAddPhotoOutUri());
  };
  const delInPhoto = () => {
    dispatch(clearAddPhotoInUri());
  };

  const onInputChange = (value, input) => {
    dispatch(addMitra(input, value));
  };

  const onSave = () => {
    console.log(canvaserReducer.addMitra);
    dispatch(setLoading(true));
    dispatch(canvaserAddMitra(canvaserReducer.addMitra, userToken, navigation));
  };

  return (
    <View style={[styles.container, darkMode(isDarkMode)]}>
      <StatusBar backgroundColor={statusBarDark(isDarkMode).backgroundColor} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollview}>
        <Gap height={25} />
        <Announce message="Kirim data dari mitra serta swafoto di depan dan dalam toko" />
        <Gap height={20} />
        <PhotoForm
          darkMode={darkMode(isDarkMode)}
          label="Foto Tampak Luar"
          image={canvaserReducer.addPhotoOutUri}
          onPress={addOutPhoto}
          onDelete={delOutPhoto}
        />
        <Gap height={margin} />
        <PhotoForm
          darkMode={darkMode(isDarkMode)}
          label="Foto Tampak Dalam"
          image={canvaserReducer.addPhotoInUri}
          onPress={addInPhoto}
          onDelete={delInPhoto}
        />
        <Gap height={20} />
        <Line height={2} color={colors.primary} />
        <Gap height={20} />
        <ButtonList
          label="Kategori Toko"
          value=""
          darkMode={darkMode(isDarkMode)}
        />
        <Gap height={margin} />
        <TextInput
          label="Nama Toko"
          placeholder="Masukkan nama toko"
          darkMode={darkMode(isDarkMode)}
          value={canvaserReducer.addMitra.name}
          onChangeText={value => onInputChange(value, 'name')}
        />
        <Gap height={margin} />
        <TextInput
          label="Alamat Toko"
          placeholder="Masukkan alamat lengkap"
          darkMode={darkMode(isDarkMode)}
          value={canvaserReducer.addMitra.addressDetail}
          onChangeText={value => onInputChange(value, 'addressDetail')}
        />
        <Gap height={margin} />
        <TextInput
          label="Nomor Telepon"
          placeholder="Masukkan nomor telepon aktif"
          darkMode={darkMode(isDarkMode)}
          keyboardType="number-pad"
          value={canvaserReducer.addMitra.phoneNumber}
          onChangeText={value => onInputChange(value, 'phoneNumber')}
        />
        <Gap height={margin} />
        <TextInput
          label="Kode Area"
          placeholder="Masukkan kode area"
          darkMode={darkMode(isDarkMode)}
          value={canvaserReducer.addMitra.areaCode}
          onChangeText={value => onInputChange(value, 'areaCode')}
        />
        <Gap height={margin} />
      </ScrollView>
      <View style={[styles.btnView, darkMode]}>
        <Button title="Simpan" onPress={onSave} />
      </View>
    </View>
  );
};

export default CanvaserAddMitra;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 10,
    paddingHorizontal: 32,
  },
  scrollview: {flexGrow: 1},
});

import React from 'react';
import * as ImagePicker from 'react-native-image-picker';
import {StyleSheet, View, useColorScheme, StatusBar} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {darkMode, statusBarDark, optionCamera} from '../../utils';
import {MenuAbsent} from '../../components';
import {photoUriAbsent, mitraAbsent, deletePhoto} from '../../redux/action';

const MitraCheckOut = () => {
  const mitraReducer = useSelector(state => state.mitraReducer);
  const dispatch = useDispatch();
  const isDarkMode = useColorScheme() === 'dark';

  const addPhoto = () => {
    ImagePicker.launchCamera(optionCamera, response => {
      if (response.didCancel || response.error) {
        console.log('Batal mengambil foto');
      } else {
        const source = `${response.assets[0].uri}`;
        const imgBase64 = response.assets[0].base64;
        dispatch(photoUriAbsent(source, 'imgBase64'));
        const userId = '12IFE123';
        const checkInLatLng = '-1,121303 9090129.1';
        dispatch(mitraAbsent(userId, checkInLatLng));
      }
    });
  };

  // function saveData
  const saveData = () => {
    console.log(mitraReducer.absent);
  };

  return (
    <View style={[styles.container, darkMode(isDarkMode)]}>
      <StatusBar backgroundColor={statusBarDark(isDarkMode).backgroundColor} />
      <MenuAbsent
        darkMode={darkMode(isDarkMode)}
        image={mitraReducer.photoUri}
        onPressAdd={addPhoto}
        onPressDel={() => dispatch(deletePhoto())}
        onSave={saveData}
      />
    </View>
  );
};

export default MitraCheckOut;

const styles = StyleSheet.create({
  container: {flex: 1},
});

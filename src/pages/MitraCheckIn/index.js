import React, {useState} from 'react';
import * as ImagePicker from 'react-native-image-picker';
import {StyleSheet, View, useColorScheme, StatusBar} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {darkMode, statusBarDark} from '../../utils';
import {MenuAbsent} from '../../components';
import {canvaserAbsent, deletePhoto} from '../../redux/action';

const MitraCheckIn = () => {
  const [image, setImage] = useState('');
  const [imageBase64, setImageBase64] = useState('');
  const canvaserReducer = useSelector(state => state.canvaserReducer);
  const dispatch = useDispatch();
  const isDarkMode = useColorScheme() === 'dark';

  // Function upload photo
  const addPhoto = () => {
    ImagePicker.launchCamera(
      {
        mediaType: 'photo',
        includeBase64: true,
        quality: 0.5,
      },
      response => {
        if (response.didCancel || response.error) {
          console.log('User cancelled image picker');
        } else {
          const source = {uri: response.assets[0].uri};
          const imgBase64 = response.assets[0].base64;
          setImage(source);
          setImageBase64(imgBase64);
        }
      },
    );
  };

  // function delete photo
  const delPhoto = () => {
    setImage('');
    dispatch(deletePhoto());
  };

  // function saveData
  const saveData = () => {
    // const userId = '12IFE123';
    // const checkInPhoto = imageBase64;
    // const checkInLatLng = '-1,121303 9090129.1';
    // dispatch(canvaserAbsent(userId, checkInPhoto, checkInLatLng));
    console.log(canvaserReducer.absent);
  };

  return (
    <View style={[styles.container, darkMode(isDarkMode)]}>
      <StatusBar backgroundColor={statusBarDark(isDarkMode).backgroundColor} />
      <MenuAbsent
        darkMode={darkMode(isDarkMode)}
        image={image}
        onPressAdd={addPhoto}
        onPressDel={delPhoto}
        onSave={saveData}
      />
    </View>
  );
};

export default MitraCheckIn;

const styles = StyleSheet.create({
  container: {flex: 1},
});

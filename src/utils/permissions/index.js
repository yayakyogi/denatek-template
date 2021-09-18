import {PermissionsAndroid} from 'react-native';

// Function permission camera
export const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'App Camera Permission',
        message: 'Izinkan aplikasi menggunakan kamera',
        buttonNeutral: 'Tanya lagi nanti',
        buttonNegative: 'Batal',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('');
    } else {
      console.log('');
    }
  } catch (err) {
    console.warn(err);
  }
};

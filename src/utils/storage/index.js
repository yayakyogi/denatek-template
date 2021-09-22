import AsyncStorage from '@react-native-async-storage/async-storage';

// simpan data
export const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    console.log('Error saat menyimpan data ke localStorage');
  }
};

// tampilkan data
export const getData = async key => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.log('Error saat mengambil data dari localStorage');
  }
};

// remove 1 item/key dari localStorage
export const removeItem = (key, navigation, routeName, message) => {
  if (navigation) {
    AsyncStorage.removeItem(key).then(() => {
      console.log(message);
      navigation.reset({index: 0, routes: [{name: routeName}]});
    });
  } else {
    AsyncStorage.removeItem(key).then(() => {
      console.log(message);
    });
  }
};

// remove >1 item/key dari localStorage
export const multiRemove = (key = [], navigation, routeName, message) => {
  if (navigation) {
    AsyncStorage.multiRemove(key).then(() => {
      console.log(message);
      navigation.reset({index: 0, routes: [{name: routeName}]});
    });
  } else {
    AsyncStorage.multiRemove(key).then(() => {
      console.log(message);
    });
  }
};

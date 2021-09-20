import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  useColorScheme,
  StatusBar,
  ScrollView,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {ILApp} from '../../assets';
import {fonts, darkMode, statusBarDark, buttonTextDark} from '../../utils';
import {Button, TextInput, Gap, ButtonText, ButtonFlex} from '../../components';
import {
  setFormLogin,
  setClearForm,
  setIsCanvaser,
  setIsMarketer,
  setShowPassword,
  setLoading,
  mitraLogin,
} from '../../redux/action';

const Login = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const loginReducer = useSelector(state => state.loginReducer);
  const dispatch = useDispatch();

  const onInputChange = (value, input) => {
    dispatch(setFormLogin(input, value));
  };

  const sendData = () => {
    dispatch(setLoading(true));
    navigation.navigate('MainApp');
    if (loginReducer.form.email && loginReducer.form.password) {
      const data = loginReducer.form;
      const type = loginReducer.isCanvaser ? 'Canvaser' : 'Marketer';
      // dispatch(mitraLogin(type, data, navigation));
      dispatch(setClearForm()); // bersihkan form
    } else {
      console.log('Form wajib diisi');
      dispatch(setLoading(false));
    }
  };

  return (
    <View style={[styles.container, darkMode(isDarkMode)]}>
      <StatusBar backgroundColor={statusBarDark(isDarkMode).backgroundColor} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollview}>
        <Image source={ILApp} style={styles.img} />
        <Text style={[styles.title, darkMode(isDarkMode)]}>Masuk sebagai</Text>
        <ButtonFlex
          title1="Canvaser"
          title2="Marketer"
          btn1Active={loginReducer.isCanvaser} // props untuk mengecek button mana yg aktif
          btn2Active={loginReducer.isMarketer}
          onPress1={() => {
            // props untuk fungsi tombol
            dispatch(setIsMarketer(false));
            dispatch(setIsCanvaser(true));
          }}
          onPress2={() => {
            dispatch(setIsCanvaser(false));
            dispatch(setIsMarketer(true));
          }}
          bgDark={darkMode(isDarkMode)}
        />
        <Gap height={20} />
        <TextInput
          label="Email"
          darkMode={darkMode(isDarkMode)}
          placeholder="Masukkan email anda"
          keyboardType="email-address"
          value={loginReducer.form.email}
          onChangeText={value => onInputChange(value, 'email')}
        />
        <Gap height={15} />
        <View style={styles.pw}>
          <TextInput
            label="Password"
            darkMode={darkMode(isDarkMode)}
            placeholder="Masukkan password anda"
            secureTextEntry={loginReducer.showPassword ? false : true} // cek apakah showPassword bernilai true? jikak YA maka ubah secureTextEntry menjadi false agar password terlihat
            value={loginReducer.form.password}
            onChangeText={value => onInputChange(value, 'password')}
          />
          <ButtonText
            onPress={() =>
              dispatch(setShowPassword(!loginReducer.showPassword))
            }
            labelDark={buttonTextDark(isDarkMode)}
            text={
              loginReducer.showPassword
                ? 'Sembunyikan password'
                : 'Tampilkan password'
            }
          />
        </View>
        <Gap height={40} />
        <Button title="LOGIN" onPress={sendData} />
      </ScrollView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  scrollview: {flexGrow: 1},
  container: {
    flex: 1,
    paddingHorizontal: 32,
    paddingTop: 25,
  },
  img: {width: 80, height: 80},
  title: {
    fontSize: 20,
    fontFamily: fonts.primary.SMB,
    marginVertical: 30,
  },
  pw: {position: 'relative'},
  showpassword: {position: 'absolute', right: 10, bottom: -25},
  showpasswordtext: {fontSize: 12, fontFamily: fonts.primary.MED},
});

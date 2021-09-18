import React, {useEffect} from 'react';
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
import {fonts, colors} from '../../utils';
import {Button, TextInput, Gap, ButtonText, ButtonFlex} from '../../components';
import {
  setFormLogin,
  setClearForm,
  setIsCanvaser,
  setIsMarketer,
  setShowPassword,
} from '../../redux/action';

const Login = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark'; // variabel untuk mengecek apakah tema hp darkMode atau tidak
  const loginReducer = useSelector(state => state.loginReducer); // baca state global dari loginReducer
  const dispatch = useDispatch(); // variabel dispatch untuk menangani action creator

  // function untuk menerima perubahan input dari textInput
  const onInputChange = (value, input) => {
    dispatch(setFormLogin(input, value));
  };

  // function untuk menyimpan data
  const sendData = () => {
    console.log('Send data: ', loginReducer.form);
    dispatch(setClearForm()); // bersihkan form
  };

  // variable untuk menset styling ketika tema dalam mode darkMode
  const darkMode = {
    backgroundColor: isDarkMode
      ? colors.dark.background
      : colors.light.background,
    color: isDarkMode ? colors.dark.text : colors.light.text,
    borderColor: isDarkMode ? colors.dark.border : colors.light.border,
  };
  const buttonTextDark = {
    color: isDarkMode ? colors.dark.text : colors.light.label,
  };

  return (
    <View style={[styles.container, darkMode]}>
      {/* beri warna statusbar */}
      <StatusBar
        backgroundColor={
          isDarkMode ? colors.dark.statusbar : colors.light.statusbar
        }
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollview}>
        {/* logo */}
        <Image source={ILApp} style={styles.img} />
        <Text style={[styles.title, darkMode]}>Masuk sebagai</Text>
        <ButtonFlex
          // nama button
          title1="Canvaser"
          title2="Marketer"
          // props untuk mengecek button mana yg aktif
          btn1Active={loginReducer.isCanvaser}
          btn2Active={loginReducer.isMarketer}
          // props untuk fungsi tombol
          onPress1={() => {
            dispatch(setIsMarketer(false));
            dispatch(setIsCanvaser(true));
          }}
          onPress2={() => {
            dispatch(setIsCanvaser(false));
            dispatch(setIsMarketer(true));
          }}
          bgDark={darkMode} // props darkMode
        />
        <Gap height={20} />
        {/* form login email*/}
        <TextInput
          label="Email"
          darkMode={darkMode}
          placeholder="Masukkan email anda"
          keyboardType="email-address"
          value={loginReducer.form.email}
          onChangeText={value => onInputChange(value, 'email')}
        />
        <Gap height={15} />
        <View style={styles.pw}>
          {/* form login password*/}
          <TextInput
            label="Password"
            darkMode={darkMode}
            placeholder="Masukkan password anda"
            secureTextEntry={loginReducer.showPassword ? false : true} // cek apakah showPassword bernilai true? jikak YA maka ubah secureTextEntry menjadi false agar password terlihat
            value={loginReducer.form.password}
            onChangeText={value => onInputChange(value, 'password')}
          />
          <ButtonText
            onPress={() =>
              dispatch(setShowPassword(!loginReducer.showPassword))
            }
            labelDark={buttonTextDark}
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

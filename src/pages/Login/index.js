import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  useColorScheme,
  StatusBar,
  ScrollView,
} from 'react-native';

import {ILApp} from '../../assets';
import {fonts, colors} from '../../utils';
import {Button, TextInput, Gap, ButtonText} from '../../components';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false); // state untuk melihat password
  const isDarkMode = useColorScheme() === 'dark'; // variabel untuk mengecek apakah tema hp darkMode atau tidak

  // variale untuk menset warna ketika tema dalam mode darkMode
  const darkTheme = {
    backgroundColor: isDarkMode
      ? colors.darkMode.background
      : colors.lightMode.background,
    color: isDarkMode ? colors.darkMode.text : colors.lightMode.text,
    borderColor: isDarkMode ? colors.darkMode.border : colors.lightMode.border,
  };
  const labelDark = {
    color: isDarkMode ? colors.darkMode.text : colors.lightMode.label,
  };

  return (
    <View style={[styles.container, darkTheme]}>
      {/* beri warna statusbar */}
      <StatusBar
        backgroundColor={
          isDarkMode ? colors.darkMode.statusbar : colors.lightMode.statusbar
        }
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollview}>
        {/* logo */}
        <Image source={ILApp} style={styles.img} />
        <Text style={[styles.title, darkTheme]}>Masuk dan mulai bekerja</Text>
        {/* form login email*/}
        <TextInput
          label="Email"
          labelDark={labelDark}
          darkTheme={darkTheme}
          placeholder="Masukkan email anda"
          keyboardType="email-address"
        />
        <View style={styles.pw}>
          {/* form login password*/}
          <TextInput
            label="Password"
            labelDark={labelDark}
            darkTheme={darkTheme}
            placeholder="Masukkan password anda"
            // cek apakah showPassword bernilai true? jikak YA maka ubah secureTextEntry menjadi false agar password terlihat
            secureTextEntry={showPassword ? false : true}
          />
          <ButtonText
            onPress={() => setShowPassword(!showPassword)}
            labelDark={labelDark}
            text={showPassword ? 'Sembunyikan password' : 'Tampilkan password'}
          />
        </View>
        <Gap height={20} />
        <Button title="LOGIN" />
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
    paddingVertical: 25,
  },
  img: {width: 100, height: 100},
  title: {fontSize: 20, fontFamily: fonts.primary.SMB, marginVertical: 40},
  pw: {position: 'relative'},
  showpassword: {position: 'absolute', right: 10, bottom: -25},
  showpasswordtext: {fontSize: 12, fontFamily: fonts.primary.MED},
});

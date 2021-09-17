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
import {Button, TextInput, Gap, ButtonText, ButtonFlex} from '../../components';

const Login = ({navigation}) => {
  const [showPassword, setShowPassword] = useState(false); // state untuk melihat password
  const isDarkMode = useColorScheme() === 'dark'; // variabel untuk mengecek apakah tema hp darkMode atau tidak
  const [isCanvaser, setIsCanvaser] = useState(true); // state untuk role canvaser
  const [isMarketer, setIsMarketer] = useState(false); // state untuk role marketer

  // variale untuk menset warna ketika tema dalam mode darkMode
  const darkTheme = {
    backgroundColor: isDarkMode
      ? colors.dark.background
      : colors.light.background,
    color: isDarkMode ? colors.dark.text : colors.light.text,
    borderColor: isDarkMode ? colors.dark.border : colors.light.border,
  };
  const labelDark = {
    color: isDarkMode ? colors.dark.text : colors.light.label,
  };

  return (
    <View style={[styles.container, darkTheme]}>
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
        <Text style={[styles.title, darkTheme]}>Masuk sebagai</Text>
        <ButtonFlex
          title1="Canvaser"
          title2="Marketer"
          btn1Active={isCanvaser}
          btn2Active={isMarketer}
          onPress1={() => {
            setIsMarketer(false);
            setIsCanvaser(true);
          }}
          onPress2={() => {
            setIsCanvaser(false);
            setIsMarketer(true);
          }}
          bgDark={darkTheme}
        />
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
        <Button title="LOGIN" onPress={() => navigation.navigate('MainApp')} />
        <Gap height={20} />
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

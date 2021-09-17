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
  const darkMode = {
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
          btn1Active={isCanvaser}
          btn2Active={isMarketer}
          // props untuk fungsi tombol
          onPress1={() => {
            setIsMarketer(false);
            setIsCanvaser(true);
          }}
          onPress2={() => {
            setIsCanvaser(false);
            setIsMarketer(true);
          }}
          // props darkMode
          bgDark={darkMode}
        />
        <Gap height={20} />
        {/* form login email*/}
        <TextInput
          label="Email"
          darkMode={darkMode}
          placeholder="Masukkan email anda"
          keyboardType="email-address"
        />
        <Gap height={15} />
        <View style={styles.pw}>
          {/* form login password*/}
          <TextInput
            label="Password"
            darkMode={darkMode}
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
        <Gap height={40} />
        <Button title="LOGIN" onPress={() => navigation.navigate('MainApp')} />
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

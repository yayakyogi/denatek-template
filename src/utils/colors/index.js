// variabel warna
const mainColors = {
  green1: '#0BCAD4',
  green2: '#0AA8B0',
  green3: '#EDFCFD',
  dark1: '#112340',
  red1: '#E06379',
  yellow1: '#F8B459',
  gray1: '#7D8797',
  gray2: '#E9E9E9',
  white: '#FFFFFF',
};

export const colors = {
  primary: mainColors.green1,
  secondary: mainColors.dark1,
  normal: mainColors.white,
  warning: mainColors.yellow1,
  danger: mainColors.red1,
  success: mainColors.green2,
  // warna untuk button
  button: {
    primary: {
      background: mainColors.green1,
      text: mainColors.white,
    },
    secondary: {
      background: mainColors.white,
      text: mainColors.dark,
    },
    dark: {
      background: mainColors.dark1,
      text: mainColors.grey2,
    },
    menu: {
      background: mainColors.green3,
      text: mainColors.green1,
    },
  },
  // warna untuk pesan atau notifikasi
  message: {
    success: {
      background: mainColors.green2,
      text: mainColors.white,
    },
    error: {
      background: mainColors.red1,
      text: mainColors.white,
    },
  },
  // warna untuk teks
  text: {
    primary: mainColors.dark1,
    secondary: mainColors.gray1,
    danger: mainColors.red1,
    normal: mainColors.white,
    inActive: mainColors.gray2,
  },
  // warna untuk darkMode
  darkMode: {
    background: mainColors.dark1,
    text: mainColors.green1,
    border: mainColors.green1,
    statusbar: mainColors.dark1,
  },
  // warna untuk lightMode
  lightMode: {
    background: mainColors.white,
    label: mainColors.gray1,
    text: mainColors.dark1,
    border: mainColors.gray2,
    statusbar: mainColors.gray1,
  },
};

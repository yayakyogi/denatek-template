import {colors} from '../colors';

export const darkMode = isDarkMode => {
  return {
    backgroundColor: isDarkMode
      ? colors.dark.background
      : colors.light.background,
    color: isDarkMode ? colors.dark.text : colors.light.text,
    borderColor: isDarkMode ? colors.dark.border : colors.light.border,
  };
};

export const buttonTextDark = isDarkMode => {
  return {color: isDarkMode ? colors.dark.text : colors.light.label}; // untuk buttonText tampilkan password di halaman login
};

export const statusBarDark = isDarkMode => {
  return {
    backgroundColor: isDarkMode
      ? colors.dark.statusbar
      : colors.light.statusbar,
  };
};

// ubah value form login
export const setFormLogin = (inputType, inputValue) => {
  return {type: 'SET_FORM', inputType, inputValue};
};
// bersihkan form setelah klik tombol LOGIN
export const setClearForm = () => {
  return {type: 'CLEAR_FORM'};
};
// ubah value dari isCanvaser
export const setIsCanvaser = value => {
  return {type: 'SET_CANVASER', value};
};
// ubah value dari isMarketer
export const setIsMarketer = value => {
  return {type: 'SET_MARKETER', value};
};
// ubah value showPassword
export const setShowPassword = value => {
  return {type: 'SET_SHOW_PASSWORD', value};
};

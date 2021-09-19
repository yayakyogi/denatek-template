import {API_HOST, queryString} from '../../utils';

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
// action API login
export const mitraLogin = (type, data, navigation) => dispatch => {
  if (type === 'Canvaser') {
    fetch(`${API_HOST.url}/canvaser/login?${queryString(data)}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(res => {
        if (res.id) {
          const saveData = {
            type,
            id: res.id,
            token: res.token,
          };
        } else {
          console.log(res.message);
        }
      })
      .catch(error => {
        console.log(error);
      });
  } else {
    fetch(`${API_HOST.url}/marketer/login?${queryString(data)}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(res => {
        if (res.id) {
          const saveData = {
            type,
            id: res.id,
            token: res.token,
          };
          dispatch(setClearForm()); // bersihkan form
        } else {
          console.log(res.message);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
};

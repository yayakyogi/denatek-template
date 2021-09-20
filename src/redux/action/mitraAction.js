import {API_HOST, queryString} from '../../utils';

// set photoUri
export const photoUriAbsent = (value, valueBase64) => {
  return {type: 'SET_PHOTO_ABSENT', value, valueBase64};
};
// set data absen
export const mitraAbsent = (userId, checkInLatLng) => {
  return {type: 'SET_ABSENT', userId, checkInLatLng};
};
// hapus data photo
export const deletePhoto = () => {
  return {type: 'SET_DEFAULT'};
};
// set loading
export const setLoading = value => {
  return {type: 'SET_LOADING', value};
};
// set default semua state
export const setDefault = () => {
  return {type: 'SET_DEFAULT'};
};
// send location
export const sendLocation = (type, data, token, navigation) => dispatch => {
  if (type === 'Canvaser') {
    fetch(`${API_HOST.url}/canvaser/gps?${queryString(data)}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    })
      .then(response => response.json())
      .then(response => {
        if (response.status === 401) {
          console.log('Gagal mengirim lokasi');
        } else {
          console.log(response);
        }
      })
      .catch(error => {
        console.log(error);
      });
  } else {
    fetch(`${API_HOST.url}/marketer/gps?${queryString(data)}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    })
      .then(response => response.json())
      .then(response => {
        if (response.status === 401) {
          console.log('Gagal mengirim lokasi');
        } else {
          console.log(response);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
};

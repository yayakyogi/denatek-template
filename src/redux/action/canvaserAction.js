import {API_HOST, queryString} from '../../utils';
import {setLoading} from './mitraAction';

/* VISIT LOG */
// set photoOutUri di halaman detail kunjungans
export const visitPhotoOutUri = (uriPhoto, mainPhoto) => {
  return {type: 'VISIT_PHOTO_OUT_URI', uriPhoto, mainPhoto};
};
// set photoInUri di halaman detail kunjungan
export const visitPhotoInUri = (uriPhoto, altPhoto) => {
  return {type: 'VISIT_PHOTO_IN_URI', uriPhoto, altPhoto};
};
// delete photoOutUri di halaman detail kunjungan
export const clearVisitPhotoOutUri = () => {
  return {type: 'CLEAR_VISIT_PHOTO_OUT_URI'};
};
// delete photoInUri di halaman detail kunjungan
export const clearVisitPhotoInUri = () => {
  return {type: 'CLEAR_VISIT_PHOTO_IN_URI'};
};
// canvaser visitLog
export const visitLog = (typeInput, typeValue) => {
  return {type: 'SET_VISIT_LOG', typeInput, typeValue};
};

/* ADD MITRA */
// set photoOutUri di halaman addMitra
export const addPhotoOutUri = (uriPhoto, mainPhoto) => {
  return {type: 'ADD_PHOTO_OUT_URI', uriPhoto, mainPhoto};
};
// set photoInUri di halaman addMitra
export const addPhotoInUri = (uriPhoto, altPhoto) => {
  return {type: 'ADD_PHOTO_IN_URI', uriPhoto, altPhoto};
};
// delete photoOutUri di halaman addMitra
export const clearAddPhotoOutUri = () => {
  return {type: 'CLEAR_ADD_PHOTO_OUT_URI'};
};
// delete photoInUri di halaman addMitra
export const clearAddPhotoInUri = () => {
  return {type: 'CLEAR_ADD_PHOTO_IN_URI'};
};
// global state add mitra
export const addMitra = (typeInput, typeValue) => {
  return {type: 'SET_ADD_MITRA', typeInput, typeValue};
};
// send add mitra on endpoint
export const canvaserAddMitra = (data, token, navigation) => dispatch => {
  fetch(`${API_HOST.url}/mitra/create`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(response => {
      dispatch(setLoading(false));
      if (response.status === 'sukses') {
        console.log('Sukses menambah mitra');
      } else {
        console.log(`${response.status} - ${response.message}`);
      }
    })
    .catch(error => {
      console.log(error);
    });
};

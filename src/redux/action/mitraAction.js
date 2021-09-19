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

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
// add mitra
export const addMitra = (typeInput, typeValue) => {
  return {type: 'SET_ADD_MITRA', typeInput, typeValue};
};

/* SET DEFAULT SEMUA STATE */
export const setDefault = () => {
  return {type: 'SET_DEFAULT'};
};

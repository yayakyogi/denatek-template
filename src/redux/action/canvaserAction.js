// set photoOutUri
export const photoOutUri = (uriPhoto, mainPhoto) => {
  return {type: 'SET_PHOTO_OUT_URI', uriPhoto, mainPhoto};
};
// set photoInUri
export const photoInUri = (uriPhoto, altPhoto) => {
  return {type: 'SET_PHOTO_IN_URI', uriPhoto, altPhoto};
};

// delete photoOutUri
export const deletePhotoOutUri = () => {
  return {type: 'DELETE_PHOTO_OUT_URI'};
};
// delete photoInUri
export const deletePhotoInUri = () => {
  return {type: 'DELETE_PHOTO_IN_URI'};
};

// canvaser visitLog
export const canvaserVisitLog = (typeInput, typeValue) => {
  return {type: 'SET_VISIT_LOG', typeInput, typeValue};
};

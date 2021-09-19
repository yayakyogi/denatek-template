const initialState = {
  visitPhotoOutUri: '',
  visitPhotoInUri: '',
  addPhotoOutUri: '',
  addPhotoInUri: '',
  visitLog: {
    userId: '',
    mitraId: '',
    mitraReportSale: '',
    productMarketerSale: '',
    notes: '',
    mainPhoto: '',
    altPhoto: '',
  },
  addMitra: {
    name: '',
    phoneNumber: '',
    addressDetail: '',
    areaCode: '',
    mainPhoto: '',
    altPhoto: '',
    gpsLogId: '',
    canvaser: '', // user_id
  },
};

const canvaserReducer = (state = initialState, action) => {
  // set default semua state
  if (action.type === 'SET_DEFAULT') {
    return {
      ...state,
      visitPhotoOutUri: '',
      visitPhotoInUri: '',
      addPhotoOutUri: '',
      addPhotoInUri: '',
      visitLog: {
        ...state.visitLog,
        userId: '',
        mitraId: '',
        mitraReportSale: '',
        productMarketerSale: '',
        notes: '',
        mainPhoto: '',
        altPhoto: '',
      },
      addMitra: {
        ...state.addMitra,
        name: '',
        phoneNumber: '',
        addressDetail: '',
        areaCode: '',
        mainPhoto: '',
        altPhoto: '',
        gpsLogId: '',
        canvaser: '', // user_id
      },
    };
  }

  // REDUCER VISIT LOG (DETAIL KUNJUNGAN)
  if (action.type === 'VISIT_PHOTO_OUT_URI') {
    return {
      ...state,
      visitPhotoOutUri: action.uriPhoto,
      visitLog: {
        ...state.visitLog,
        mainPhoto: action.mainPhoto,
      },
    };
  }
  if (action.type === 'VISIT_PHOTO_IN_URI') {
    return {
      ...state,
      visitPhotoInUri: action.uriPhoto,
      visitLog: {
        ...state.visitLog,
        altPhoto: action.altPhoto,
      },
    };
  }
  if (action.type === 'CLEAR_VISIT_PHOTO_OUT_URI') {
    return {
      ...state,
      visitPhotoOutUri: '',
      visitLog: {
        ...state.visitLog,
        mainPhoto: '',
      },
    };
  }
  if (action.type === 'CLEAR_VISIT_PHOTO_IN_URI') {
    return {
      ...state,
      visitPhotoInUri: '',
      visitLog: {
        ...state.visitLog,
        altPhoto: '',
      },
    };
  }
  if (action.type === 'SET_VISIT_LOG') {
    return {
      ...state,
      visitLog: {
        ...state.visitLog,
        [action.typeInput]: action.typeValue,
      },
    };
  }

  // REDUCER ADD MITRA (CANVASER MENAMBAHKAN MITRA)
  if (action.type === 'ADD_PHOTO_OUT_URI') {
    return {
      ...state,
      addPhotoOutUri: action.uriPhoto,
      addMitra: {
        ...state.addMitra,
        mainPhoto: action.mainPhoto,
      },
    };
  }
  if (action.type === 'ADD_PHOTO_IN_URI') {
    return {
      ...state,
      addPhotoInUri: action.uriPhoto,
      addMitra: {
        ...state.addMitra,
        altPhoto: action.altPhoto,
      },
    };
  }
  if (action.type === 'CLEAR_ADD_PHOTO_OUT_URI') {
    return {
      ...state,
      addPhotoOutUri: '',
      addMitra: {
        ...state.addMitra,
        mainPhoto: '',
      },
    };
  }
  if (action.type === 'CLEAR_ADD_PHOTO_IN_URI') {
    return {
      ...state,
      addPhotoInUri: '',
      addMitra: {
        ...state.addMitra,
        altPhoto: '',
      },
    };
  }
  if (action.type === 'SET_ADD_MITRA') {
    return {
      ...state,
      addMitra: {
        ...state.addMitra,
        [action.typeInput]: action.typeValue,
      },
    };
  }
  return state;
};

export default canvaserReducer;

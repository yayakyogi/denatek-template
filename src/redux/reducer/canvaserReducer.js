const initialState = {
  photoOutUri: '',
  photoInUri: '',
  // canvaser visitLog
  visitLog: {
    userId: '',
    mitraId: '',
    mitraReportSale: '',
    productMarketerSale: '',
    notes: '',
    mainPhoto: '',
    altPhoto: '',
  },
};

const canvaserReducer = (state = initialState, action) => {
  // set action photoOutUri
  if (action.type === 'SET_PHOTO_OUT_URI') {
    return {
      ...state,
      photoOutUri: action.uriPhoto,
      visitLog: {
        ...state.visitLog,
        mainPhoto: action.mainPhoto,
      },
    };
  }
  // set action photoInUri
  if (action.type === 'SET_PHOTO_IN_URI') {
    return {
      ...state,
      photoInUri: action.uriPhoto,
      visitLog: {
        ...state.visitLog,
        altPhoto: action.altPhoto,
      },
    };
  }
  // delete photoOutUri
  if (action.type === 'DELETE_PHOTO_OUT_URI') {
    return {
      ...state,
      photoOutUri: '',
      visitLog: {
        ...state.visitLog,
        mainPhoto: '',
      },
    };
  }
  // delete photoInUri
  if (action.type === 'DELETE_PHOTO_IN_URI') {
    return {
      ...state,
      photoInUri: '',
      visitLog: {
        ...state.visitLog,
        altPhoto: '',
      },
    };
  }
  // set action visit log
  if (action.type === 'SET_VISIT_LOG') {
    return {
      ...state,
      visitLog: {
        ...state.visitLog,
        [action.typeInput]: action.typeValue,
      },
    };
  }
  return state;
};

export default canvaserReducer;

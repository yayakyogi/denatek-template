const initialState = {
  // canvaser visitLog
  visitLog: {
    userId: '',
    mitraId: '',
    mitraReportSale: 0,
    productMarketerSale: 0,
    notes: '',
    mainPhoto: '',
    altPhoto: '',
  },
};

const canvaserReducer = (state = initialState, action) => {
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

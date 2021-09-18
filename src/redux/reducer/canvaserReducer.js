const initialState = {
  // reducer absen
  absent: {
    userId: '',
    checkIn: true,
    // checkInPhoto: '',
    checkInLatLng: '',
  },
};

const canvaserReducer = (state = initialState, action) => {
  if (action.type === 'SET_ABSENT') {
    return {
      ...state,
      absent: {
        ...state.absent,
        userId: action.userId,
        checkInPhoto: action.checkInPhoto,
        checkInLatLng: action.checkInLatLng,
      },
    };
  }
  if (action.type === 'SET_DEFAULT') {
    return {
      ...state,
      absent: {
        ...state.absent,
        userId: '',
        checkIn: true,
        // checkInPhoto: '',
        checkInLatLng: '',
      },
    };
  }
  return state;
};

export default canvaserReducer;

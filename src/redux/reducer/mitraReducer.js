const initialState = {
  photoUri: '',
  // reducer absen
  absent: {
    userId: '',
    checkIn: true,
    checkInPhoto: '',
    checkInLatLng: '',
  },
};

const mitraReducer = (state = initialState, action) => {
  // reducer set photoUri
  if (action.type === 'SET_PHOTO_ABSENT') {
    return {
      ...state,
      photoUri: action.value,
      absent: {
        ...state.absent,
        checkInPhoto: action.valueBase64,
      },
    };
  }
  // reducer absen
  if (action.type === 'SET_ABSENT') {
    return {
      ...state,
      absent: {
        ...state.absent,
        userId: action.userId,
        checkInLatLng: action.checkInLatLng,
      },
    };
  }
  // reducer set default
  if (action.type === 'SET_DEFAULT') {
    return {
      ...state,
      photoUri: '',
      absent: {
        ...state.absent,
        userId: '',
        checkIn: true,
        checkInPhoto: '',
        checkInLatLng: '',
      },
    };
  }
  return state;
};

export default mitraReducer;

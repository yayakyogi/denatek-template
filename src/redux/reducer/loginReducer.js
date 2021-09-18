const initialState = {
  form: {
    email: '',
    password: '',
  },
  showPassword: false,
  isCanvaser: true,
  isMarketer: false,
};

const loginReducer = (state = initialState, action) => {
  // ubah value dari form
  if (action.type === 'SET_FORM') {
    return {
      ...state,
      form: {
        ...state.form,
        [action.inputType]: action.inputValue,
      },
    };
  }
  // set form ke default
  if (action.type === 'CLEAR_FORM') {
    return {
      ...state,
      form: {
        email: '',
        password: '',
      },
    };
  }
  // ubah value canvaser
  if (action.type === 'SET_CANVASER') {
    return {
      ...state,
      isCanvaser: action.value,
    };
  }
  // ubah value canvaser
  if (action.type === 'SET_MARKETER') {
    return {
      ...state,
      isMarketer: action.value,
    };
  }
  // ubah state showPassword
  if (action.type === 'SET_SHOW_PASSWORD') {
    return {
      ...state,
      showPassword: action.value,
    };
  }
  return state;
};

export default loginReducer;

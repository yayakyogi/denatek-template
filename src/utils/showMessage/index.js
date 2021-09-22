import {showMessage as showToast} from 'react-native-flash-message';

import {fonts} from '../fonts';

export const showMessage = (message, type) => {
  showToast({
    message,
    type: type === 'success' ? 'success' : 'danger',
    backgroundColor: type === 'success' ? '#1ABC9C' : '#D9435E',
    duration: 4000,
    icon: type === 'success' ? 'success' : 'danger',
    titleStyle: {fontSize: 15, fontFamily: fonts.primary.BLD},
  });
};

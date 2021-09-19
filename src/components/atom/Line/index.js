import React from 'react';
import {View} from 'react-native';

const Line = ({height, color}) => {
  return <View style={{height: height, backgroundColor: color}} />;
};

export default Line;

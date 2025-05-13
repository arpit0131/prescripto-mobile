import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const ArrowIcon = (props) => (
  <Svg width={24} height={24} viewBox='0 0 24 24' fill='none' {...props}>
    <Path d='M5 12h14M12 5l7 7-7 7' stroke='black' strokeWidth={2} />
  </Svg>
);

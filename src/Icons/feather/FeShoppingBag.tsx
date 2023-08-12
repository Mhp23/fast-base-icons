import React from 'react';
import SvgWrap from '../../SvgWrap';
import {Path} from 'react-native-svg';
import type {SvgIconProps} from '../../types';
import {DEFAULT_COLOR} from '../../constants';

const FeShoppingBag = React.forwardRef<any, Omit<SvgIconProps, 'mode'>>(
  ({color = DEFAULT_COLOR, ...rest}, ref) => {
    return (
      <SvgWrap
        ref={ref}
        fill="none"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...rest}>
        <Path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18" />
        <Path d="M16 10a4 4 0 0 1-8 0" />
      </SvgWrap>
    );
  },
);

export default FeShoppingBag;

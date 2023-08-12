import React from 'react';
import SvgWrap from '../../SvgWrap';
import {Path} from 'react-native-svg';
import type {SvgIconProps} from '../../types';
import {DEFAULT_COLOR} from '../../constants';

const FeSend = React.forwardRef<any, Omit<SvgIconProps, 'mode'>>(
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
        <Path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z" />
      </SvgWrap>
    );
  },
);

export default FeSend;

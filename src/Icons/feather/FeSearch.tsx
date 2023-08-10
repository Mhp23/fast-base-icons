import React from 'react';
import SvgWrap from '../../SvgWrap';
import {Circle, Path} from 'react-native-svg';
import type {SvgIconProps} from '../../types';
import {DEFAULT_COLOR} from '../../constants';

const FeSearch = React.forwardRef<any, Omit<SvgIconProps, 'mode'>>(
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
        <Circle cx={11} cy={11} r={8} />
        <Path d="m21 21-4.35-4.35" />
      </SvgWrap>
    );
  },
);

export default FeSearch;

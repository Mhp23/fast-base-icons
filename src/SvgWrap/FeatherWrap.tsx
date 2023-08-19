import React from 'react';
import RootWrap from './RootWrap';
import type {SvgIconProps} from '../types';
import {DEFAULT_COLOR} from '../constants';
import {type SvgProps} from 'react-native-svg';

const FeatherWrap = React.forwardRef<any, SvgProps & SvgIconProps>(
  ({children, color = DEFAULT_COLOR, ...rest}, ref) => {
    return (
      <RootWrap
        ref={ref}
        fill="none"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...rest}>
        {children}
      </RootWrap>
    );
  },
);

export default React.memo(FeatherWrap);

import React from 'react';
import SvgWrap from '../../SvgWrap';
import type {SvgIconProps} from '../../types';
import {DEFAULT_COLOR} from '../../constants';
import {Circle, Path, Rect} from 'react-native-svg';

const FeImage = React.forwardRef<any, Omit<SvgIconProps, 'mode'>>(
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
        <Rect width={18} height={18} x={3} y={3} rx={2} ry={2} />
        <Circle cx={8.5} cy={8.5} r={1.5} />
        <Path d="m21 15-5-5L5 21" />
      </SvgWrap>
    );
  },
);

export default FeImage;

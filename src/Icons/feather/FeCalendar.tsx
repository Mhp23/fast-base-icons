import React from 'react';
import {FeatherWrap} from '../../SvgWrap';
import {Path, Rect} from 'react-native-svg';
import type {SvgIconProps} from '../../types';

const FeCalendar = React.forwardRef<any, Omit<SvgIconProps, 'mode'>>(
  (props, ref) => {
    return (
      <FeatherWrap ref={ref} {...props}>
        <Rect width={18} height={18} x={3} y={4} rx={2} ry={2} />
        <Path d="M16 2v4M8 2v4M3 10h18" />
      </FeatherWrap>
    );
  },
);

export default FeCalendar;

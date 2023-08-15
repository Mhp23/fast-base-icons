import React from 'react';
import {Path} from 'react-native-svg';
import {FeatherWrap} from '../../SvgWrap';
import type {SvgIconProps} from '../../types';

const FeHome = React.forwardRef<any, Omit<SvgIconProps, 'mode'>>(
  (props, ref) => {
    return (
      <FeatherWrap ref={ref} {...props}>
        <Path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <Path d="M9 22V12h6v10" />
      </FeatherWrap>
    );
  },
);

FeHome.displayName = 'FeHome';

export default FeHome;

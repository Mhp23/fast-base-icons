import React from 'react';
import {Path} from 'react-native-svg';
import {FeatherWrap} from '../../SvgWrap';
import type {SvgIconProps} from '../../types';

const FeMenu = React.forwardRef<any, Omit<SvgIconProps, 'mode'>>(
  (props, ref) => {
    return (
      <FeatherWrap ref={ref} {...props}>
        <Path d="M3 12h18M3 6h18M3 18h18" />
      </FeatherWrap>
    );
  },
);

FeMenu.displayName = 'FeMenu';

export default FeMenu;

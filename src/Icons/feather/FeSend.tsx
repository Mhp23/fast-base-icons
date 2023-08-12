import React from 'react';
import {Path} from 'react-native-svg';
import {FeatherWrap} from '../../SvgWrap';
import type {SvgIconProps} from '../../types';

const FeSend = React.forwardRef<any, Omit<SvgIconProps, 'mode'>>(
  (props, ref) => {
    return (
      <FeatherWrap ref={ref} {...props}>
        <Path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z" />
      </FeatherWrap>
    );
  },
);

export default FeSend;

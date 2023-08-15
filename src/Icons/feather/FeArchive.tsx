import React from 'react';
import {Path} from 'react-native-svg';
import {FeatherWrap} from '../../SvgWrap';
import type {SvgIconProps} from '../../types';

const FeArchive = React.forwardRef<any, Omit<SvgIconProps, 'mode'>>(
  (props, ref) => {
    return (
      <FeatherWrap ref={ref} {...props}>
        <Path d="M21 8v13H3V8M1 3h22v5H1zM10 12h4" />
      </FeatherWrap>
    );
  },
);

FeArchive.displayName = 'FeArchive';

export default FeArchive;

import React from 'react';
import {FeatherWrap} from '../../SvgWrap';
import {Circle, Path} from 'react-native-svg';
import type {SvgIconProps} from '../../types';

const FeSearch = React.forwardRef<any, Omit<SvgIconProps, 'mode'>>(
  (props, ref) => {
    return (
      <FeatherWrap ref={ref} {...props}>
        <Circle cx={11} cy={11} r={8} />
        <Path d="m21 21-4.35-4.35" />
      </FeatherWrap>
    );
  },
);

FeSearch.displayName = 'FeSearch';

export default FeSearch;

import React from 'react';
import {FeatherWrap} from '../../SvgWrap';
import {Circle, Path} from 'react-native-svg';
import type {SvgIconProps} from '../../types';

const FeUser = React.forwardRef<
  any,
  SvgIconProps<'normal' | 'plus' | 'minus' | 'x' | 'check' | 'users'>
>(({mode = 'normal', ...rest}, ref) => {
  const PathComponent = React.useMemo(() => {
    return mode === 'plus' ? (
      <React.Fragment>
        <Path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <Circle cx={8.5} cy={7} r={4} />
        <Path d="M20 8v6M23 11h-6" />
      </React.Fragment>
    ) : mode === 'minus' ? (
      <React.Fragment>
        <Path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <Circle cx={8.5} cy={7} r={4} />
        <Path d="M23 11h-6" />
      </React.Fragment>
    ) : mode === 'x' ? (
      <React.Fragment>
        <Path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <Circle cx={8.5} cy={7} r={4} />
        <Path d="m18 8 5 5M23 8l-5 5" />
      </React.Fragment>
    ) : mode === 'check' ? (
      <React.Fragment>
        <Path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <Circle cx={8.5} cy={7} r={4} />
        <Path d="m17 11 2 2 4-4" />
      </React.Fragment>
    ) : mode === 'users' ? (
      <React.Fragment>
        <Path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <Circle cx={9} cy={7} r={4} />
        <Path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </React.Fragment>
    ) : mode === 'normal' ? (
      <React.Fragment>
        <Path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <Circle cx={12} cy={7} r={4} />
      </React.Fragment>
    ) : null;
  }, [mode]);

  return (
    <FeatherWrap ref={ref} {...rest}>
      {PathComponent}
    </FeatherWrap>
  );
});

export default FeUser;

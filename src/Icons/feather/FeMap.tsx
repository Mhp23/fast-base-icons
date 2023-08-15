import React from 'react';
import {FeatherWrap} from '../../SvgWrap';
import type {SvgIconProps} from '../../types';
import {Circle, Path} from 'react-native-svg';

const FeMap = React.forwardRef<
  any,
  SvgIconProps<'normal' | 'pin' | 'navigation'>
>(({mode = 'normal', ...rest}, ref) => {
  const PathComponent = React.useMemo(() => {
    return mode === 'pin' ? (
      <React.Fragment>
        <Path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <Circle cx={12} cy={10} r={3} />
      </React.Fragment>
    ) : mode === 'navigation' ? (
      <Path d="m3 11 19-9-9 19-2-8-8-2z" />
    ) : mode === 'normal' ? (
      <Path d="M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4zM8 2v16M16 6v16" />
    ) : null;
  }, [mode]);

  return (
    <FeatherWrap ref={ref} {...rest}>
      {PathComponent}
    </FeatherWrap>
  );
});

export default FeMap;

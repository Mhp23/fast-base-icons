import React from 'react';
import {FeatherWrap} from '../../SvgWrap';
import type {SvgIconProps} from '../../types';
import {Circle, Path} from 'react-native-svg';

const FeTime = React.forwardRef<
  any,
  SvgIconProps<'normal' | 'watch' | 'sunrise' | 'sunset'>
>(({mode = 'normal', ...rest}, ref) => {
  const PathComponent = React.useMemo(() => {
    return mode === 'watch' ? (
      <React.Fragment>
        <Circle cx={12} cy={12} r={7} />
        <Path d="M12 9v3l1.5 1.5M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83" />
      </React.Fragment>
    ) : mode === 'sunrise' ? (
      <Path d="M17 18a5 5 0 0 0-10 0M12 2v7M4.22 10.22l1.42 1.42M1 18h2M21 18h2M18.36 11.64l1.42-1.42M23 22H1M8 6l4-4 4 4" />
    ) : mode === 'sunset' ? (
      <Path d="M17 18a5 5 0 0 0-10 0M12 9V2M4.22 10.22l1.42 1.42M1 18h2M21 18h2M18.36 11.64l1.42-1.42M23 22H1M16 5l-4 4-4-4" />
    ) : mode === 'normal' ? (
      <React.Fragment>
        <Circle cx={12} cy={12} r={10} />
        <Path d="M12 6v6l4 2" />
      </React.Fragment>
    ) : null;
  }, [mode]);

  return (
    <FeatherWrap ref={ref} {...rest}>
      {PathComponent}
    </FeatherWrap>
  );
});

export default FeTime;

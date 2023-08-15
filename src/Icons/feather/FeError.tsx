import React from 'react';
import {FeatherWrap} from '../../SvgWrap';
import type {SvgIconProps} from '../../types';
import {Circle, Path} from 'react-native-svg';

const FeError = React.forwardRef<
  any,
  SvgIconProps<'circle' | 'tirangle' | 'octagon'>
>(({mode = 'circle', ...rest}, ref) => {
  const PathComponent = React.useMemo(() => {
    return mode === 'circle' ? (
      <React.Fragment>
        <Circle cx={12} cy={12} r={10} />
        <Path d="M12 8v4M12 16h.01" />
      </React.Fragment>
    ) : mode === 'tirangle' ? (
      <Path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4M12 17h.01" />
    ) : mode === 'octagon' ? (
      <Path d="M7.86 2h8.28L22 7.86v8.28L16.14 22H7.86L2 16.14V7.86L7.86 2zM12 8v4M12 16h.01" />
    ) : null;
  }, [mode]);

  return (
    <FeatherWrap ref={ref} {...rest}>
      {PathComponent}
    </FeatherWrap>
  );
});

FeError.displayName = 'FeError';

export default FeError;

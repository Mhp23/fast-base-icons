import React from 'react';
import {FeatherWrap} from '../../SvgWrap';
import type {SvgIconProps} from '../../types';
import {Circle, Path, Rect} from 'react-native-svg';

const FeX = React.forwardRef<
  any,
  SvgIconProps<'normal' | 'circle' | 'square' | 'octagon'>
>(({mode = 'normal', ...rest}, ref) => {
  const PathComponent = React.useMemo(() => {
    return mode === 'circle' ? (
      <React.Fragment>
        <Circle cx={12} cy={12} r={10} />
        <Path d="m15 9-6 6M9 9l6 6" />
      </React.Fragment>
    ) : mode === 'square' ? (
      <React.Fragment>
        <Rect width={18} height={18} x={3} y={3} rx={2} ry={2} />
        <Path d="m9 9 6 6M15 9l-6 6" />
      </React.Fragment>
    ) : mode === 'octagon' ? (
      <Path d="M7.86 2h8.28L22 7.86v8.28L16.14 22H7.86L2 16.14V7.86L7.86 2zM15 9l-6 6M9 9l6 6" />
    ) : mode === 'normal' ? (
      <Path d="M18 6 6 18M6 6l12 12" />
    ) : null;
  }, [mode]);

  return (
    <FeatherWrap ref={ref} {...rest}>
      {PathComponent}
    </FeatherWrap>
  );
});

export default FeX;

import React from 'react';
import {FeatherWrap} from '../../SvgWrap';
import type {SvgIconProps} from '../../types';
import {Circle, Path, Rect} from 'react-native-svg';

const FeMinus = React.forwardRef<
  any,
  SvgIconProps<'normal' | 'circle' | 'square'>
>(({mode = 'normal', ...rest}, ref) => {
  const PathComponent = React.useMemo(() => {
    return mode === 'circle' ? (
      <React.Fragment>
        <Circle cx={12} cy={12} r={10} />
        <Path d="M8 12h8" />
      </React.Fragment>
    ) : mode === 'square' ? (
      <React.Fragment>
        <Rect width={18} height={18} x={3} y={3} rx={2} ry={2} />
        <Path d="M8 12h8" />
      </React.Fragment>
    ) : mode === 'normal' ? (
      <Path d="M5 12h14" />
    ) : null;
  }, [mode]);

  return (
    <FeatherWrap ref={ref} {...rest}>
      {PathComponent}
    </FeatherWrap>
  );
});

FeMinus.displayName = 'FeMinus';

export default FeMinus;

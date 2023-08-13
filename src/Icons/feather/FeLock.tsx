import React from 'react';
import {Path, Rect} from 'react-native-svg';
import {FeatherWrap} from '../../SvgWrap';
import type {SvgIconProps} from '../../types';

const FeLock = React.forwardRef<any, SvgIconProps<'lock' | 'unlock'>>(
  ({mode = 'lock', ...rest}, ref) => {
    const PathComponent = React.useMemo(() => {
      return mode === 'unlock' ? (
        <React.Fragment>
          <Rect width={18} height={11} x={3} y={11} rx={2} ry={2} />
          <Path d="M7 11V7a5 5 0 0 1 9.9-1" />
        </React.Fragment>
      ) : mode === 'lock' ? (
        <React.Fragment>
          <Rect width={18} height={11} x={3} y={11} rx={2} ry={2} />
          <Path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </React.Fragment>
      ) : null;
    }, [mode]);

    return (
      <FeatherWrap ref={ref} {...rest}>
        {PathComponent}
      </FeatherWrap>
    );
  },
);

export default FeLock;

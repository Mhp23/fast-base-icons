import React from 'react';
import {FeatherWrap} from '../../SvgWrap';
import {Path, Rect} from 'react-native-svg';
import type {SvgIconProps} from '../../types';

const FeVideo = React.forwardRef<any, SvgIconProps<'normal' | 'off' | 'film'>>(
  ({mode = 'normal', ...rest}, ref) => {
    const PathComponent = React.useMemo(() => {
      return mode === 'off' ? (
        <Path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10M1 1l22 22" />
      ) : mode === 'film' ? (
        <React.Fragment>
          <Rect width={20} height={20} x={2} y={2} rx={2.18} ry={2.18} />
          <Path d="M7 2v20M17 2v20M2 12h20M2 7h5M2 17h5M17 17h5M17 7h5" />
        </React.Fragment>
      ) : mode === 'normal' ? (
        <React.Fragment>
          <Path d="m23 7-7 5 7 5V7z" />
          <Rect width={15} height={14} x={1} y={5} rx={2} ry={2} />
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

export default FeVideo;

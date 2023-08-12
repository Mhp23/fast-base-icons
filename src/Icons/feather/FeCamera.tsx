import React from 'react';
import SvgWrap from '../../SvgWrap';
import type {SvgIconProps} from '../../types';
import {DEFAULT_COLOR} from '../../constants';
import {Circle, Path} from 'react-native-svg';

const FeCamera = React.forwardRef<any, SvgIconProps<'normal' | 'off'>>(
  ({mode = 'normal', color = DEFAULT_COLOR, ...rest}, ref) => {
    const PathComponent = React.useMemo(() => {
      return mode === 'off' ? (
        <Path d="m1 1 22 22M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56" />
      ) : mode === 'normal' ? (
        <React.Fragment>
          <Path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
          <Circle cx={12} cy={13} r={4} />
        </React.Fragment>
      ) : null;
    }, [mode]);

    return (
      <SvgWrap
        ref={ref}
        fill="none"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...rest}>
        {PathComponent}
      </SvgWrap>
    );
  },
);

export default FeCamera;

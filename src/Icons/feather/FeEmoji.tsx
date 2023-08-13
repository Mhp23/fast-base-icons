import React from 'react';
import {FeatherWrap} from '../../SvgWrap';
import type {SvgIconProps} from '../../types';
import {Circle, Path} from 'react-native-svg';

const FeEmoji = React.forwardRef<any, SvgIconProps<'smile' | 'sad' | 'meh'>>(
  ({mode = 'smile', ...rest}, ref) => {
    const PathComponent = React.useMemo(() => {
      return mode === 'smile' ? (
        <React.Fragment>
          <Circle cx={12} cy={12} r={10} />
          <Path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" />
        </React.Fragment>
      ) : mode === 'sad' ? (
        <React.Fragment>
          <Circle cx={12} cy={12} r={10} />
          <Path d="M16 16s-1.5-2-4-2-4 2-4 2M9 9h.01M15 9h.01" />
        </React.Fragment>
      ) : mode === 'meh' ? (
        <React.Fragment>
          <Circle cx={12} cy={12} r={10} />
          <Path d="M8 15h8M9 9h.01M15 9h.01" />
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

export default FeEmoji;

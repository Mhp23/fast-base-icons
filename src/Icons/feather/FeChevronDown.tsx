import React from 'react';
import {Path} from 'react-native-svg';
import {FeatherWrap} from '../../SvgWrap';
import type {SvgIconProps} from '../../types';

const FeChevronDown = React.forwardRef<any, SvgIconProps<'single' | 'double'>>(
  ({mode = 'single', ...rest}, ref) => {
    const PathComponent = React.useMemo(() => {
      return mode === 'double' ? (
        <Path d="m7 13 5 5 5-5M7 6l5 5 5-5" />
      ) : mode === 'single' ? (
        <Path d="m6 9 6 6 6-6" />
      ) : null;
    }, [mode]);

    return (
      <FeatherWrap ref={ref} {...rest}>
        {PathComponent}
      </FeatherWrap>
    );
  },
);

FeChevronDown.displayName = 'FeChevronDown';

export default FeChevronDown;

import React from 'react';
import {Path} from 'react-native-svg';
import {FeatherWrap} from '../../SvgWrap';
import type {SvgIconProps} from '../../types';

const FeChevronLeft = React.forwardRef<any, SvgIconProps<'single' | 'double'>>(
  ({mode = 'single', ...rest}, ref) => {
    const PathComponent = React.useMemo(() => {
      return mode === 'double' ? (
        <Path d="m11 17-5-5 5-5M18 17l-5-5 5-5" />
      ) : mode === 'single' ? (
        <Path d="m15 18-6-6 6-6" />
      ) : null;
    }, [mode]);

    return (
      <FeatherWrap ref={ref} {...rest}>
        {PathComponent}
      </FeatherWrap>
    );
  },
);

export default FeChevronLeft;

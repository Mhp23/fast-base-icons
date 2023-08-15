import React from 'react';
import {Path} from 'react-native-svg';
import {FeatherWrap} from '../../SvgWrap';
import type {SvgIconProps} from '../../types';

const FeChevronUp = React.forwardRef<any, SvgIconProps<'single' | 'double'>>(
  ({mode = 'single', ...rest}, ref) => {
    const PathComponent = React.useMemo(() => {
      return mode === 'double' ? (
        <Path d="m17 11-5-5-5 5M17 18l-5-5-5 5" />
      ) : mode === 'single' ? (
        <Path d="m18 15-6-6-6 6" />
      ) : null;
    }, [mode]);

    return (
      <FeatherWrap ref={ref} {...rest}>
        {PathComponent}
      </FeatherWrap>
    );
  },
);

FeChevronUp.displayName = 'FeChevronUp';

export default FeChevronUp;

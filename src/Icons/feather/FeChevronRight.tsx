import React from 'react';
import {Path} from 'react-native-svg';
import {FeatherWrap} from '../../SvgWrap';
import type {SvgIconProps} from '../../types';

const FeChevronRight = React.forwardRef<any, SvgIconProps<'single' | 'double'>>(
  ({mode = 'single', ...rest}, ref) => {
    const PathComponent = React.useMemo(() => {
      return mode === 'double' ? (
        <Path d="m13 17 5-5-5-5M6 17l5-5-5-5" />
      ) : mode === 'single' ? (
        <Path d="m9 18 6-6-6-6" />
      ) : null;
    }, [mode]);

    return (
      <FeatherWrap ref={ref} {...rest}>
        {PathComponent}
      </FeatherWrap>
    );
  },
);

FeChevronRight.displayName = 'FeChevronRight';

export default FeChevronRight;

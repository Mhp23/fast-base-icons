import React from 'react';
import {Path} from 'react-native-svg';
import {FeatherWrap} from '../../SvgWrap';
import type {SvgIconProps} from '../../types';

const FeChart = React.forwardRef<any, SvgIconProps<'normal' | 'alt' | 'pie'>>(
  ({mode = 'normal', ...rest}, ref) => {
    const PathComponent = React.useMemo(() => {
      return mode === 'alt' ? (
        <Path d="M18 20V10M12 20V4M6 20v-6" />
      ) : mode === 'pie' ? (
        <React.Fragment>
          <Path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
          <Path d="M22 12A10 10 0 0 0 12 2v10z" />
        </React.Fragment>
      ) : mode === 'normal' ? (
        <Path d="M12 20V10M18 20V4M6 20v-4" />
      ) : null;
    }, [mode]);

    return (
      <FeatherWrap ref={ref} {...rest}>
        {PathComponent}
      </FeatherWrap>
    );
  },
);

FeChart.displayName = 'FeChart';

export default FeChart;

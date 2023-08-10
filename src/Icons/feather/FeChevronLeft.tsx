import React from 'react';
import SvgWrap from '../../SvgWrap';
import {Path} from 'react-native-svg';
import type {SvgIconProps} from '../../types';
import {DEFAULT_COLOR} from '../../constants';

const FeChevronLeft = React.forwardRef<any, SvgIconProps<'single' | 'double'>>(
  ({mode = 'single', color = DEFAULT_COLOR, ...rest}, ref) => {
    const PathComponent = React.useMemo(() => {
      return mode === 'double' ? (
        <Path d="m11 17-5-5 5-5M18 17l-5-5 5-5" />
      ) : mode === 'single' ? (
        <Path d="m15 18-6-6 6-6" />
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

export default FeChevronLeft;

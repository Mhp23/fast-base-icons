import React from 'react';
import SvgWrap from '../../SvgWrap';
import {Path} from 'react-native-svg';
import type {SvgIconProps} from '../../types';
import {DEFAULT_COLOR} from '../../constants';

const FeChevronUp = React.forwardRef<any, SvgIconProps<'single' | 'double'>>(
  ({mode = 'single', color = DEFAULT_COLOR, ...rest}, ref) => {
    const PathComponent = React.useMemo(() => {
      return mode === 'double' ? (
        <Path d="m17 11-5-5-5 5M17 18l-5-5-5 5" />
      ) : mode === 'single' ? (
        <Path d="m18 15-6-6-6 6" />
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

export default FeChevronUp;

import React from 'react';
import SvgWrap from '../../SvgWrap';
import {Path} from 'react-native-svg';
import type {SvgIconProps} from '../../types';
import {DEFAULT_COLOR} from '../../constants';

const BDots = React.forwardRef<
  any,
  SvgIconProps<
    'horizontal' | 'horizontal-rounded' | 'vertical' | 'vertical-rounded'
  >
>(({mode = 'horizontal', color = DEFAULT_COLOR, ...rest}, ref) => {
  const PathComponent = React.useMemo(() => {
    return mode === 'horizontal-rounded' ? (
      <Path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
    ) : mode === 'vertical' ? (
      <Path d="M10 10h4v4h-4zm0-6h4v4h-4zm0 12h4v4h-4z" />
    ) : mode === 'vertical-rounded' ? (
      <Path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
    ) : mode === 'horizontal' ? (
      <Path d="M10 10h4v4h-4zm6 0h4v4h-4zM4 10h4v4H4z" />
    ) : null;
  }, [mode]);

  return (
    <SvgWrap ref={ref} fill={color} {...rest}>
      {PathComponent}
    </SvgWrap>
  );
});

BDots.displayName = 'BDots';

export default BDots;

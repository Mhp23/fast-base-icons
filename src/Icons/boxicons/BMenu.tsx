import React from 'react';
import SvgWrap from '../../SvgWrap';
import {Path} from 'react-native-svg';
import type {SvgIconProps} from '../../types';
import {DEFAULT_COLOR} from '../../constants';

const BMenu = React.forwardRef<
  any,
  SvgIconProps<'normal' | 'alt-left' | 'alt-right'>
>(({mode = 'normal', color = DEFAULT_COLOR, ...rest}, ref) => {
  const PathComponent = React.useMemo(() => {
    return mode === 'alt-left' ? (
      <Path d="M4 11h12v2H4zm0-5h16v2H4zm0 12h7.235v-2H4z" />
    ) : mode === 'alt-right' ? (
      <Path d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z" />
    ) : mode === 'normal' ? (
      <Path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
    ) : null;
  }, [mode]);

  return (
    <SvgWrap ref={ref} fill={color} {...rest}>
      {PathComponent}
    </SvgWrap>
  );
});

BMenu.displayName = 'BMenu';

export default BMenu;

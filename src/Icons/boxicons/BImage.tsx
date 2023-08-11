import React from 'react';
import SvgWrap from '../../SvgWrap';
import {Circle, Path} from 'react-native-svg';
import type {SvgIconProps} from '../../types';
import {DEFAULT_COLOR} from '../../constants';

const BImage = React.forwardRef<
  any,
  SvgIconProps<'normal' | 'fill' | 'images'>
>(({mode = 'normal', color = DEFAULT_COLOR, ...rest}, ref) => {
  const PathComponent = React.useMemo(() => {
    return mode === 'fill' ? (
      <Path d="M19.999 4h-16c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-13.5 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5.5 10h-7l4-5 1.5 2 3-4 5.5 7h-7z" />
    ) : mode === 'images' ? (
      <React.Fragment>
        <Path d="M20 2H8c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM8 16V4h12l.002 12H8z" />
        <Path d="M4 8H2v12c0 1.103.897 2 2 2h12v-2H4V8z" />
        <Path d="m12 12-1-1-2 3h10l-4-6z" />
      </React.Fragment>
    ) : mode === 'normal' ? (
      <React.Fragment>
        <Circle cx={7.499} cy={9.5} r={1.5} />
        <Path d="m10.499 14-1.5-2-3 4h12l-4.5-6z" />
        <Path d="M19.999 4h-16c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-16 14V6h16l.002 12H3.999z" />
      </React.Fragment>
    ) : null;
  }, [mode]);

  return (
    <SvgWrap ref={ref} fill={color} {...rest}>
      {PathComponent}
    </SvgWrap>
  );
});

export default BImage;

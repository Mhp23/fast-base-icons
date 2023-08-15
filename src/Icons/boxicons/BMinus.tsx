import React from 'react';
import SvgWrap from '../../SvgWrap';
import type {SvgIconProps} from '../../types';
import {DEFAULT_COLOR} from '../../constants';
import {Path} from 'react-native-svg';

const BMinus = React.forwardRef<
  any,
  SvgIconProps<'normal' | 'fill' | 'circle' | 'circle-fill'>
>(({mode = 'math', color = DEFAULT_COLOR, ...rest}, ref) => {
  const PathComponent = React.useMemo(() => {
    return mode === 'fill' ? (
      <Path d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5zm12 10H7v-2h10v2z" />
    ) : mode === 'circle' ? (
      <React.Fragment>
        <Path d="M7 11h10v2H7z" />
        <Path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
      </React.Fragment>
    ) : mode === 'circle-fill' ? (
      <Path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm5 11H7v-2h10v2z" />
    ) : mode === 'normal' ? (
      <Path d="M5 11h14v2H5z" />
    ) : null;
  }, [mode]);

  return (
    <SvgWrap ref={ref} fill={color} {...rest}>
      {PathComponent}
    </SvgWrap>
  );
});

export default BMinus;

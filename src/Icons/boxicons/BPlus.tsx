import React from 'react';
import SvgWrap from '../../SvgWrap';
import type {SvgIconProps} from '../../types';
import {DEFAULT_COLOR} from '../../constants';
import {Path} from 'react-native-svg';

const BPlus = React.forwardRef<
  any,
  SvgIconProps<'normal' | 'fill' | 'circle' | 'circle-fill'>
>(({mode = 'math', color = DEFAULT_COLOR, ...rest}, ref) => {
  const PathComponent = React.useMemo(() => {
    return mode === 'fill' ? (
      <Path d="M5 21h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2zm2-10h4V7h2v4h4v2h-4v4h-2v-4H7v-2z" />
    ) : mode === 'circle' ? (
      <React.Fragment>
        <Path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4z" />
        <Path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
      </React.Fragment>
    ) : mode === 'circle-fill' ? (
      <Path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
    ) : mode === 'normal' ? (
      <Path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z" />
    ) : null;
  }, [mode]);

  return (
    <SvgWrap ref={ref} fill={color} {...rest}>
      {PathComponent}
    </SvgWrap>
  );
});

export default BPlus;

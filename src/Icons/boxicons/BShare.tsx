import React from 'react';
import SvgWrap from '../../SvgWrap';
import {Path} from 'react-native-svg';
import type {SvgIconProps} from '../../types';
import {DEFAULT_COLOR} from '../../constants';

const BShare = React.forwardRef<
  any,
  SvgIconProps<'normal' | 'fill' | 'alt' | 'alt-fill'>
>(({mode = 'normal', color = DEFAULT_COLOR, ...rest}, ref) => {
  const PathComponent = React.useMemo(() => {
    return mode === 'fill' ? (
      <Path d="M11 6.914V2.586L6.293 7.293l-3.774 3.774 3.841 3.201L11 18.135V13.9c8.146-.614 11 4.1 11 4.1 0-2.937-.242-5.985-2.551-8.293C16.765 7.022 12.878 6.832 11 6.914z" />
    ) : mode === 'alt' ? (
      <Path d="M5.5 15a3.51 3.51 0 0 0 2.36-.93l6.26 3.58a3.06 3.06 0 0 0-.12.85 3.53 3.53 0 1 0 1.14-2.57l-6.26-3.58a2.74 2.74 0 0 0 .12-.76l6.15-3.52A3.49 3.49 0 1 0 14 5.5a3.35 3.35 0 0 0 .12.85L8.43 9.6A3.5 3.5 0 1 0 5.5 15zm12 2a1.5 1.5 0 1 1-1.5 1.5 1.5 1.5 0 0 1 1.5-1.5zm0-13A1.5 1.5 0 1 1 16 5.5 1.5 1.5 0 0 1 17.5 4zm-12 6A1.5 1.5 0 1 1 4 11.5 1.5 1.5 0 0 1 5.5 10z" />
    ) : mode === 'alt-fill' ? (
      <Path d="M3 12c0 1.654 1.346 3 3 3 .794 0 1.512-.315 2.049-.82l5.991 3.424c-.018.13-.04.26-.04.396 0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3c-.794 0-1.512.315-2.049.82L8.96 12.397c.018-.131.04-.261.04-.397s-.022-.266-.04-.397l5.991-3.423c.537.505 1.255.82 2.049.82 1.654 0 3-1.346 3-3s-1.346-3-3-3-3 1.346-3 3c0 .136.022.266.04.397L8.049 9.82A2.982 2.982 0 0 0 6 9c-1.654 0-3 1.346-3 3z" />
    ) : mode === 'normal' ? (
      <Path d="M11 7.05V4a1 1 0 0 0-1-1 1 1 0 0 0-.7.29l-7 7a1 1 0 0 0 0 1.42l7 7A1 1 0 0 0 11 18v-3.1h.85a10.89 10.89 0 0 1 8.36 3.72 1 1 0 0 0 1.11.35A1 1 0 0 0 22 18c0-9.12-8.08-10.68-11-10.95zm.85 5.83a14.74 14.74 0 0 0-2 .13A1 1 0 0 0 9 14v1.59L4.42 11 9 6.41V8a1 1 0 0 0 1 1c.91 0 8.11.2 9.67 6.43a13.07 13.07 0 0 0-7.82-2.55z" />
    ) : null;
  }, [mode]);

  return (
    <SvgWrap ref={ref} fill={color} {...rest}>
      {PathComponent}
    </SvgWrap>
  );
});

BShare.displayName = 'BShare';

export default BShare;

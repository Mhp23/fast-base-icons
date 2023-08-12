import React from 'react';
import SvgWrap from '../../SvgWrap';
import {Path} from 'react-native-svg';
import type {SvgIconProps} from '../../types';
import {DEFAULT_COLOR} from '../../constants';

const BSend = React.forwardRef<any, SvgIconProps<'normal' | 'fill'>>(
  ({mode = 'normal', color = DEFAULT_COLOR, ...rest}, ref) => {
    const PathComponent = React.useMemo(() => {
      return mode === 'fill' ? (
        <Path d="m21.426 11.095-17-8A1 1 0 0 0 3.03 4.242l1.212 4.849L12 12l-7.758 2.909-1.212 4.849a.998.998 0 0 0 1.396 1.147l17-8a1 1 0 0 0 0-1.81z" />
      ) : mode === 'normal' ? (
        <Path d="m21.426 11.095-17-8A.999.999 0 0 0 3.03 4.242L4.969 12 3.03 19.758a.998.998 0 0 0 1.396 1.147l17-8a1 1 0 0 0 0-1.81zM5.481 18.197l.839-3.357L12 12 6.32 9.16l-.839-3.357L18.651 12l-13.17 6.197z" />
      ) : null;
    }, [mode]);

    return (
      <SvgWrap ref={ref} fill={color} {...rest}>
        {PathComponent}
      </SvgWrap>
    );
  },
);

export default BSend;

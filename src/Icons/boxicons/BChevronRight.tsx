import React from 'react';
import SvgWrap from '../../SvgWrap';
import {Path} from 'react-native-svg';
import type {SvgIconProps} from '../../types';
import {DEFAULT_COLOR} from '../../constants';

const BChevronRight = React.forwardRef<
  any,
  SvgIconProps<'normal' | 'circle' | 'square' | 'double'>
>(({mode = 'normal', color = DEFAULT_COLOR, ...rest}, ref) => {
  const PathComponent = React.useMemo(() => {
    return mode === 'circle' ? (
      <React.Fragment>
        <Path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
        <Path d="M9.293 7.707 13.586 12l-4.293 4.293 1.414 1.414L16.414 12l-5.707-5.707z" />
      </React.Fragment>
    ) : mode === 'square' ? (
      <React.Fragment>
        <Path d="M5 21h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM5 5h14l.001 14H5V5z" />
        <Path d="M9.293 7.707 13.586 12l-4.293 4.293 1.414 1.414L16.414 12l-5.707-5.707z" />
      </React.Fragment>
    ) : mode === 'double' ? (
      <React.Fragment>
        <Path d="M10.296 7.71 14.621 12l-4.325 4.29 1.408 1.42L17.461 12l-5.757-5.71z" />
        <Path d="M6.704 6.29 5.296 7.71 9.621 12l-4.325 4.29 1.408 1.42L12.461 12z" />
      </React.Fragment>
    ) : mode === 'normal' ? (
      <Path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" />
    ) : null;
  }, [mode]);

  return (
    <SvgWrap ref={ref} fill={color} {...rest}>
      {PathComponent}
    </SvgWrap>
  );
});

BChevronRight.displayName = 'BChevronRight';

export default BChevronRight;

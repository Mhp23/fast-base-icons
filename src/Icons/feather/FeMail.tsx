import React from 'react';
import {FeatherWrap} from '../../SvgWrap';
import type {SvgIconProps} from '../../types';
import {Circle, Path} from 'react-native-svg';

const FeMail = React.forwardRef<
  any,
  SvgIconProps<'mail' | 'at-sign' | 'voice' | 'inbox'>
>(({mode = 'mail', ...rest}, ref) => {
  const PathComponent = React.useMemo(() => {
    return mode === 'mail' ? (
      <React.Fragment>
        <Path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <Path d="m22 6-10 7L2 6" />
      </React.Fragment>
    ) : mode === 'at-sign' ? (
      <React.Fragment>
        <Circle cx={12} cy={12} r={4} />
        <Path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" />
      </React.Fragment>
    ) : mode === 'voice' ? (
      <React.Fragment>
        <Circle cx={5.5} cy={11.5} r={4.5} />
        <Circle cx={18.5} cy={11.5} r={4.5} />
        <Path d="M5.5 16h13" />
      </React.Fragment>
    ) : mode === 'inbox' ? (
      <React.Fragment>
        <Path d="M22 12h-6l-2 3h-4l-2-3H2" />
        <Path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
      </React.Fragment>
    ) : null;
  }, [mode]);

  return (
    <FeatherWrap ref={ref} {...rest}>
      {PathComponent}
    </FeatherWrap>
  );
});

FeMail.displayName = 'FeMail';

export default FeMail;

import React from 'react';
import {Circle} from 'react-native-svg';
import {FeatherWrap} from '../../SvgWrap';
import type {SvgIconProps} from '../../types';

const FeDots = React.forwardRef<any, SvgIconProps<'horizontal' | 'vertical'>>(
  ({mode = 'normal', ...rest}, ref) => {
    const PathComponent = React.useMemo(() => {
      return mode === 'horizontal' ? (
        <React.Fragment>
          <Circle cx={12} cy={12} r={1} />
          <Circle cx={19} cy={12} r={1} />
          <Circle cx={5} cy={12} r={1} />
        </React.Fragment>
      ) : mode === 'vertical' ? (
        <React.Fragment>
          <Circle cx={12} cy={12} r={1} />
          <Circle cx={12} cy={5} r={1} />
          <Circle cx={12} cy={19} r={1} />
        </React.Fragment>
      ) : null;
    }, [mode]);

    return (
      <FeatherWrap ref={ref} {...rest}>
        {PathComponent}
      </FeatherWrap>
    );
  },
);

FeDots.displayName = 'FeDots';

export default FeDots;

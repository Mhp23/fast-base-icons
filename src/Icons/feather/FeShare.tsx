import React from 'react';
import {FeatherWrap} from '../../SvgWrap';
import type {SvgIconProps} from '../../types';
import {Circle, Path} from 'react-native-svg';

const FeShare = React.forwardRef<any, SvgIconProps<'normal' | 'alt'>>(
  ({mode = 'normal', ...rest}, ref) => {
    const PathComponent = React.useMemo(() => {
      return mode === 'alt' ? (
        <React.Fragment>
          <Circle cx={18} cy={5} r={3} />
          <Circle cx={6} cy={12} r={3} />
          <Circle cx={18} cy={19} r={3} />
          <Path d="m8.59 13.51 6.83 3.98M15.41 6.51l-6.82 3.98" />
        </React.Fragment>
      ) : mode === 'normal' ? (
        <Path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M16 6l-4-4-4 4M12 2v13" />
      ) : null;
    }, [mode]);

    return (
      <FeatherWrap ref={ref} {...rest}>
        {PathComponent}
      </FeatherWrap>
    );
  },
);

FeShare.displayName = 'FeShare';

export default FeShare;

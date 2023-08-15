import React from 'react';
import {FeatherWrap} from '../../SvgWrap';
import type {SvgIconProps} from '../../types';
import {Circle, Path, Rect} from 'react-native-svg';

const FeImage = React.forwardRef<any, Omit<SvgIconProps, 'mode'>>(
  (props, ref) => {
    return (
      <FeatherWrap ref={ref} {...props}>
        <Rect width={18} height={18} x={3} y={3} rx={2} ry={2} />
        <Circle cx={8.5} cy={8.5} r={1.5} />
        <Path d="m21 15-5-5L5 21" />
      </FeatherWrap>
    );
  },
);

FeImage.displayName = 'FeImage';

export default FeImage;

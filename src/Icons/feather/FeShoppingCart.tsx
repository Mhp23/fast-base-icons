import React from 'react';
import {FeatherWrap} from '../../SvgWrap';
import {Circle, Path} from 'react-native-svg';
import type {SvgIconProps} from '../../types';

const FeShoppingCart = React.forwardRef<any, Omit<SvgIconProps, 'mode'>>(
  (props, ref) => {
    return (
      <FeatherWrap ref={ref} {...props}>
        <Circle cx={9} cy={21} r={1} />
        <Circle cx={20} cy={21} r={1} />
        <Path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </FeatherWrap>
    );
  },
);

FeShoppingCart.displayName = 'FeShoppingCart';

export default FeShoppingCart;

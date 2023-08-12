import React from 'react';
import SvgWrap from '../../SvgWrap';
import {Circle, Path} from 'react-native-svg';
import type {SvgIconProps} from '../../types';
import {DEFAULT_COLOR} from '../../constants';

const BShoppingCart = React.forwardRef<
  any,
  SvgIconProps<'normal' | 'fill' | 'alt' | 'alt-fill'>
>(({mode = 'normal', color = DEFAULT_COLOR, ...rest}, ref) => {
  const PathComponent = React.useMemo(() => {
    return mode === 'fill' ? (
      <React.Fragment>
        <Path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921z" />
        <Circle cx={10.5} cy={19.5} r={1.5} />
        <Circle cx={17.5} cy={19.5} r={1.5} />
      </React.Fragment>
    ) : mode === 'alt' ? (
      <React.Fragment>
        <Path d="M21 4H2v2h2.3l3.28 9a3 3 0 0 0 2.82 2H19v-2h-8.6a1 1 0 0 1-.94-.66L9 13h9.28a2 2 0 0 0 1.92-1.45L22 5.27A1 1 0 0 0 21.27 4 .84.84 0 0 0 21 4zm-2.75 7h-10L6.43 6h13.24z" />
        <Circle cx={10.5} cy={19.5} r={1.5} />
        <Circle cx={16.5} cy={19.5} r={1.5} />
      </React.Fragment>
    ) : mode === 'alt-fill' ? (
      <React.Fragment>
        <Path d="M21 4H2v2h2.3l3.521 9.683A2.004 2.004 0 0 0 9.7 17H18v-2H9.7l-.728-2H18c.4 0 .762-.238.919-.606l3-7A.998.998 0 0 0 21 4z" />
        <Circle cx={10.5} cy={19.5} r={1.5} />
        <Circle cx={16.5} cy={19.5} r={1.5} />
      </React.Fragment>
    ) : mode === 'normal' ? (
      <React.Fragment>
        <Path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z" />
        <Circle cx={10.5} cy={19.5} r={1.5} />
        <Circle cx={17.5} cy={19.5} r={1.5} />
      </React.Fragment>
    ) : null;
  }, [mode]);

  return (
    <SvgWrap ref={ref} fill={color} {...rest}>
      {PathComponent}
    </SvgWrap>
  );
});

export default BShoppingCart;

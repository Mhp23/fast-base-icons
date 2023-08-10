import React from 'react';
import {ICON_SIZE} from '../constants';
import type {SvgIconProps} from '../types';
import {StyleSheet, View} from 'react-native';
import {useRS} from 'react-native-full-responsive';
import {Svg, type SvgProps} from 'react-native-svg';

const SvgWrap = React.forwardRef<any, SvgProps & SvgIconProps>(
  ({children, style, size = ICON_SIZE, ...rest}, ref) => {
    const viewSize = useRS(size);
    return (
      <View
        style={StyleSheet.flatten([
          style,
          {width: viewSize, height: viewSize},
        ])}>
        <Svg
          ref={ref}
          role="img"
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          accessibilityRole="image"
          {...rest}>
          {children}
        </Svg>
      </View>
    );
  },
);

export default React.memo(SvgWrap);

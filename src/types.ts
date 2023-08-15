import type {StyleProp, ViewStyle} from 'react-native';

export type IconNameType =
  | 'home'
  | 'image'
  | 'user'
  | 'search'
  | 'x'
  | 'message'
  | 'send'
  | 'camera'
  | 'video'
  | 'shopping-bag'
  | 'shopping-cart'
  | 'chart'
  | 'time'
  | 'calendar'
  | 'emoji'
  | 'bell'
  | 'bookmark'
  | 'file'
  | 'lock'
  | 'share'
  | 'map'
  | 'trash'
  | 'grid'
  | 'thumb'
  | 'heart'
  | 'store'
  | 'archive'
  | 'error'
  | 'chevron-left'
  | 'chevron-right'
  | 'chevron-up'
  | 'chevron-down';

export type IconType = 'Feather' | 'BoxIcons';

export interface SvgIconProps<T extends string = ''> {
  /**
   * the icon component mode, for various icons it's different
   */
  mode?: T;
  /**
   * the icon component size
   * @default 24
   */
  size?: number;
  /**
   * the icon component color
   * @default black
   */
  color?: string;
  /**
   * the icon component container style, width, and height are not
   * assignable instead, use the size property to change the icon size
   */
  style?: StyleProp<ViewStyle>;
}

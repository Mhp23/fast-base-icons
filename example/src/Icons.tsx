import {
  BCamera,
  BChevronDown,
  BChevronLeft,
  BChevronRight,
  BChevronUp,
  BHome,
  BImage,
  BMessage,
  BSearch,
  BSend,
  BShoppingBag,
  BShoppingCart,
  BUser,
  BVideo,
  BX,
  FeCamera,
  FeChevronDown,
  FeChevronLeft,
  FeChevronRight,
  FeChevronUp,
  FeHome,
  FeImage,
  FeMessage,
  FeSearch,
  FeSend,
  FeShoppingBag,
  FeShoppingCart,
  FeUser,
  FeVideo,
  FeX,
} from '@fast-base/icons';

export const ICONS = [
  /**
   * BoxIcons section
   */
  {
    pack: 'BoxIcons',
    icons: [
      {
        name: 'chevron-up',
        Component: BChevronUp,
        modes: ['normal', 'double', 'circle', 'square'],
      },
      {
        name: 'chevron-left',
        Component: BChevronLeft,
        modes: ['normal', 'double', 'circle', 'square'],
      },
      {
        name: 'chevron-right',
        Component: BChevronRight,
        modes: ['normal', 'double', 'circle', 'square'],
      },
      {
        name: 'chevron-down',
        Component: BChevronDown,
        modes: ['normal', 'double', 'circle', 'square'],
      },
      {
        name: 'home',
        Component: BHome,
        modes: [
          'normal',
          'fill',
          'alt',
          'alt2',
          'alt2-fill',
          'circle',
          'circle-fill',
          'heart',
          'heart-fill',
          'smile',
          'smile-fill',
        ],
      },
      {
        name: 'search',
        Component: BSearch,
        modes: [
          'normal',
          'fill',
          'alt',
          'alt2',
          'alt2-fill',
          'file',
          'file-fill',
        ],
      },
      {
        name: 'user',
        Component: BUser,
        modes: [
          'normal',
          'fill',
          'circle',
          'circle-fill',
          'plus',
          'minus',
          'x',
          'x-fill',
          'check',
          'check-fill',
          'voice',
          'voice-fill',
          'account',
        ],
      },
      {
        name: 'image',
        Component: BImage,
        modes: ['normal', 'fill', 'images'],
      },
      {
        name: 'x',
        Component: BX,
        modes: ['normal', 'circle', 'circle-fill', 'square'],
      },
      {
        name: 'message',
        Component: BMessage,
        modes: [
          'normal',
          'fill',
          'dots',
          'dots-fill',
          'round',
          'round-fill',
          'square',
          'square-fill',
          'detail',
          'detail-fill',
        ],
      },
      {
        name: 'send',
        Component: BSend,
        modes: ['normal', 'fill'],
      },
      {
        name: 'camera',
        Component: BCamera,
        modes: ['normal', 'fill', 'off', 'off-fill', 'home', 'home-fill'],
      },
      {
        name: 'video',
        Component: BVideo,
        modes: [
          'normal',
          'fill',
          'off',
          'off-fill',
          'recording',
          'recording-fill',
          'videos',
        ],
      },
      {
        name: 'shopping-bag',
        Component: BShoppingBag,
        modes: ['normal', 'fill', 'alt', 'bags'],
      },
      {
        name: 'shopping-cart',
        Component: BShoppingCart,
        modes: ['normal', 'fill', 'alt', 'alt-fill'],
      },
    ],
  },
  /**
   * Feather section
   */
  {
    pack: 'Feather',
    icons: [
      {
        name: 'chevron-up',
        Component: FeChevronUp,
        modes: ['single', 'double'],
      },
      {
        name: 'chevron-left',
        Component: FeChevronLeft,
        modes: ['single', 'double'],
      },
      {
        name: 'chevron-right',
        Component: FeChevronRight,
        modes: ['single', 'double'],
      },
      {
        name: 'chevron-down',
        Component: FeChevronDown,
        modes: ['single', 'double'],
      },
      {
        name: 'home',
        Component: FeHome,
      },
      {
        name: 'search',
        Component: FeSearch,
      },
      {
        name: 'user',
        Component: FeUser,
        modes: ['normal', 'plus', 'minus', 'x', 'check', 'users'],
      },
      {
        name: 'image',
        Component: FeImage,
      },
      {
        name: 'x',
        Component: FeX,
        modes: ['normal', 'circle', 'square', 'octagon'],
      },
      {
        name: 'message',
        Component: FeMessage,
        modes: ['circle', 'square'],
      },
      {
        name: 'send',
        Component: FeSend,
      },
      {
        name: 'camera',
        Component: FeCamera,
        modes: ['normal', 'off'],
      },
      {
        name: 'video',
        Component: FeVideo,
        modes: ['normal', 'off', 'film'],
      },
      {
        name: 'shopping-bag',
        Component: FeShoppingBag,
      },
      {
        name: 'shopping-cart',
        Component: FeShoppingCart,
      },
    ],
  },
];

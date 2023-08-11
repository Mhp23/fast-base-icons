import {
  BChevronDown,
  BChevronLeft,
  BChevronRight,
  BChevronUp,
  BHome,
  BImage,
  BSearch,
  BUser,
  BX,
  FeChevronDown,
  FeChevronLeft,
  FeChevronRight,
  FeChevronUp,
  FeHome,
  FeImage,
  FeSearch,
  FeUser,
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
        type: 'BoxIcons',
        name: 'chevron-up',
        Component: BChevronUp,
        modes: ['normal', 'double', 'circle', 'square'],
      },
      {
        type: 'BoxIcons',
        name: 'chevron-left',
        Component: BChevronLeft,
        modes: ['normal', 'double', 'circle', 'square'],
      },
      {
        type: 'BoxIcons',
        name: 'chevron-right',
        Component: BChevronRight,
        modes: ['normal', 'double', 'circle', 'square'],
      },
      {
        type: 'BoxIcons',
        name: 'chevron-down',
        Component: BChevronDown,
        modes: ['normal', 'double', 'circle', 'square'],
      },
      {
        type: 'BoxIcons',
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
        type: 'BoxIcons',
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
        type: 'BoxIcons',
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
        type: 'BoxIcons',
        name: 'image',
        Component: BImage,
        modes: ['normal', 'fill', 'images'],
      },
      {
        type: 'BoxIcons',
        name: 'x',
        Component: BX,
        modes: ['normal', 'circle', 'circle-fill', 'square'],
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
        type: 'Feather',
        name: 'chevron-up',
        Component: FeChevronUp,
        modes: ['single', 'double'],
      },
      {
        type: 'Feather',
        name: 'chevron-left',
        Component: FeChevronLeft,
        modes: ['single', 'double'],
      },
      {
        type: 'Feather',
        name: 'chevron-right',
        Component: FeChevronRight,
        modes: ['single', 'double'],
      },
      {
        type: 'Feather',
        name: 'chevron-down',
        Component: FeChevronDown,
        modes: ['single', 'double'],
      },
      {
        type: 'Feather',
        name: 'home',
        Component: FeHome,
      },
      {
        type: 'Feather',
        name: 'search',
        Component: FeSearch,
      },
      {
        type: 'Feather',
        name: 'user',
        Component: FeUser,
        modes: ['normal', 'plus', 'minus', 'x', 'check', 'users'],
      },
      {
        type: 'Feather',
        name: 'image',
        Component: FeImage,
      },
      {
        type: 'Feather',
        name: 'x',
        Component: FeX,
        modes: ['normal', 'circle', 'square', 'octagon'],
      },
    ],
  },
];

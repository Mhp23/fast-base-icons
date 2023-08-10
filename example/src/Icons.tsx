import {
  BChevronDown,
  BChevronLeft,
  BChevronRight,
  BChevronUp,
  BHome,
  FeChevronDown,
  FeChevronLeft,
  FeChevronRight,
  FeChevronUp,
  FeHome,
} from '@fast-base/icons';

export const ICONS = [
  /**
   * BoxIcons section
   */
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
  /**
   * Feather section
   */
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
];

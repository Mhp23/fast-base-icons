import {BChevronLeft, FeChevronLeft} from '@fast-base/icons';

export const ICONS = [
  /**
   * BoxIcons section
   */
  {
    type: 'BoxIcons',
    name: 'chevron-left',
    Component: BChevronLeft,
    modes: ['normal', 'circle', 'square'],
  },
  /**
   * Feather section
   */
  {
    type: 'Feather',
    name: 'chevron-left',
    Component: FeChevronLeft,
    modes: ['single', 'double'],
  },
];

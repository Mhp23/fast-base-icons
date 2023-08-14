import {
  BBell,
  BBookmark,
  BCalendar,
  BCamera,
  BChart,
  BChevronDown,
  BChevronLeft,
  BChevronRight,
  BChevronUp,
  BEmoji,
  BFile,
  BGrid,
  BHeart,
  BHome,
  BImage,
  BLock,
  BMap,
  BMessage,
  BSearch,
  BSend,
  BShare,
  BShoppingBag,
  BShoppingCart,
  BStore,
  BThumb,
  BTime,
  BTrash,
  BUser,
  BVideo,
  BX,
  FeBell,
  FeBookmark,
  FeCalendar,
  FeCamera,
  FeChart,
  FeChevronDown,
  FeChevronLeft,
  FeChevronRight,
  FeChevronUp,
  FeEmoji,
  FeFile,
  FeGrid,
  FeHeart,
  FeHome,
  FeImage,
  FeLock,
  FeMap,
  FeMessage,
  FeSearch,
  FeSend,
  FeShare,
  FeShoppingBag,
  FeShoppingCart,
  FeThumb,
  FeTime,
  FeTrash,
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
      {
        name: 'chart',
        Component: BChart,
        modes: [
          'normal',
          'fill',
          'bar',
          'bar-alt',
          'bar-alt-fill',
          'pie',
          'pie-fill',
          'doughnut',
          'doughnut-fill',
          'line',
          'line-down',
          'network',
          'network-fill',
          'scatter',
        ],
      },
      {
        name: 'timer',
        Component: BTime,
        modes: ['normal', 'fill', 'timer', 'timer-fill'],
      },
      {
        name: 'calendar',
        Component: BCalendar,
        modes: ['normal', 'fill', 'alt', 'alt-fill', 'event', 'event-fill'],
      },
      {
        name: 'emoji',
        Component: BEmoji,
        modes: [
          'smile',
          'smile-fill',
          'wink',
          'wink-fill',
          'sad',
          'sad-fill',
          'meh',
          'meh-fill',
        ],
      },
      {
        name: 'bell',
        Component: BBell,
        modes: ['normal', 'fill', 'off', 'off-fill', 'ring'],
      },
      {
        name: 'bookmark',
        Component: BBookmark,
        modes: [
          'normal',
          'fill',
          'bookmarks',
          'bookmarks-fill',
          'star',
          'star-fill',
        ],
      },
      {
        name: 'file',
        Component: BFile,
        modes: ['normal', 'fill', 'blank', 'pdf', 'png', 'archive', 'import'],
      },
      {
        name: 'lock',
        Component: BLock,
        modes: [
          'normal',
          'fill',
          'alt',
          'alt-fill',
          'open',
          'open-fill',
          'open-alt',
          'open-alt-fill',
          'block',
        ],
      },
      {
        name: 'share',
        Component: BShare,
        modes: ['normal', 'fill', 'alt', 'alt-fill'],
      },
      {
        name: 'lock',
        Component: BLock,
        modes: [
          'normal',
          'fill',
          'alt',
          'alt-fill',
          'open',
          'open-fill',
          'open-alt',
          'open-alt-fill',
          'block',
        ],
      },
      {
        name: 'map',
        Component: BMap,
        modes: [
          'normal',
          'fill',
          'alt',
          'alt-fill',
          'pin',
          'pin-fill',
          'target',
        ],
      },
      {
        name: 'trash',
        Component: BTrash,
        modes: ['normal', 'fill', 'alt', 'alt-fill'],
      },
      {
        name: 'grid',
        Component: BGrid,
        modes: ['normal', 'fill', 'alt', 'alt-fill', 'vertical', 'horizontal'],
      },
      {
        name: 'thumb',
        Component: BThumb,
        modes: ['up', 'up-fill', 'down', 'down-fill'],
      },
      {
        name: 'heart',
        Component: BHeart,
        modes: [
          'normal',
          'fill',
          'circle',
          'circle-fill',
          'donate',
          'donate-fill',
        ],
      },
      {
        name: 'store',
        Component: BStore,
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
      {
        name: 'chart',
        Component: FeChart,
        modes: ['normal', 'alt', 'pie'],
      },
      {
        name: 'time',
        Component: FeTime,
        modes: ['normal', 'watch', 'sunrise', 'sunset'],
      },
      {
        name: 'calendar',
        Component: FeCalendar,
      },
      {
        name: 'emoji',
        Component: FeEmoji,
        modes: ['smile', 'sad', 'meh'],
      },
      {
        name: 'bell',
        Component: FeBell,
        modes: ['normal', 'off'],
      },
      {
        name: 'bookmark',
        Component: FeBookmark,
        modes: ['normal', 'star'],
      },
      {
        name: 'file',
        Component: FeFile,
        modes: ['normal', 'text'],
      },
      {
        name: 'lock',
        Component: FeLock,
        modes: ['lock', 'unlock'],
      },
      {
        name: 'share',
        Component: FeShare,
        modes: ['normal', 'alt'],
      },
      {
        name: 'map',
        Component: FeMap,
        modes: ['normal', 'pin', 'navigation'],
      },
      {
        name: 'trash',
        Component: FeTrash,
        modes: ['normal', 'fill'],
      },
      {
        name: 'grid',
        Component: FeGrid,
      },
      {
        name: 'thumb',
        Component: FeThumb,
        modes: ['up', 'down'],
      },
      {
        name: 'heart',
        Component: FeHeart,
      },
    ],
  },
];

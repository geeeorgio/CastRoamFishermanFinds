import { ITEMS_IMAGES, ONBD_IMAGES } from './images';

import type { GAME_OBSTACLE_TYPE } from 'src/types';
import { wp } from 'src/utils';

export const ONBOARDING_INFO = {
  onboarding_1: {
    index: 0,
    title: 'Scenic Fishing Spots Worldwide',
    description:
      'Explore beautiful fishing corners from around the world — rivers, lakes, harbors, beaches, and peaceful shorelines',
    image: ONBD_IMAGES.onbd1,
    buttonText: 'Next',
  },
  onboarding_2: {
    index: 1,
    title: 'Random Spot or Full List',
    description:
      'Tap Random Spot for a surprise pin, or browse all locations and choose the vibe you want today',
    image: ONBD_IMAGES.onbd2,
    buttonText: 'Next',
  },
  onboarding_3: {
    index: 2,
    title: 'Map, Tips, and a Fun Break',
    description:
      'See every spot on the map, read simple fishing tips and a daily funny tip from the penguin, then play a quick mini game anytime',
    image: ONBD_IMAGES.onbd3,
    buttonText: 'Start Exploring',
  },
};

export const GAME_SCREEN_INFO = {
  image: ONBD_IMAGES.onbd2,
  description:
    'Catch it fast. Miss it… and you lose a life. Use the arrow buttons to move the penguin and catch the item before time runs out',
  buttonText: 'Start',
};

export const GAME_OBSTACLE_INFO: GAME_OBSTACLE_TYPE[] = [
  {
    id: 'float',
    image: ITEMS_IMAGES.float,
  },
  {
    id: 'worm_hook',
    image: ITEMS_IMAGES.worm_hook,
  },
  {
    id: 'multiple_fish',
    image: ITEMS_IMAGES.multiple_fish,
  },
  {
    id: 'single_fish',
    image: ITEMS_IMAGES.single_fish,
  },
];

export const GAME_TIME = 10000;
export const GAME_LIVES = 3;
export const GAME_STEP = wp(40);
export const GAME_TIMER_INTERVAL = 100;
export const RACCOON_SIZE = wp(80);
export const OBSTACLE_SIZE = RACCOON_SIZE / 1.5;
export const MIN_X = 0;
export const MIN_Y = 0;

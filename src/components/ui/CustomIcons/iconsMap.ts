import type { SvgProps } from 'react-native-svg';

import ArrDownIcon from './ArrDownIcon';
import ArrLeftIcon from './ArrLeftIcon';
import ArrRightIcon from './ArrRightIcon';
import ArrUpIcon from './ArrUpIcon';
import BackIcon from './BackIcon';
import CatchIcon from './CatchIcon';
import FishHookIcon from './FishHookIcon';
import FishIcon from './FishIcon';
import MapIcon from './MapIcon';
import PauseIcon from './PauseIcon';
import RandomIcon from './RandomIcon';
import SearchIcon from './SearchIcon';
import SettingsIcon from './SettingsIcon';
import ShareIcon from './ShareIcon';

import type { MainStackParamList } from 'src/types';

export const ICON_NAMES = [
  'arrDown',
  'arrLeft',
  'arrRight',
  'arrUp',
  'back',
  'catch',
  'fishHook',
  'fish',
  'map',
  'pause',
  'random',
  'search',
  'settings',
  'share',
] as const;

export type IconName = (typeof ICON_NAMES)[number];

export const ICONS_MAP: Record<IconName, React.FC<SvgProps>> = {
  arrDown: ArrDownIcon,
  arrRight: ArrRightIcon,
  arrLeft: ArrLeftIcon,
  arrUp: ArrUpIcon,
  back: BackIcon,
  catch: CatchIcon,
  fishHook: FishHookIcon,
  fish: FishIcon,
  map: MapIcon,
  pause: PauseIcon,
  random: RandomIcon,
  share: ShareIcon,
  search: SearchIcon,
  settings: SettingsIcon,
};

export const TAB_BAR_ICONS_MAP: Record<
  keyof MainStackParamList,
  React.FC<SvgProps>
> = {
  RandomPlaceScreen: FishIcon,
  PickPlaceScreen: RandomIcon,
  MapScreen: MapIcon,
  LearnScreen: FishHookIcon,
  GameSetupScreen: CatchIcon,
};

import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

import type { PLACE_INFO_TYPE } from './gameplay';

export type MainStackParamList = {
  RandomPlaceScreen: undefined;
  PickPlaceScreen: undefined;
  MapScreen: { place: PLACE_INFO_TYPE };
  LearnScreen: undefined;
  GameSetupScreen: undefined;
};

export type MainStackNavigationProp =
  BottomTabNavigationProp<MainStackParamList>;

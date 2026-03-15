import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

export type MainStackParamList = {
  RandomPlaceScreen: undefined;
  PickPlaceScreen: undefined;
  MapScreen: undefined;
  LearnScreen: undefined;
  GameSetupScreen: undefined;
};

export type MainStackNavigationProp =
  BottomTabNavigationProp<MainStackParamList>;

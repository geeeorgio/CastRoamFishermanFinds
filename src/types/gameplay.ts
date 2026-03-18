import type { ImageSourcePropType } from 'react-native';

export type Fact_Type = {
  id: string;
  title: string;
  description: string;
  tip: string;
  isOpened: boolean;
};

export type Daily_Tip_Type = {
  id: string;
  text: string;
  isOpened: boolean;
};

export type PLACE_INFO_TYPE = {
  id: string;
  title: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  country: string;
  description: string;
  fact: string;
  image: ImageSourcePropType;
};

export type GAME_OBSTACLE_TYPE = {
  id: string;
  image: ImageSourcePropType;
};

export type GAME_STATUS_TYPE = 'playing' | 'paused' | 'finished';

export type GAME_SETTINGS_TYPE = {
  status: GAME_STATUS_TYPE;
  obstacle: GAME_OBSTACLE_TYPE;
  time: number;
  score: number;
  lives: number;
};

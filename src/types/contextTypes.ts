import type { ImageSourcePropType } from 'react-native';

import type { Daily_Tip_Type } from './gameplay';

export type PersistContextType = {
  isPersistContextLoading: boolean;
  //
  persistedTipsTimestamp: number;
  setPersistedTipsTimestamp: (value: number) => Promise<void>;
  //
  canGetNewTip: boolean;
  persistedTip: Daily_Tip_Type | null;
  setPersistedTip: (value: Daily_Tip_Type | null) => Promise<void>;
  //
  contextBackground: ImageSourcePropType | null;
  setPersistedContextBackground: (
    value: ImageSourcePropType | null,
  ) => Promise<void>;
};

export type OnboardingContextType = {
  isContextLoading: boolean;
  //
  isContextOnboardingDone: boolean;
  setIsContextOnboardingDone: (value: boolean) => Promise<void>;
};

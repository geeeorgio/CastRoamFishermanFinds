import type { ImageSourcePropType } from 'react-native';

export type PersistContextType = {
  isPersistContextLoading: boolean;
  //
  persistedTipsTimestamp: string;
  setPersistedTipsTimestamp: (value: string) => Promise<void>;
  canGetNewTip: boolean;
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

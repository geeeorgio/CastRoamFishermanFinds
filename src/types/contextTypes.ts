import type { Daily_Tip_Type } from './gameplay';

export type PersistContextType = {
  isPersistContextLoading: boolean;
  //
  persistedTipsTimestamp: number;
  setPersistedTipsTimestamp: (value: number) => Promise<void>;
  //
  persistedTopScore: number;
  setPersistedTopScore: (value: number) => Promise<void>;
  //
  canGetNewTip: boolean;
  persistedTip: Daily_Tip_Type | null;
  setPersistedTip: (value: Daily_Tip_Type | null) => Promise<void>;
};

export type OnboardingContextType = {
  isContextLoading: boolean;
  //
  isContextOnboardingDone: boolean;
  setIsContextOnboardingDone: (value: boolean) => Promise<void>;
};

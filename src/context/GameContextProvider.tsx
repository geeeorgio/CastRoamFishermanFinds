import type { ReactNode } from 'react';

import { OnboardingContextProvider } from './OnboardingContextProvider';
import PersistContextProvider from './PersistContextProvider';

const GameContextProvider = ({ children }: { children: ReactNode }) => {
  return (
    <OnboardingContextProvider>
      <PersistContextProvider>{children}</PersistContextProvider>
    </OnboardingContextProvider>
  );
};

export default GameContextProvider;

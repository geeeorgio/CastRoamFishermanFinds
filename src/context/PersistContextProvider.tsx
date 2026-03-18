import type { ReactNode } from 'react';
import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import type { Daily_Tip_Type, PersistContextType } from 'src/types';
import { getItemFromStorage, setItemInStorage } from 'src/utils';

export const PersistContext = createContext<PersistContextType | null>(null);

const PersistContextProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [lastTipTime, setLastTipTime] = useState<number>(0);
  const [tip, setTip] = useState<Daily_Tip_Type | null>(null);
  const [topScore, setTopScore] = useState<number>(0);

  useEffect(() => {
    const init = async () => {
      const [savedTimestamp, savedTip, savedTopScore] = await Promise.all([
        getItemFromStorage<number>('saved_timestamp'),
        getItemFromStorage<Daily_Tip_Type>('saved_tip'),
        getItemFromStorage<number>('saved_top_score'),
      ]);

      if (savedTimestamp !== null) {
        setLastTipTime(Number(savedTimestamp));
      }

      if (savedTip !== null) {
        setTip(savedTip);
      }

      if (savedTopScore !== null) {
        setTopScore(Math.max(0, savedTopScore));
      }

      setIsLoading(false);
    };
    init();
  }, []);

  const setPersistedTipsTimestamp = useCallback(async (timestamp: number) => {
    setLastTipTime(timestamp);
    await setItemInStorage('saved_timestamp', timestamp);
  }, []);

  const setPersistedTip = useCallback(async (value: Daily_Tip_Type | null) => {
    setTip(value);
    await setItemInStorage('saved_tip', value);
  }, []);

  const setPersistedTopScore = useCallback(async (value: number) => {
    setTopScore(value);
    await setItemInStorage('saved_top_score', value);
  }, []);

  const value = useMemo(
    () => ({
      isPersistContextLoading: isLoading,
      persistedTopScore: topScore,
      setPersistedTopScore,
      persistedTipsTimestamp: lastTipTime,
      setPersistedTipsTimestamp,
      canGetNewTip: Date.now() - lastTipTime > 24 * 60 * 60 * 1000,
      persistedTip: tip,
      setPersistedTip,
    }),
    [
      isLoading,
      lastTipTime,
      setPersistedTipsTimestamp,
      tip,
      setPersistedTip,
      topScore,
      setPersistedTopScore,
    ],
  );

  return (
    <PersistContext.Provider value={value}>{children}</PersistContext.Provider>
  );
};

export default PersistContextProvider;

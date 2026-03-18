import type { ReactNode } from 'react';
import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import type { ImageSourcePropType } from 'react-native';

import type { Daily_Tip_Type, PersistContextType } from 'src/types';
import { getItemFromStorage, setItemInStorage } from 'src/utils';

export const PersistContext = createContext<PersistContextType | null>(null);

const PersistContextProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [lastTipTime, setLastTipTime] = useState<number>(0);
  const [bckgd, setBckgd] = useState<ImageSourcePropType | null>(null);
  const [tip, setTip] = useState<Daily_Tip_Type | null>(null);

  useEffect(() => {
    const init = async () => {
      const [savedTimestamp, savedBckgd, savedTip] = await Promise.all([
        getItemFromStorage<number>('saved_timestamp'),
        getItemFromStorage<ImageSourcePropType>('saved_bckgd'),
        getItemFromStorage<Daily_Tip_Type>('saved_tip'),
      ]);

      if (savedTimestamp !== null) {
        setLastTipTime(Number(savedTimestamp));
      }

      if (savedTip !== null) {
        setTip(savedTip);
      }

      if (savedBckgd) {
        setBckgd(savedBckgd);
      }

      setIsLoading(false);
    };
    init();
  }, []);

  const setPersistedTipsTimestamp = useCallback(async (timestamp: number) => {
    setLastTipTime(timestamp);
    await setItemInStorage('saved_timestamp', timestamp);
  }, []);

  const setPersistedContextBackground = useCallback(
    async (value: ImageSourcePropType | null) => {
      setBckgd(value);
      await setItemInStorage('saved_bckgd', value);
    },
    [],
  );

  const setPersistedTip = useCallback(async (value: Daily_Tip_Type | null) => {
    setTip(value);
    await setItemInStorage('saved_tip', value);
  }, []);

  const value = useMemo(
    () => ({
      isPersistContextLoading: isLoading,
      persistedTipsTimestamp: lastTipTime,
      setPersistedTipsTimestamp,
      canGetNewTip: Date.now() - lastTipTime > 24 * 60 * 60 * 1000,
      persistedTip: tip,
      setPersistedTip,
      contextBackground: bckgd,
      setPersistedContextBackground,
    }),
    [
      isLoading,
      lastTipTime,
      setPersistedTipsTimestamp,
      bckgd,
      setPersistedContextBackground,
      tip,
      setPersistedTip,
    ],
  );

  return (
    <PersistContext.Provider value={value}>{children}</PersistContext.Provider>
  );
};

export default PersistContextProvider;

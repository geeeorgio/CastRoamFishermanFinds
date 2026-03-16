import type { ReactNode } from 'react';
import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import type { ImageSourcePropType } from 'react-native';

import type { PersistContextType } from 'src/types';
import { getItemFromStorage, setItemInStorage } from 'src/utils';

export const PersistContext = createContext<PersistContextType | null>(null);

const PersistContextProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [lastTipTime, setLastTipTime] = useState<number>(0);
  const [bckgd, setBckgd] = useState<ImageSourcePropType | null>(null);

  useEffect(() => {
    const init = async () => {
      const [savedTips, savedBckgd] = await Promise.all([
        getItemFromStorage<string>('saved_tips'),
        getItemFromStorage<ImageSourcePropType>('saved_bckgd'),
      ]);

      if (savedTips !== null) {
        setLastTipTime(Number(savedTips));
      }

      if (savedBckgd) {
        setBckgd(savedBckgd);
      }

      setIsLoading(false);
    };
    init();
  }, []);

  const setPersistedTipsTimestamp = useCallback(async (timestamp: string) => {
    setLastTipTime(Number(timestamp));
    await setItemInStorage('saved_tips', timestamp);
  }, []);

  const setPersistedContextBackground = useCallback(
    async (value: ImageSourcePropType | null) => {
      setBckgd(value);
      await setItemInStorage('saved_bckgd', value);
    },
    [],
  );

  const value = useMemo(
    () => ({
      isPersistContextLoading: isLoading,
      persistedTipsTimestamp: lastTipTime.toString(),
      setPersistedTipsTimestamp,
      canGetNewTip: Date.now() - lastTipTime > 24 * 60 * 60 * 1000,
      contextBackground: bckgd,
      setPersistedContextBackground,
    }),
    [
      isLoading,
      lastTipTime,
      setPersistedTipsTimestamp,
      bckgd,
      setPersistedContextBackground,
    ],
  );

  return (
    <PersistContext.Provider value={value}>{children}</PersistContext.Provider>
  );
};

export default PersistContextProvider;

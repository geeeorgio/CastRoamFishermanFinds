import { useCallback } from 'react';
import { View } from 'react-native';

import DailyTipsBar from './DailyTipsBar/DailyTipsBar';
import LearnList from './LearnList/LearnList';
import { styles } from './styles';

import { DAILY_TIPS_LIST } from 'src/constants';
import { usePersistContext } from 'src/hooks/usePersistContext';
import { shuffleArray } from 'src/utils';

const LearnScreen = () => {
  const {
    persistedTip,
    persistedTipsTimestamp,
    setPersistedTip,
    setPersistedTipsTimestamp,
  } = usePersistContext();

  const handleTipPress = useCallback(async () => {
    const isTimeUp = Date.now() - persistedTipsTimestamp > 24 * 60 * 60 * 1000;

    if (persistedTip && !isTimeUp) return;

    const newTip = shuffleArray(DAILY_TIPS_LIST)[0];
    await setPersistedTip(newTip);

    await setPersistedTipsTimestamp(Date.now());
  }, [
    setPersistedTip,
    setPersistedTipsTimestamp,
    persistedTip,
    persistedTipsTimestamp,
  ]);

  return (
    <View style={styles.container}>
      <DailyTipsBar onTipPress={handleTipPress} />
      <LearnList />
    </View>
  );
};

export default LearnScreen;

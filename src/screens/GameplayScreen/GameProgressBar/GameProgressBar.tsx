import { useEffect, useState } from 'react';
import { View } from 'react-native';

import { styles } from './styles';

import { GAME_TIMER_INTERVAL } from 'src/constants';
import type { GAME_STATUS_TYPE } from 'src/types';

interface GameProgressBarProps {
  time: number;
  onTimeUp: () => void;
  status: GAME_STATUS_TYPE;
}

const GameProgressBar = ({ time, onTimeUp, status }: GameProgressBarProps) => {
  const [timeLeft, setTimeLeft] = useState<number>(time);

  useEffect(() => {
    setTimeLeft(time);
  }, [time]);

  useEffect(() => {
    let timer: ReturnType<typeof setInterval> | null = null;

    if (status === 'playing') {
      timer = setInterval(() => {
        setTimeLeft((prev) => (prev <= 0 ? 0 : prev - GAME_TIMER_INTERVAL));
      }, GAME_TIMER_INTERVAL);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [status]);

  useEffect(() => {
    if (timeLeft <= 0 && status === 'playing') {
      onTimeUp();
    }
  }, [timeLeft, status, onTimeUp]);

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.filler,
          { width: `${(Math.max(0, timeLeft) / time) * 100}%` },
        ]}
      />
    </View>
  );
};

export default GameProgressBar;

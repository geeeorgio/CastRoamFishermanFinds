import { StackActions, useNavigation } from '@react-navigation/native';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, ImageBackground, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import GameHeader from './GameHeader/GameHeader';
import GameJoystick from './GameJoystick/GameJoystick';
import GameModal from './GameModal/GameModal';
import GameMode from './GameMode/GameMode';
import GameProgressBar from './GameProgressBar/GameProgressBar';
import { styles } from './styles';

import {
  GAME_LIVES,
  GAME_OBSTACLE_INFO,
  GAME_STEP,
  GAME_TIME,
  MAIN_BACKGROUND,
  MIN_X,
  MIN_Y,
  OBSTACLE_SIZE,
  RACCOON_SIZE,
} from 'src/constants';
import { usePersistContext } from 'src/hooks/usePersistContext';
import type { GAME_SETTINGS_TYPE, RootStackNavigationProp } from 'src/types';
import { hp, shuffleArray, wp } from 'src/utils';

const { width, height } = Dimensions.get('window');
const MAX_X = width - RACCOON_SIZE - wp(5);
const MAX_Y = height - hp(320);

const getRandomPosition = (maxX: number, maxY: number) => {
  const randomX = Math.floor(Math.random() * (maxX / GAME_STEP)) * GAME_STEP;
  const randomY = Math.floor(Math.random() * (maxY / GAME_STEP)) * GAME_STEP;
  return { x: Math.max(0, randomX), y: Math.max(0, randomY) };
};

const initGameSettings = (): GAME_SETTINGS_TYPE => {
  return {
    status: 'playing',
    obstacle: shuffleArray(GAME_OBSTACLE_INFO)[0],
    score: 0,
    time: GAME_TIME,
    lives: GAME_LIVES,
  };
};

const GameplayScreen = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const { setPersistedTopScore, persistedTopScore } = usePersistContext();

  const [gameSettings, setGameSettings] =
    useState<GAME_SETTINGS_TYPE>(initGameSettings());
  const [obstaclePosition, setObstaclePosition] = useState(
    getRandomPosition(MAX_X, MAX_Y),
  );

  const showModal =
    gameSettings.status === 'paused' || gameSettings.status === 'finished';

  const handleTimeUp = useCallback(() => {
    setGameSettings((prev) => {
      const newLives = prev.lives - 1;

      if (newLives <= 0) {
        return { ...prev, lives: 0, status: 'finished' };
      }

      return {
        ...prev,
        lives: newLives,
        time: GAME_TIME,
        obstacle: shuffleArray(GAME_OBSTACLE_INFO)[0],
      };
    });
  }, []);

  useEffect(() => {
    if (gameSettings.status === 'finished') {
      setPersistedTopScore(Math.max(gameSettings.score, persistedTopScore));
    }
  }, [
    gameSettings.status,
    gameSettings.score,
    setPersistedTopScore,
    persistedTopScore,
  ]);

  const handlePausePress = useCallback(() => {
    setGameSettings((prev) => ({ ...prev, status: 'paused' }));
  }, [setGameSettings]);

  const handleResumePress = useCallback(() => {
    setGameSettings((prev) => ({ ...prev, status: 'playing' }));
  }, [setGameSettings]);

  const handleExitPress = useCallback(() => {
    navigation.dispatch(
      StackActions.replace('MainStack', { screen: 'RandomPlaceScreen' }),
    );
  }, [navigation]);

  const raccoonPos = useRef({ x: 0, y: 0 });
  const raccoonPosition = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

  const checkCollision = useCallback(
    (newRaccoonPos: { x: number; y: number }) => {
      const dx =
        newRaccoonPos.x +
        RACCOON_SIZE / 2 -
        (obstaclePosition.x + OBSTACLE_SIZE / 2);
      const dy =
        newRaccoonPos.y +
        RACCOON_SIZE / 2 -
        (obstaclePosition.y + OBSTACLE_SIZE / 2);
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < GAME_STEP) {
        setGameSettings((prev) => ({
          ...prev,
          score: prev.score + 1,
          obstacle: shuffleArray(GAME_OBSTACLE_INFO)[0],
        }));
        setObstaclePosition(getRandomPosition(MAX_X, MAX_Y));
      }
    },
    [obstaclePosition],
  );

  const moveRaccoon = useCallback(
    (dx: number, dy: number) => {
      if (gameSettings.status !== 'playing') return;

      let newX = raccoonPos.current.x + dx;
      let newY = raccoonPos.current.y + dy;

      if (newX < MIN_X) newX = MIN_X;
      if (newX > MAX_X) newX = MAX_X;
      if (newY < MIN_Y) newY = MIN_Y;
      if (newY > MAX_Y) newY = MAX_Y;

      raccoonPos.current = { x: newX, y: newY };

      Animated.timing(raccoonPosition, {
        toValue: { x: newX, y: newY },
        duration: 100,
        useNativeDriver: true,
      }).start(() => checkCollision({ x: newX, y: newY }));
    },
    [gameSettings.status, raccoonPosition, checkCollision],
  );

  const handleRestartPress = useCallback(() => {
    setGameSettings(initGameSettings());
    setObstaclePosition(getRandomPosition(MAX_X, MAX_Y));
    raccoonPos.current = { x: 0, y: 0 };
    raccoonPosition.setValue({ x: 0, y: 0 });
  }, [raccoonPosition]);

  const handleUpPress = useCallback(
    () => moveRaccoon(0, -GAME_STEP),
    [moveRaccoon],
  );
  const handleDownPress = useCallback(
    () => moveRaccoon(0, GAME_STEP),
    [moveRaccoon],
  );
  const handleLeftPress = useCallback(
    () => moveRaccoon(-GAME_STEP, 0),
    [moveRaccoon],
  );
  const handleRightPress = useCallback(
    () => moveRaccoon(GAME_STEP, 0),
    [moveRaccoon],
  );

  const { top, bottom } = useSafeAreaInsets();

  return (
    <ImageBackground
      source={MAIN_BACKGROUND}
      style={styles.bkgd}
      resizeMode="cover"
    >
      <View style={[styles.container, { paddingBottom: bottom + hp(50) }]}>
        <GameHeader
          paddingTop={top}
          lives={gameSettings.lives}
          onPausePress={handlePausePress}
        />

        <GameProgressBar
          key={`timer-${gameSettings.lives}-${gameSettings.score}`}
          time={gameSettings.time}
          onTimeUp={handleTimeUp}
          status={gameSettings.status}
        />

        <GameMode
          obstacle={gameSettings.obstacle}
          raccoonPosition={raccoonPosition}
          obstaclePosition={obstaclePosition}
        />

        <GameJoystick
          onUpPress={handleUpPress}
          onDownPress={handleDownPress}
          onLeftPress={handleLeftPress}
          onRightPress={handleRightPress}
          bottom={bottom + hp(40)}
        />

        {showModal && (
          <GameModal
            visible={showModal}
            status={gameSettings.status}
            score={gameSettings.score}
            onResume={handleResumePress}
            onRestart={handleRestartPress}
            onExit={handleExitPress}
          />
        )}
      </View>
    </ImageBackground>
  );
};

export default GameplayScreen;

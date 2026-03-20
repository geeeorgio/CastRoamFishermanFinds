import { Animated, View } from 'react-native';

import { styles } from './styles';

import { ONBD_IMAGES } from 'src/constants';
import type { GAME_OBSTACLE_TYPE } from 'src/types';

interface GameModeProps {
  obstacle: GAME_OBSTACLE_TYPE;
  raccoonPosition: Animated.ValueXY;
  obstaclePosition: { x: number; y: number };
}

const GameMode = ({
  obstacle,
  raccoonPosition,
  obstaclePosition,
}: GameModeProps) => {
  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.obstacleContainer,
          {
            position: 'absolute',
            transform: [
              { translateX: obstaclePosition.x },
              { translateY: obstaclePosition.y },
            ],
          },
        ]}
      >
        <Animated.Image
          source={obstacle.image}
          style={styles.obstacleImage}
          resizeMode="contain"
        />
      </Animated.View>

      <Animated.View
        style={[
          styles.raccoonContainer,
          {
            position: 'absolute',
            transform: raccoonPosition.getTranslateTransform(),
          },
        ]}
      >
        <Animated.Image
          source={ONBD_IMAGES.onbd1}
          style={styles.raccoonImage}
          resizeMode="contain"
        />
      </Animated.View>
    </View>
  );
};

export default GameMode;

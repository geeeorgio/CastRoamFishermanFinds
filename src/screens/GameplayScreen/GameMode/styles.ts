import { StyleSheet } from 'react-native';

import { OBSTACLE_SIZE, RACCOON_SIZE } from 'src/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  obstacleContainer: {
    width: OBSTACLE_SIZE,
    height: OBSTACLE_SIZE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  obstacleImage: {
    width: '85%',
    height: '85%',
  },
  raccoonContainer: {
    width: RACCOON_SIZE,
    height: RACCOON_SIZE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  raccoonImage: {
    width: '100%',
    height: '100%',
  },
});

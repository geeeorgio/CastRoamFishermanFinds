import { StyleSheet } from 'react-native';

import { wp } from 'src/utils';

const CARD_SIZE = wp(60);
const FLOAT_SIZE = wp(24);
const FLOAT_OFFSET = wp(10);

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  card: {
    position: 'absolute',
    width: CARD_SIZE + FLOAT_OFFSET,
    height: CARD_SIZE + FLOAT_OFFSET,
  },
  cardImage: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: CARD_SIZE,
    height: CARD_SIZE,
    borderRadius: wp(12),
    overflow: 'hidden',
  },
  floatImage: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: FLOAT_SIZE,
    height: FLOAT_SIZE,
  },
});

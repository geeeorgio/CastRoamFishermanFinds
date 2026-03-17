import { StyleSheet } from 'react-native';

import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: hp(150),
  },
  contentContainer: {
    paddingHorizontal: wp(16),
    gap: wp(10),
  },
  cardButton: {
    width: wp(120),
    height: hp(120),
    borderRadius: wp(12),
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  cardImageRadius: {
    borderRadius: wp(15),
  },
  titleOverlay: {
    paddingHorizontal: wp(8),
    paddingVertical: wp(6),
  },
  title: {
    fontSize: sp(11),
  },
});

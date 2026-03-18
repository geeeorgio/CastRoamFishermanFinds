import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  item: {
    flex: 1,
    height: hp(212),
    overflow: 'hidden',
    padding: wp(8),
    position: 'relative',
  },
  countryContainer: {
    position: 'absolute',
    top: 0,
    right: wp(6),
    backgroundColor: COLORS.green_container,
    padding: wp(6),
    borderRadius: wp(12),
    zIndex: 10,
  },
  country: {
    fontSize: sp(10),
  },
  contentContainer: {
    width: '100%',
    height: '100%',
    gap: '2%',
  },
  imageContainer: {
    width: '100%',
    height: '78%',
    borderRadius: wp(12),
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: wp(12),
  },
  titleContainer: {
    width: '100%',
    height: '20%',
  },
  title: {
    fontSize: sp(12),
    color: COLORS.black,
  },
});

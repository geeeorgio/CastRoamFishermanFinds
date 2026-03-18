import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  item: {
    paddingHorizontal: wp(14),
    paddingVertical: hp(14),
    gap: hp(4),
    borderWidth: wp(1),
    borderColor: COLORS.light_blue_container,
  },
  topContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageContainer: {
    width: wp(40),
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  shareButton: {
    width: wp(40),
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    width: '100%',
    gap: hp(4),
    paddingHorizontal: wp(4),
  },
  title: {
    fontSize: sp(14),
    fontFamily: FONTS.SemiBold,
  },
  description: {
    fontSize: sp(12),
  },
  tip: {
    fontSize: sp(11),
    color: COLORS.yellow,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});

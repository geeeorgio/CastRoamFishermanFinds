import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  modal: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.dark_overlay_2,
  },
  contentContainer: {
    width: '100%',
    paddingHorizontal: wp(16),
  },
  greenContainer: {
    width: '100%',
    gap: hp(16),
    paddingHorizontal: wp(16),
    paddingVertical: hp(20),
  },
  textContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  closeButton: {
    width: wp(40),
    height: wp(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: sp(18),
    fontFamily: FONTS.SemiBold,
  },
  description: {
    fontSize: sp(16),
    fontFamily: FONTS.SemiBold,
  },
  tipContainer: {
    width: '100%',
    height: hp(90),
    flexDirection: 'row',
    gap: wp(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  tipImageContainer: {
    width: wp(55),
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tipImage: {
    width: '100%',
    height: '100%',
  },
  tipText: {
    flex: 1,
    fontSize: sp(12),
    paddingRight: wp(8),
  },
  itemContainer: {
    alignSelf: 'center',
    width: '55%',
    height: hp(212),
  },
  btnContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(16),
  },
  shareButton: {
    width: wp(40),
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  showSpotButton: {
    flex: 1,
    height: hp(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: sp(16),
    color: COLORS.blue_text,
  },
});

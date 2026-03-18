import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: hp(125),
    marginTop: hp(16),
  },
  mainContent: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp(12),
    paddingVertical: hp(10),
    gap: hp(10),
  },
  textContainer: {
    width: '100%',
    flexDirection: 'row',
    gap: wp(10),
  },
  textImgContainer: {
    width: wp(60),
    aspectRatio: 1,
  },
  textImg: {
    width: '100%',
    height: '100%',
  },
  textDescriptionContainer: {
    flex: 1,
    gap: hp(4),
    paddingRight: wp(4),
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  textTitle: {
    fontSize: sp(16),
    fontFamily: FONTS.SemiBold,
  },
  textDescription: {
    fontSize: sp(12),
    fontFamily: FONTS.Regular,
  },
  textNotAvailable: {
    color: COLORS.blue_text,
  },
  btnsContainer: {
    width: '100%',
    flexDirection: 'row',
    gap: wp(8),
  },
  tipBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.yellow,
    borderRadius: wp(12),
    paddingVertical: hp(8),
  },
  tipBtnText: {
    fontSize: sp(14),
    color: COLORS.black,
    textAlign: 'center',
  },
  shareBtn: {
    width: wp(40),
    height: wp(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

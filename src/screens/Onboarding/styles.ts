import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  bkgd: {
    flex: 1,
  },
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: wp(16),
    paddingBottom: hp(40),
  },
  skipButton: {
    alignSelf: 'flex-end',
    marginTop: wp(10),
    paddingVertical: hp(8),
    paddingHorizontal: wp(16),
  },
  skipText: {
    fontFamily: FONTS.Medium,
    fontSize: sp(14),
  },
  imgContainer: {
    width: '100%',
    height: '52%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: hp(20),
  },
  img: {
    width: '100%',
    height: '100%',
  },
  mainContainer: {
    width: '100%',
    height: '38%',
    justifyContent: 'space-evenly',
    gap: hp(16),
    paddingHorizontal: wp(16),
    paddingVertical: hp(20),
    borderWidth: 0,
  },
  textContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: hp(8),
  },
  title: {
    fontFamily: FONTS.SemiBold,
    fontSize: sp(22),
    textAlign: 'center',
  },
  description: {
    fontSize: sp(14),
    textAlign: 'center',
  },
  progressContainer: {
    width: '100%',
    height: hp(3),
    gap: wp(4),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  progressBar: {
    width: wp(40),
    height: '100%',
    borderRadius: wp(10),
  },
  progressBarActive: {
    backgroundColor: COLORS.white,
  },
  progressBarInactive: {
    backgroundColor: COLORS.progress_bar_inactive,
  },
  nextButton: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp(10),
    paddingHorizontal: wp(16),
  },
  nextText: {
    fontSize: sp(16),
    color: COLORS.blue_text,
  },
});

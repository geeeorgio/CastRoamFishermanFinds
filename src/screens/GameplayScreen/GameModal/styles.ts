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
    paddingHorizontal: wp(40),
    backgroundColor: COLORS.dark_overlay,
  },
  mainContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: hp(4),
  },
  textContainer: {
    width: '100%',
    alignItems: 'center',
    padding: wp(16),
    gap: hp(4),
  },
  title: {
    fontSize: sp(18),
    fontFamily: FONTS.SemiBold,
    color: COLORS.black,
    textAlign: 'center',
  },
  description: {
    fontSize: sp(14),
    color: COLORS.black,
    textAlign: 'center',
  },
  buttonsContainer: {
    width: '100%',
    flexDirection: 'row',
    borderTopColor: COLORS.gray,
    borderTopWidth: hp(1),
  },
  exitButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: COLORS.gray,
    borderRightWidth: wp(1),
    padding: wp(10),
  },
  exitButtonText: {
    fontSize: sp(17),
    textAlign: 'center',
  },
  stayButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: wp(10),
  },
  stayButtonText: {
    fontSize: sp(17),
    color: COLORS.green_text,
    textAlign: 'center',
  },
});

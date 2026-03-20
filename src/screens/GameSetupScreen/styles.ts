import { StyleSheet } from 'react-native';

import { FONTS } from 'src/constants';
import { hp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: wp(24),
    paddingVertical: hp(40),
    gap: hp(20),
  },
  imgContainer: {
    width: '100%',
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    width: '100%',
    paddingHorizontal: wp(16),
    paddingVertical: hp(20),
    gap: hp(16),
  },
  contentContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp(6),
  },
  description: {
    fontSize: hp(14),
    textAlign: 'center',
  },
  button: {
    width: '100%',
    paddingVertical: hp(12),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: hp(14),
    fontFamily: FONTS.SemiBold,
  },
});

import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(24),
  },
  contentContainer: {
    gap: hp(16),
  },
  imageContainer: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: wp(12),
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  button: {
    width: '100%',
    paddingVertical: hp(12),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: hp(16),
    color: COLORS.blue_text,
  },
  infoContainer: {
    width: '100%',
    gap: hp(8),
  },
  countryContainer: {
    alignSelf: 'flex-start',
    paddingVertical: hp(4),
    paddingHorizontal: wp(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  country: {
    fontSize: hp(11),
  },
  title: {
    fontSize: hp(18),
    fontFamily: FONTS.SemiBold,
  },
  description: {
    fontSize: hp(14),
    fontFamily: FONTS.Regular,
  },
  factContainer: {
    width: '100%',
    flexDirection: 'row',
    gap: wp(10),
    padding: wp(20),
    borderWidth: wp(1),
    borderColor: COLORS.light_blue_container,
  },
  factImageContainer: {
    width: wp(50),
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  factImage: {
    width: '100%',
    height: '100%',
  },
  factTitle: {
    flex: 1,
    fontSize: hp(14),
  },
});

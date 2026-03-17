import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { hp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: hp(40),
    paddingHorizontal: wp(16),
    gap: hp(24),
  },
  frameContainer: {
    width: '100%',
    aspectRatio: 1,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeContainer: {
    width: wp(70),
    height: wp(70),
    position: 'absolute',
    borderRadius: wp(12),
    overflow: 'hidden',
  },
  placeImage: {
    width: '100%',
    height: '100%',
  },
  placePosition0: {
    top: '5%',
    left: '10%',
  },
  placePosition1: {
    top: '20%',
    right: '5%',
  },
  placePosition2: {
    bottom: '20%',
    left: '2%',
  },
  placePosition3: {
    bottom: '10%',
    right: '10%',
  },
  racoonContainer: {
    width: wp(120),
    height: wp(120),
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  racoonImage: {
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
    textAlign: 'center',
  },
});

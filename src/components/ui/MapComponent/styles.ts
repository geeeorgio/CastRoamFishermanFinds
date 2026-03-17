import { StyleSheet } from 'react-native';

import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  overlay: { position: 'absolute', zIndex: 10 },
  standardCard: {
    width: wp(60),
    height: hp(60),
    borderRadius: wp(12),
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: wp(12),
  },
  floatStandard: {
    position: 'absolute',
    top: -wp(10),
    right: -wp(10),
    width: wp(25),
    height: wp(25),
  },

  activeCard: {
    width: wp(130),
    height: hp(130),
    justifyContent: 'flex-end',
  },
  floatActive: {
    position: 'absolute',
    top: -hp(15),
    right: -wp(5),
    width: wp(35),
    height: hp(35),
    zIndex: 11,
  },
  activeOverlay: {
    padding: wp(8),
    borderBottomLeftRadius: wp(16),
    borderBottomRightRadius: wp(16),
  },
  activeTitle: {
    fontSize: sp(11),
    marginBottom: wp(5),
  },
  btn: {
    paddingVertical: wp(6),
    borderRadius: wp(20),
  },
  btnText: {
    fontSize: sp(12),
    textAlign: 'center',
  },
});

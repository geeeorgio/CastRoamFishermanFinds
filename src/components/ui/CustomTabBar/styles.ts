import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { hp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    width: '92%',
    alignSelf: 'center',
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: wp(12),
    bottom: hp(40),
    zIndex: 1000,
    padding: wp(10),
    borderRadius: wp(22),
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp(8),
    borderRadius: wp(22),
    backgroundColor: COLORS.fade_pink,
    borderWidth: wp(2),
    borderColor: COLORS.white_border,
  },
  activeBtn: {
    backgroundColor: COLORS.pink,
  },
});

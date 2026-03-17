import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { hp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    width: '88%',
    alignSelf: 'center',
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: wp(12),
    bottom: hp(60),
    zIndex: 1000,
    padding: wp(5),
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp(14),
    borderRadius: wp(12),
  },
  activeBtn: {
    backgroundColor: COLORS.light_blue_container,
  },
});

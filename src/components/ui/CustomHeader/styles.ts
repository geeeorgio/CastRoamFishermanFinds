import { StyleSheet } from 'react-native';

import { FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',

    paddingHorizontal: wp(16),
    paddingBottom: hp(16),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: sp(20),
    fontFamily: FONTS.SemiBold,
  },
  settingsButton: {
    width: wp(40),
    height: wp(40),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
});

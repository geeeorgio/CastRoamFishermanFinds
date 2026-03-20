import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { hp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: '90%',
    height: hp(8),
    backgroundColor: COLORS.secondary_green_container,
    borderRadius: wp(12),
  },
  filler: {
    height: '100%',
    backgroundColor: COLORS.red,
    borderRadius: wp(12),
  },
});

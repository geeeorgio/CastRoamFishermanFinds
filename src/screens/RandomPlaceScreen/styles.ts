import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: hp(16),
    paddingHorizontal: wp(16),
    gap: hp(16),
  },
  emptyContainer: {
    width: '100%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.input_background,
    padding: wp(16),
    borderRadius: wp(12),
    gap: hp(8),
  },
  emptyText: {
    fontSize: sp(14),
    textAlign: 'center',
  },
  emptyTip: {
    fontSize: sp(14),
    textAlign: 'center',
    color: COLORS.input_text,
  },
});

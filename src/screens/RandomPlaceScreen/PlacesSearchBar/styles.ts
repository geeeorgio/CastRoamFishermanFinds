import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.input_background,
    borderRadius: wp(12),
    padding: wp(8),
    gap: wp(4),
  },
  input: {
    flex: 1,
    color: COLORS.white,
    fontSize: sp(14),
    paddingRight: wp(30),
  },
  searchButton: {
    width: wp(30),
    height: wp(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  resetButton: {
    position: 'absolute',
    right: wp(8),
    width: wp(24),
    height: wp(24),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: wp(1),
    borderColor: COLORS.input_text,
    borderRadius: wp(12),
    zIndex: 10,
  },
  resetText: {
    fontSize: sp(14),
    color: COLORS.input_text,
    fontFamily: FONTS.SemiBold,
  },
});

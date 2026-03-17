import { StyleSheet } from 'react-native';

import { hp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  contentContainer: {
    gap: hp(16),
  },
  columnWrapper: {
    gap: wp(16),
  },
  footer: {
    height: hp(80),
  },
});

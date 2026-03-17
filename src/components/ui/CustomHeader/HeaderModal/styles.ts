import { StyleSheet } from 'react-native';

import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: wp(16),
    bottom: -hp(75),
    zIndex: 1000,
    padding: wp(16),
    borderRadius: wp(12),
    gap: hp(10),
  },
  button: {
    width: '100%',
  },
  title: {
    fontSize: sp(14),
    textAlign: 'left',
  },
});

import { StyleSheet } from 'react-native';

import { hp, sp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(24),
    paddingBottom: hp(10),
    marginBottom: hp(10),
  },
  livesContainer: {
    flexDirection: 'row',
    gap: wp(6),
  },
  lifeText: {
    fontSize: sp(20),
  },
  button: {
    width: wp(40),
    height: wp(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

import { StyleSheet } from 'react-native';

import { hp, wp } from 'src/utils';

export const styles = StyleSheet.create({
  container: {
    width: '55%',
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
    gap: hp(6),
    zIndex: 10,
  },
  topBottomBtn: {
    width: wp(50),
    height: hp(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftRightContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftRightBtn: {
    width: wp(50),
    height: hp(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

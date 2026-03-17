import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { wp } from 'src/utils';

export const styles = StyleSheet.create({
  default: {},
  container: {
    borderRadius: wp(12),
  },
  blue: {
    backgroundColor: COLORS.main_blue_container,
  },
  lightBlue: {
    backgroundColor: COLORS.light_blue_container,
  },
  green: {
    backgroundColor: COLORS.green_container,
  },
});

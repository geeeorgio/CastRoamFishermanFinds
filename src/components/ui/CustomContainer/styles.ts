import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { wp } from 'src/utils';

export const styles = StyleSheet.create({
  default: {
    borderRadius: wp(12),
  },
  lightBlue: {
    backgroundColor: COLORS.light_blue_container,
  },
  darkBlue: {
    backgroundColor: COLORS.main_blue_container,
    borderRadius: wp(12),
  },
  lightGreen: {
    backgroundColor: COLORS.secondary_green_container,
    borderRadius: wp(12),
  },
  darkGreen: {
    backgroundColor: COLORS.green_container,
    borderRadius: wp(12),
  },
  modal: {
    backgroundColor: COLORS.modal_container,
    borderRadius: wp(12),
  },
});

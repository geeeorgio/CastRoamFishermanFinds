import type { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

import { COLORS } from 'src/constants';

const GameBackground = ({ children }: { children: ReactNode }) => {
  return <View style={styles.container}>{children}</View>;
};

export default GameBackground;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.main_background,
  },
});

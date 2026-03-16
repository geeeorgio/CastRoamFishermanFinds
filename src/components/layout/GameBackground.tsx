import type { ReactNode } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

import { COLORS } from 'src/constants';
import { usePersistContext } from 'src/hooks/usePersistContext';

const GameBackground = ({ children }: { children: ReactNode }) => {
  const { contextBackground } = usePersistContext();

  if (contextBackground === null) {
    return <View style={styles.container}>{children}</View>;
  }

  return (
    <ImageBackground
      source={contextBackground}
      style={styles.image}
      resizeMode="cover"
    >
      {children}
    </ImageBackground>
  );
};

export default GameBackground;

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.main_background,
  },
});

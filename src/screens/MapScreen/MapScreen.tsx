import type { RouteProp } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { useMemo } from 'react';
import { View } from 'react-native';

import { styles } from './styles';

import { MapComponent } from 'src/components';
import type { MainStackParamList } from 'src/types';

const MapScreen = () => {
  const route = useRoute<RouteProp<MainStackParamList, 'MapScreen'>>();

  const place = useMemo(
    () => route.params?.place ?? undefined,
    [route.params?.place],
  );

  return (
    <View style={styles.container}>
      <MapComponent place={place} />
    </View>
  );
};

export default MapScreen;

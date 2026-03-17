import type { RouteProp } from '@react-navigation/native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';

import MapPlacesList from './MapPlacesList/MapPlacesList';

import { MapComponent } from 'src/components';
import { PLACES_LIST } from 'src/constants';
import type {
  MainStackParamList,
  PLACE_INFO_TYPE,
  RootStackNavigationProp,
} from 'src/types';
import { shuffleArray } from 'src/utils';

const MapScreen = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const route = useRoute<RouteProp<MainStackParamList, 'MapScreen'>>();

  const [selectedPlace, setSelectedPlace] = useState<
    PLACE_INFO_TYPE | undefined
  >(route.params?.place);

  const [places] = useState(() => shuffleArray([...PLACES_LIST]));

  useEffect(() => {
    if (route.params?.place) setSelectedPlace(route.params.place);
  }, [route.params?.place]);

  const handleSelect = useCallback(
    (place: PLACE_INFO_TYPE) => setSelectedPlace(place),
    [],
  );
  const handleMapPress = useCallback(() => setSelectedPlace(undefined), []);

  return (
    <View style={{ flex: 1 }}>
      <MapComponent
        place={selectedPlace}
        onMapPress={handleMapPress}
        onDetailPress={(id) =>
          navigation.navigate('PlaceDetailsScreen', { placeId: id })
        }
      />

      {!selectedPlace && (
        <MapPlacesList places={places} onSelectPlace={handleSelect} />
      )}
    </View>
  );
};

export default MapScreen;

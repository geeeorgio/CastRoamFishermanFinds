import { useNavigation } from '@react-navigation/native';
import { useCallback, useMemo, useState } from 'react';
import { Keyboard, Pressable, View } from 'react-native';

import PlacesList from './PlacesList/PlacesList';
import PlacesSearchBar from './PlacesSearchBar/PlacesSearchBar';
import { styles } from './styles';

import { CustomText } from 'src/components';
import { PLACES_LIST } from 'src/constants';
import type { RootStackNavigationProp } from 'src/types';

const RandomPlaceScreen = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const [filter, setFilter] = useState<string>('');

  const places = useMemo(() => {
    const trimmed = filter.trim().toLowerCase();

    if (!trimmed) return PLACES_LIST;

    return PLACES_LIST.filter(
      (place) =>
        place.title.toLowerCase().includes(trimmed) ||
        place.country.toLowerCase().includes(trimmed),
    );
  }, [filter]);

  const handleShowDetails = useCallback(
    (placeId: string) => {
      navigation.navigate('PlaceDetailsScreen', { placeId });
    },
    [navigation],
  );

  return (
    <Pressable style={styles.container} onPress={Keyboard.dismiss}>
      <PlacesSearchBar setFilter={setFilter} />

      {places.length > 0 ? (
        <PlacesList places={places} handleShowDetails={handleShowDetails} />
      ) : (
        <View style={styles.emptyContainer}>
          <CustomText style={styles.emptyText}>
            No spots found for your search 🕵️
          </CustomText>
          <CustomText style={styles.emptyTip}>
            Try again with a different search query or tap Pick a vibe to find a
            random spot.
          </CustomText>
        </View>
      )}
    </Pressable>
  );
};

export default RandomPlaceScreen;

import type { RouteProp } from '@react-navigation/native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useCallback } from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import DetailsHeader from './DetailsHeader/DetailsHeader';
import PlaceInfo from './PlaceInfo/PlaceInfo';
import { styles } from './styles';

import { PLACES_LIST } from 'src/constants';
import type {
  PLACE_INFO_TYPE,
  RootStackNavigationProp,
  RootStackParamList,
} from 'src/types';
import { hp } from 'src/utils';

const PlaceDetailsScreen = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const route = useRoute<RouteProp<RootStackParamList, 'PlaceDetailsScreen'>>();
  const { placeId } = route.params;

  const place = PLACES_LIST.find((p) => p.id === placeId);

  const { top, bottom } = useSafeAreaInsets();

  const handleBackPress = useCallback(() => {
    navigation.navigate('MainStack', {
      screen: 'RandomPlaceScreen',
    });
  }, [navigation]);

  const handleShowOnMapPress = useCallback(
    (spot: PLACE_INFO_TYPE) => {
      navigation.navigate('MainStack', {
        screen: 'MapScreen',
        params: { place: spot },
      });
    },
    [navigation],
  );

  return (
    <View style={[styles.container, { paddingBottom: bottom + hp(40) }]}>
      <DetailsHeader paddingTop={top + hp(10)} onBackPress={handleBackPress} />

      {place && (
        <PlaceInfo place={place} handleShowOnMapPress={handleShowOnMapPress} />
      )}
    </View>
  );
};

export default PlaceDetailsScreen;

import { useNavigation } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { Image, ImageBackground, View } from 'react-native';

import PickedModal from './PickedModal/PickedModal';
import { styles } from './styles';

import { CustomButton, CustomText } from 'src/components';
import { ONBD_IMAGES, PICK_VIBE_FRAME, PLACES_LIST } from 'src/constants';
import type { PLACE_INFO_TYPE, RootStackNavigationProp } from 'src/types';
import { shuffleArray } from 'src/utils';

type PlacePositionKey =
  | 'placePosition0'
  | 'placePosition1'
  | 'placePosition2'
  | 'placePosition3';

const PickPlaceScreen = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const [places, setPlaces] = useState(() =>
    shuffleArray(PLACES_LIST).slice(0, 4),
  );

  const handleSwitchVibe = useCallback(() => {
    setPlaces(shuffleArray(PLACES_LIST).slice(0, 4));
  }, []);

  const [pickedPlace, setPickedPlace] = useState<PLACE_INFO_TYPE | null>(null);

  const handlePickPlace = useCallback((place: PLACE_INFO_TYPE) => {
    setPickedPlace(place);
  }, []);

  const handleShowDetails = useCallback(
    (placeId: string) => {
      navigation.navigate('PlaceDetailsScreen', { placeId });

      setPickedPlace(null);
    },
    [navigation],
  );

  const handleClose = useCallback(() => {
    setPickedPlace(null);
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={PICK_VIBE_FRAME}
        style={styles.frameContainer}
        resizeMode="contain"
      >
        {places.map((place, index) => (
          <CustomButton
            variant="default"
            onPress={() => handlePickPlace(place)}
            key={place.id}
            style={[
              styles.placeContainer,
              styles[`placePosition${index}` as PlacePositionKey],
            ]}
          >
            <Image
              source={place.image}
              style={styles.placeImage}
              resizeMode="cover"
            />
          </CustomButton>
        ))}

        <View style={styles.racoonContainer}>
          <Image
            source={ONBD_IMAGES.onbd1}
            style={styles.racoonImage}
            resizeMode="contain"
          />
        </View>
      </ImageBackground>

      <CustomButton
        variant="lightBlue"
        style={styles.button}
        onPress={handleSwitchVibe}
      >
        <CustomText style={styles.buttonText}>Switch a vibe</CustomText>
      </CustomButton>

      {pickedPlace && (
        <PickedModal
          visible={Boolean(pickedPlace)}
          pickedPlace={pickedPlace}
          handleShowDetails={handleShowDetails}
          onClose={handleClose}
        />
      )}
    </View>
  );
};

export default PickPlaceScreen;

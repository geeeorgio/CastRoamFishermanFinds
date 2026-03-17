import { memo, useRef, useState } from 'react';
import { Image, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import CustomButton from '../CustomButton/CustomButton';

import { styles } from './styles';

import { ITEMS_IMAGES, PLACES_LIST } from 'src/constants';
import type { PLACE_INFO_TYPE } from 'src/types';
import { shuffleArray } from 'src/utils';

interface MapComponentProps {
  place?: PLACE_INFO_TYPE;
  onMapPress?: () => void;
  onDetailPress?: (placeId: string) => void;
}

const CARD_SIZE = 60;

const MapComponent = memo(
  ({ place, onMapPress, onDetailPress }: MapComponentProps) => {
    const [initialPlace] = useState<PLACE_INFO_TYPE>(
      () => shuffleArray(PLACES_LIST)[0],
    );
    const currentPlace = place ?? initialPlace;

    const mapRef = useRef<MapView>(null);
    const [cardPos, setCardPos] = useState<{ x: number; y: number } | null>(
      null,
    );

    const updateCardPosition = async () => {
      if (!mapRef.current) return;
      const point = await mapRef.current.pointForCoordinate(
        currentPlace.coordinates,
      );
      setCardPos(point);
    };

    return (
      <View style={styles.container}>
        <MapView
          ref={mapRef}
          provider={PROVIDER_GOOGLE}
          toolbarEnabled={false}
          region={{
            ...currentPlace.coordinates,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02,
          }}
          onMapReady={updateCardPosition}
          onRegionChange={updateCardPosition}
          onPress={(e) => {
            if (e.nativeEvent.action !== 'marker-press') {
              onMapPress?.();
            }
          }}
          style={styles.map}
        />

        {cardPos && (
          <CustomButton
            variant="default"
            onPress={() => onDetailPress?.(currentPlace.id)}
            style={[
              styles.card,
              {
                left: cardPos.x - CARD_SIZE / 2,
                top: cardPos.y - CARD_SIZE - 10,
              },
            ]}
          >
            <Image
              source={currentPlace.image}
              style={styles.cardImage}
              resizeMode="cover"
            />
            <Image
              source={ITEMS_IMAGES.float}
              style={styles.floatImage}
              resizeMode="contain"
            />
          </CustomButton>
        )}
      </View>
    );
  },
);

export default MapComponent;

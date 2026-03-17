import { memo, useCallback, useEffect, useRef, useState } from 'react';
import { Image, ImageBackground, View, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import { styles } from './styles';

import { CustomButton, CustomText } from 'src/components';
import { ITEMS_IMAGES, PLACES_LIST } from 'src/constants';
import type { PLACE_INFO_TYPE } from 'src/types';
import { shuffleArray, wp } from 'src/utils';

interface Props {
  place?: PLACE_INFO_TYPE;
  onMapPress?: () => void;
  onDetailPress?: (id: string) => void;
}

const MapComponent = memo(({ place, onMapPress, onDetailPress }: Props) => {
  const mapRef = useRef<MapView>(null);

  const [initialPlace] = useState(() => shuffleArray([...PLACES_LIST])[0]);

  const [lastActivePlace, setLastActivePlace] = useState<PLACE_INFO_TYPE>(
    place ?? initialPlace,
  );
  const [cardPos, setCardPos] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (place) {
      setLastActivePlace(place);
    }
  }, [place]);

  const updatePos = useCallback(async () => {
    if (!mapRef.current) return;
    const point = await mapRef.current.pointForCoordinate(
      lastActivePlace.coordinates,
    );
    setCardPos(point);
  }, [lastActivePlace]);

  useEffect(() => {
    if (place) {
      mapRef.current?.animateToRegion(
        {
          ...place.coordinates,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        },
        600,
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [place?.id]);

  return (
    <View style={{ flex: 1 }}>
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        style={StyleSheet.absoluteFill}
        onRegionChange={updatePos}
        onRegionChangeComplete={updatePos}
        onMapReady={updatePos}
        onPress={onMapPress}
        initialRegion={{
          ...(place?.coordinates ?? initialPlace.coordinates),
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        }}
      />

      {cardPos && (
        <View
          pointerEvents="box-none"
          style={[
            styles.overlay,
            {
              left: cardPos.x - (place ? wp(65) : wp(30)),
              top: cardPos.y - (place ? wp(145) : wp(75)),
            },
          ]}
        >
          {place ? (
            <ImageBackground
              source={lastActivePlace.image}
              style={styles.activeCard}
              imageStyle={{ borderRadius: wp(16) }}
            >
              <Image source={ITEMS_IMAGES.float} style={styles.floatActive} />
              <View style={styles.activeOverlay}>
                <CustomText numberOfLines={1} style={styles.activeTitle}>
                  {lastActivePlace.title}
                </CustomText>
                <CustomButton
                  variant="green"
                  style={styles.btn}
                  onPress={() => onDetailPress?.(lastActivePlace.id)}
                >
                  <CustomText style={styles.btnText}>Explore</CustomText>
                </CustomButton>
              </View>
            </ImageBackground>
          ) : (
            <CustomButton
              variant="default"
              onPress={() => onDetailPress?.(lastActivePlace.id)}
              style={styles.standardCard}
            >
              <Image source={lastActivePlace.image} style={styles.img} />
              <Image source={ITEMS_IMAGES.float} style={styles.floatStandard} />
            </CustomButton>
          )}
        </View>
      )}
    </View>
  );
});

export default MapComponent;

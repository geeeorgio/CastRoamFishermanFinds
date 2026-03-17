import { memo } from 'react';
import { FlatList, ImageBackground, View } from 'react-native';
import type { ListRenderItem } from 'react-native';

import { styles } from './styles';

import { CustomButton, CustomText } from 'src/components';
import type { PLACE_INFO_TYPE } from 'src/types';

interface MapPlacesListProps {
  places: PLACE_INFO_TYPE[];
  onSelectPlace: (place: PLACE_INFO_TYPE) => void;
}

const MapPlacesList = memo(({ places, onSelectPlace }: MapPlacesListProps) => {
  const renderItem: ListRenderItem<PLACE_INFO_TYPE> = ({ item }) => (
    <CustomButton
      variant="default"
      onPress={() => onSelectPlace(item)}
      style={styles.cardButton}
    >
      <ImageBackground
        source={item.image}
        style={styles.cardImage}
        imageStyle={styles.cardImageRadius}
        resizeMode="cover"
      >
        <View style={styles.titleOverlay}>
          <CustomText numberOfLines={2} style={styles.title}>
            {item.title}
          </CustomText>
        </View>
      </ImageBackground>
    </CustomButton>
  );

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={places}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
});

export default MapPlacesList;

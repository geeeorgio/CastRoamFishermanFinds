import { memo } from 'react';
import { Image, View } from 'react-native';

import { styles } from './styles';

import { CustomButton, CustomText } from 'src/components';
import type { PLACE_INFO_TYPE } from 'src/types';

interface PlaceItemProps {
  place: PLACE_INFO_TYPE;
  handleShowDetails: (placeId: string) => void;
}

const PlaceItem = memo(({ place, handleShowDetails }: PlaceItemProps) => {
  return (
    <CustomButton
      variant="lightBlue"
      style={styles.item}
      onPress={() => handleShowDetails(place.id)}
    >
      <View style={styles.countryContainer}>
        <CustomText style={styles.country}>{place.country}</CustomText>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.imageContainer}>
          <Image source={place.image} style={styles.img} resizeMode="cover" />
        </View>
        <View style={styles.titleContainer}>
          <CustomText
            style={styles.title}
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {place.title}
          </CustomText>
        </View>
      </View>
    </CustomButton>
  );
});

export default PlaceItem;

import React from 'react';
import { Image, ScrollView, View } from 'react-native';

import { styles } from './styles';

import { CustomButton, CustomContainer, CustomText } from 'src/components';
import { ITEMS_IMAGES } from 'src/constants';
import type { PLACE_INFO_TYPE } from 'src/types';

interface PlaceInfoProps {
  place: PLACE_INFO_TYPE;
  handleShowOnMapPress: (place: PLACE_INFO_TYPE) => void;
}

const PlaceInfo = ({ place, handleShowOnMapPress }: PlaceInfoProps) => {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.imageContainer}>
        <Image source={place?.image} style={styles.image} resizeMode="cover" />
      </View>

      <CustomButton
        variant="lightBlue"
        style={styles.button}
        onPress={() => handleShowOnMapPress(place)}
      >
        <CustomText style={styles.buttonText}>Show on Map</CustomText>
      </CustomButton>

      <View style={styles.infoContainer}>
        <CustomContainer
          colorVariant="darkGreen"
          style={styles.countryContainer}
        >
          <CustomText style={styles.country}>{place?.country}</CustomText>
        </CustomContainer>
        <CustomText style={styles.title}>{place?.title}</CustomText>
        <CustomText style={styles.description}>{place?.description}</CustomText>
      </View>

      <CustomContainer colorVariant="lightGreen" style={styles.factContainer}>
        <View style={styles.factImageContainer}>
          <Image
            source={ITEMS_IMAGES.hook}
            style={styles.factImage}
            resizeMode="contain"
          />
        </View>
        <CustomText style={styles.factTitle}>{place?.fact}</CustomText>
      </CustomContainer>
    </ScrollView>
  );
};

export default PlaceInfo;

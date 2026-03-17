import React, { useMemo } from 'react';
import {
  Image,
  ImageBackground,
  Modal,
  TouchableOpacity,
  View,
} from 'react-native';

import { styles } from './styles';

import {
  CustomButton,
  CustomContainer,
  CustomIcon,
  CustomText,
} from 'src/components';
import { BAR_FRAME, COLORS, DAILY_TIPS_LIST, ONBD_IMAGES } from 'src/constants';
import PlaceItem from 'src/screens/RandomPlaceScreen/PlaceItem/PlaceItem';
import type { PLACE_INFO_TYPE } from 'src/types';
import { handleShare, hp, shuffleArray, wp } from 'src/utils';

interface PickedModalProps {
  visible: boolean;
  pickedPlace: PLACE_INFO_TYPE;
  handleShowDetails: (placeId: string) => void;
  onClose: () => void;
}

const PickedModal = ({
  visible,
  pickedPlace,
  handleShowDetails,
  onClose,
}: PickedModalProps) => {
  const randomTip = useMemo(() => shuffleArray(DAILY_TIPS_LIST)[0], []);

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      style={styles.modal}
      statusBarTranslucent
    >
      <TouchableOpacity onPress={onClose} style={styles.container}>
        <View style={styles.contentContainer}>
          <CustomContainer
            colorVariant="lightGreen"
            style={styles.greenContainer}
          >
            <View style={styles.textContainer}>
              <CustomText style={styles.title}>Today’s Finds</CustomText>
              <CustomButton
                variant="default"
                style={styles.closeButton}
                onPress={onClose}
              >
                <CustomText style={styles.description}>X</CustomText>
              </CustomButton>
            </View>

            <ImageBackground
              source={BAR_FRAME}
              style={styles.tipContainer}
              resizeMode="contain"
            >
              <View style={styles.tipImageContainer}>
                <Image
                  source={ONBD_IMAGES.onbd3}
                  style={styles.tipImage}
                  resizeMode="contain"
                />
              </View>
              <CustomText style={styles.tipText}>{randomTip.text}</CustomText>
            </ImageBackground>

            <View style={styles.itemContainer}>
              <PlaceItem
                place={pickedPlace}
                handleShowDetails={() => handleShowDetails(pickedPlace.id)}
                key={pickedPlace.id}
              />
            </View>

            <View style={styles.btnContainer}>
              <CustomButton
                variant="lightBlue"
                style={styles.shareButton}
                onPress={handleShare}
              >
                <CustomIcon
                  name="share"
                  width={wp(20)}
                  height={hp(20)}
                  color={COLORS.white}
                />
              </CustomButton>

              <CustomButton
                variant="lightBlue"
                style={styles.showSpotButton}
                onPress={() => handleShowDetails(pickedPlace.id)}
              >
                <CustomText style={styles.btnText}>Show Spot</CustomText>
              </CustomButton>
            </View>
          </CustomContainer>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default PickedModal;

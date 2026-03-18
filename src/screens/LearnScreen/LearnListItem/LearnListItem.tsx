import { memo } from 'react';
import { Image, View } from 'react-native';

import { styles } from './styles';

import {
  CustomButton,
  CustomContainer,
  CustomIcon,
  CustomText,
} from 'src/components';
import { COLORS, ITEMS_IMAGES } from 'src/constants';
import type { Fact_Type } from 'src/types';
import { handleShare, hp, wp } from 'src/utils';

interface LearnListItemProps {
  item: Fact_Type;
}

const LearnListItem = memo(({ item }: LearnListItemProps) => {
  return (
    <CustomContainer colorVariant="lightGreen" style={styles.item}>
      <View style={styles.topContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={ITEMS_IMAGES.float}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <CustomButton
          variant="lightBlue"
          style={styles.shareButton}
          onPress={handleShare}
        >
          <CustomIcon
            name="share"
            width={wp(18)}
            height={hp(18)}
            color={COLORS.white}
          />
        </CustomButton>
      </View>

      <View style={styles.bottomContainer}>
        <CustomText style={styles.title}>{item.title}</CustomText>
        <CustomText style={styles.description}>{item.description}</CustomText>
        <CustomText style={styles.tip}>{`Try this: ${item.tip}`}</CustomText>
      </View>
    </CustomContainer>
  );
});

export default LearnListItem;

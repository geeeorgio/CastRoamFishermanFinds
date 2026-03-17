import { styles } from './styles';

import { CustomButton, CustomContainer, CustomIcon } from 'src/components';
import { COLORS } from 'src/constants';
import { handleShare, hp, wp } from 'src/utils';

interface DetailsHeaderProps {
  paddingTop: number;
  onBackPress: () => void;
}

const DetailsHeader = ({ paddingTop, onBackPress }: DetailsHeaderProps) => {
  return (
    <CustomContainer
      colorVariant="darkGreen"
      style={[styles.header, { paddingTop }]}
    >
      <CustomButton
        variant="lightBlue"
        onPress={onBackPress}
        style={styles.button}
      >
        <CustomIcon
          name="back"
          width={wp(20)}
          height={hp(20)}
          color={COLORS.white}
        />
      </CustomButton>

      <CustomButton
        variant="lightBlue"
        onPress={handleShare}
        style={styles.button}
      >
        <CustomIcon
          name="share"
          width={wp(20)}
          height={hp(20)}
          color={COLORS.white}
        />
      </CustomButton>
    </CustomContainer>
  );
};

export default DetailsHeader;

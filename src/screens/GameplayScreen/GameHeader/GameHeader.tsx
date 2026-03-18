import { View } from 'react-native';

import { styles } from './styles';

import {
  CustomButton,
  CustomContainer,
  CustomIcon,
  CustomText,
} from 'src/components';
import { COLORS } from 'src/constants';
import { hp, wp } from 'src/utils';

interface GameHeaderProps {
  paddingTop: number;
  lives: number;
  onPausePress: () => void;
}

const GameHeader = ({ paddingTop, lives, onPausePress }: GameHeaderProps) => {
  return (
    <CustomContainer
      colorVariant="darkGreen"
      style={[styles.header, { paddingTop }]}
    >
      <View style={styles.livesContainer}>
        {Array.from({ length: lives }).map((_, index) => (
          <CustomText key={index} style={styles.lifeText}>
            ❤️
          </CustomText>
        ))}
      </View>

      <CustomButton
        variant="lightBlue"
        onPress={onPausePress}
        style={styles.button}
      >
        <CustomIcon
          name="pause"
          width={wp(20)}
          height={hp(20)}
          color={COLORS.white}
        />
      </CustomButton>
    </CustomContainer>
  );
};

export default GameHeader;

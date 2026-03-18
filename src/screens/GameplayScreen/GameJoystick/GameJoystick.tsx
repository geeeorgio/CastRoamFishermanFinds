import { View } from 'react-native';

import { styles } from './styles';

import { CustomButton, CustomIcon } from 'src/components';
import { COLORS } from 'src/constants';
import { hp, wp } from 'src/utils';

interface GameJoystickProps {
  onUpPress: () => void;
  onDownPress: () => void;
  onLeftPress: () => void;
  onRightPress: () => void;
  bottom: number;
}

const GameJoystick = ({
  onUpPress,
  onDownPress,
  onLeftPress,
  onRightPress,
  bottom,
}: GameJoystickProps) => {
  return (
    <View style={[styles.container, { bottom }]}>
      <CustomButton
        variant="lightBlue"
        style={styles.topBottomBtn}
        onPressIn={onUpPress}
      >
        <CustomIcon
          name="arrUp"
          color={COLORS.white}
          width={wp(20)}
          height={hp(20)}
        />
      </CustomButton>

      <View style={styles.leftRightContainer}>
        <CustomButton
          variant="lightBlue"
          style={styles.leftRightBtn}
          onPressIn={onLeftPress}
        >
          <CustomIcon
            name="arrLeft"
            color={COLORS.white}
            width={wp(20)}
            height={hp(20)}
          />
        </CustomButton>

        <CustomButton
          variant="lightBlue"
          style={styles.leftRightBtn}
          onPressIn={onRightPress}
        >
          <CustomIcon
            name="arrRight"
            color={COLORS.white}
            width={wp(20)}
            height={hp(20)}
          />
        </CustomButton>
      </View>

      <CustomButton
        variant="lightBlue"
        style={styles.topBottomBtn}
        onPressIn={onDownPress}
      >
        <CustomIcon
          name="arrDown"
          color={COLORS.white}
          width={wp(20)}
          height={hp(20)}
        />
      </CustomButton>
    </View>
  );
};

export default GameJoystick;

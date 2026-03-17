import type { BottomTabHeaderProps } from '@react-navigation/bottom-tabs';
import { getHeaderTitle } from '@react-navigation/elements';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import CustomButton from '../CustomButton/CustomButton';
import CustomContainer from '../CustomContainer/CustomContainer';
import CustomIcon from '../CustomIcons/CustomIcon';
import CustomText from '../CustomText/CustomText';

import HeaderModal from './HeaderModal/HeaderModal';
import { styles } from './styles';

import { COLORS } from 'src/constants';
import type { MainStackNavigationProp } from 'src/types';
import { hp, wp } from 'src/utils';

const CustomHeader = ({ options, route }: BottomTabHeaderProps) => {
  const navigation = useNavigation<MainStackNavigationProp>();
  const title = getHeaderTitle(options, route.name);
  const [showSettings, setShowSettings] = useState(false);

  const toggleShowSettingsModal = useCallback(() => {
    setShowSettings(!showSettings);
  }, [showSettings]);

  const handleNavigateToPickPlaceScreen = useCallback(() => {
    setShowSettings(false);
    navigation.reset({
      index: 0,
      routes: [{ name: 'PickPlaceScreen' }],
    });
  }, [navigation]);

  const { top } = useSafeAreaInsets();

  useFocusEffect(
    useCallback(() => {
      return () => {
        setShowSettings(false);
      };
    }, []),
  );

  return (
    <CustomContainer
      colorVariant="darkGreen"
      style={[styles.container, { paddingTop: top + hp(10) }]}
    >
      <CustomText style={styles.title}>{title}</CustomText>
      <CustomButton
        variant="lightBlue"
        onPress={toggleShowSettingsModal}
        style={styles.settingsButton}
      >
        <CustomIcon
          name="settings"
          width={wp(24)}
          height={hp(24)}
          color={COLORS.white}
        />
      </CustomButton>

      {showSettings && (
        <HeaderModal onClick={handleNavigateToPickPlaceScreen} />
      )}
    </CustomContainer>
  );
};

export default CustomHeader;

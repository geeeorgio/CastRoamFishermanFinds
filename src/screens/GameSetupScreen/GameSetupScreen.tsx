import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';
import { Image, View } from 'react-native';

import { styles } from './styles';

import { CustomButton, CustomContainer, CustomText } from 'src/components';
import { GAME_SCREEN_INFO } from 'src/constants';
import type { RootStackNavigationProp } from 'src/types';

const GameSetupScreen = () => {
  const navigation = useNavigation<RootStackNavigationProp>();

  const handleStartGame = useCallback(() => {
    navigation.navigate('GameplayScreen');
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          source={GAME_SCREEN_INFO.image}
          style={styles.img}
          resizeMode="contain"
        />
      </View>
      <CustomContainer colorVariant="darkGreen" style={styles.textContainer}>
        <View style={styles.contentContainer}>
          <CustomText style={styles.description}>
            {GAME_SCREEN_INFO.description}
          </CustomText>
        </View>
        <CustomButton
          variant="lightBlue"
          onPress={handleStartGame}
          style={styles.button}
        >
          <CustomText style={styles.buttonText}>
            {GAME_SCREEN_INFO.buttonText}
          </CustomText>
        </CustomButton>
      </CustomContainer>
    </View>
  );
};

export default GameSetupScreen;

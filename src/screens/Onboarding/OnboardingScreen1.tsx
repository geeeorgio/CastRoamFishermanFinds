import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';
import { Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';

import { CustomButton, CustomContainer, CustomText } from 'src/components';
import { MAIN_BACKGROUND, ONBOARDING_INFO } from 'src/constants';
import { useOnboardingContext } from 'src/hooks/useOnboardingContext';
import { usePersistContext } from 'src/hooks/usePersistContext';
import type { OnboardingStackNavigationProp } from 'src/types';

const OnboardingScreen1 = () => {
  const navigation = useNavigation<OnboardingStackNavigationProp>();
  const { setPersistedContextBackground } = usePersistContext();
  const { setIsContextOnboardingDone } = useOnboardingContext();

  useFocusEffect(
    useCallback(() => {
      setPersistedContextBackground(MAIN_BACKGROUND);
    }, [setPersistedContextBackground]),
  );

  const handleSkip = useCallback(() => {
    setIsContextOnboardingDone(true);
  }, [setIsContextOnboardingDone]);

  const handleNext = useCallback(() => {
    navigation.navigate('OnboardingScreen2');
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <CustomButton
        variant="green"
        onPress={handleSkip}
        style={styles.skipButton}
      >
        <CustomText style={styles.skipText}>Skip</CustomText>
      </CustomButton>

      <View style={styles.imgContainer}>
        <Image
          source={ONBOARDING_INFO.onboarding_1.image}
          style={styles.img}
          resizeMode="contain"
        />
      </View>

      <CustomContainer colorVariant="darkGreen" style={styles.mainContainer}>
        <View style={styles.textContainer}>
          <CustomText style={styles.title}>
            {ONBOARDING_INFO.onboarding_1.title}
          </CustomText>
          <CustomText style={styles.description}>
            {ONBOARDING_INFO.onboarding_1.description}
          </CustomText>
        </View>

        <View style={styles.progressContainer}>
          {Array.from({ length: 3 }).map((_, idx) => (
            <View
              key={idx}
              style={[
                styles.progressBar,
                idx === ONBOARDING_INFO.onboarding_1.index
                  ? styles.progressBarActive
                  : styles.progressBarInactive,
              ]}
            />
          ))}
        </View>

        <CustomButton
          variant="lightBlue"
          onPress={handleNext}
          style={styles.nextButton}
        >
          <CustomText style={styles.nextText}>
            {ONBOARDING_INFO.onboarding_1.buttonText}
          </CustomText>
        </CustomButton>
      </CustomContainer>
    </SafeAreaView>
  );
};

export default OnboardingScreen1;

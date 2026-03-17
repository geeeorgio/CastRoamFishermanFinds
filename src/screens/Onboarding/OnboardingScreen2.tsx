import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';
import { Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';

import { CustomButton, CustomContainer, CustomText } from 'src/components';
import { ONBOARDING_INFO } from 'src/constants';
import { useOnboardingContext } from 'src/hooks/useOnboardingContext';
import type { OnboardingStackNavigationProp } from 'src/types';

const OnboardingScreen2 = () => {
  const navigation = useNavigation<OnboardingStackNavigationProp>();
  const { setIsContextOnboardingDone } = useOnboardingContext();

  const handleSkip = useCallback(() => {
    setIsContextOnboardingDone(true);
  }, [setIsContextOnboardingDone]);

  const handleNext = useCallback(() => {
    navigation.navigate('OnboardingScreen3');
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
          source={ONBOARDING_INFO.onboarding_2.image}
          style={styles.img}
          resizeMode="contain"
        />
      </View>

      <CustomContainer colorVariant="darkGreen" style={styles.mainContainer}>
        <View style={styles.textContainer}>
          <CustomText style={styles.title}>
            {ONBOARDING_INFO.onboarding_2.title}
          </CustomText>
          <CustomText style={styles.description}>
            {ONBOARDING_INFO.onboarding_2.description}
          </CustomText>
        </View>

        <View style={styles.progressContainer}>
          {Array.from({ length: 3 }).map((_, idx) => (
            <View
              key={idx}
              style={[
                styles.progressBar,
                idx === ONBOARDING_INFO.onboarding_2.index
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
            {ONBOARDING_INFO.onboarding_2.buttonText}
          </CustomText>
        </CustomButton>
      </CustomContainer>
    </SafeAreaView>
  );
};

export default OnboardingScreen2;

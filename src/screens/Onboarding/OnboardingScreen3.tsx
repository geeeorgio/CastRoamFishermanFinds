import { useCallback } from 'react';
import { Image, ImageBackground, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';

import { CustomButton, CustomContainer, CustomText } from 'src/components';
import { MAIN_BACKGROUND, ONBOARDING_INFO } from 'src/constants';
import { useOnboardingContext } from 'src/hooks/useOnboardingContext';

const OnboardingScreen3 = () => {
  const { setIsContextOnboardingDone } = useOnboardingContext();

  const handleSkip = useCallback(() => {
    setIsContextOnboardingDone(true);
  }, [setIsContextOnboardingDone]);

  return (
    <ImageBackground
      source={MAIN_BACKGROUND}
      style={styles.bkgd}
      resizeMode="cover"
    >
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
            source={ONBOARDING_INFO.onboarding_3.image}
            style={styles.img}
            resizeMode="contain"
          />
        </View>

        <CustomContainer colorVariant="darkGreen" style={styles.mainContainer}>
          <View style={styles.textContainer}>
            <CustomText style={styles.title}>
              {ONBOARDING_INFO.onboarding_3.title}
            </CustomText>
            <CustomText style={styles.description}>
              {ONBOARDING_INFO.onboarding_3.description}
            </CustomText>
          </View>

          <View style={styles.progressContainer}>
            {Array.from({ length: 3 }).map((_, idx) => (
              <View
                key={idx}
                style={[
                  styles.progressBar,
                  idx === ONBOARDING_INFO.onboarding_3.index
                    ? styles.progressBarActive
                    : styles.progressBarInactive,
                ]}
              />
            ))}
          </View>

          <CustomButton
            variant="lightBlue"
            onPress={handleSkip}
            style={styles.nextButton}
          >
            <CustomText style={styles.nextText}>
              {ONBOARDING_INFO.onboarding_3.buttonText}
            </CustomText>
          </CustomButton>
        </CustomContainer>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default OnboardingScreen3;

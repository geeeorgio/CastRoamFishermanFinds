import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainNavigator from './MainNavigator';
import OnboardingNavigator from './OnboardingNavigator';

import { useOnboardingContext } from 'src/hooks/useOnboardingContext';
import { usePersistContext } from 'src/hooks/usePersistContext';
import { GameplayScreen, PlaceDetailsScreen } from 'src/screens';
import type { RootStackParamList } from 'src/types';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const { isContextOnboardingDone, isContextLoading } = useOnboardingContext();
  const { isPersistContextLoading } = usePersistContext();

  if (isContextLoading || isPersistContextLoading) {
    return null;
  }

  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: 'transparent',
        },
        animation: 'fade',
        gestureEnabled: false,
      }}
    >
      {isContextOnboardingDone ? (
        <>
          <RootStack.Screen name="MainStack" component={MainNavigator} />
          <RootStack.Screen
            name="PlaceDetailsScreen"
            component={PlaceDetailsScreen}
          />
          <RootStack.Screen name="GameplayScreen" component={GameplayScreen} />
        </>
      ) : (
        <RootStack.Screen
          name="OnboardingStack"
          component={OnboardingNavigator}
        />
      )}
    </RootStack.Navigator>
  );
};

export default RootNavigator;

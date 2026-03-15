import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainNavigator from './MainNavigator';
import OnboardingNavigator from './OnboardingNavigator';

import type { RootStackParamList } from 'src/types';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
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
      <RootStack.Screen
        name="OnboardingStack"
        component={OnboardingNavigator}
      />
      <RootStack.Screen name="MainStack" component={MainNavigator} />
    </RootStack.Navigator>
  );
};

export default RootNavigator;

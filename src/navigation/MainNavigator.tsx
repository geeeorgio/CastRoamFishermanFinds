import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  GameSetupScreen,
  LearnScreen,
  MapScreen,
  PickPlaceScreen,
  RandomPlaceScreen,
} from 'src/screens';
import type { MainStackParamList } from 'src/types';

const MainStack = createBottomTabNavigator<MainStackParamList>();

const MainNavigator = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'shift',
        sceneStyle: {
          backgroundColor: 'transparent',
        },
      }}
      // tabBar={(props) => <CustomTabBar {...props} />}
      initialRouteName="RandomPlaceScreen"
    >
      <MainStack.Screen
        name="RandomPlaceScreen"
        component={RandomPlaceScreen}
      />
      <MainStack.Screen name="PickPlaceScreen" component={PickPlaceScreen} />
      <MainStack.Screen name="MapScreen" component={MapScreen} />
      <MainStack.Screen name="LearnScreen" component={LearnScreen} />
      <MainStack.Screen name="GameSetupScreen" component={GameSetupScreen} />
    </MainStack.Navigator>
  );
};

export default MainNavigator;

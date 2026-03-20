import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { CustomHeader, CustomTabBar } from 'src/components';
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
        header: (props) => <CustomHeader {...props} />,
        animation: 'shift',
        sceneStyle: {
          backgroundColor: 'transparent',
        },
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
      initialRouteName="RandomPlaceScreen"
    >
      <MainStack.Screen
        name="RandomPlaceScreen"
        component={RandomPlaceScreen}
        options={{ title: 'Today’s Finds' }}
      />
      <MainStack.Screen
        name="PickPlaceScreen"
        component={PickPlaceScreen}
        options={{ title: 'Pick a vibe' }}
      />
      <MainStack.Screen
        name="MapScreen"
        component={MapScreen}
        options={{ title: 'Map' }}
      />
      <MainStack.Screen
        name="LearnScreen"
        component={LearnScreen}
        options={{ title: 'Roam & Learn' }}
      />
      <MainStack.Screen
        name="GameSetupScreen"
        component={GameSetupScreen}
        options={{ title: 'Bear Catch Rush' }}
      />
    </MainStack.Navigator>
  );
};

export default MainNavigator;

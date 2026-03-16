import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { GameBackground } from './components';
import GameContextProvider from './context/GameContextProvider';
import RootNavigator from './navigation/RootNavigator';

function App() {
  return (
    <SafeAreaProvider>
      <GameContextProvider>
        <GameBackground>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </GameBackground>
      </GameContextProvider>
    </SafeAreaProvider>
  );
}

export default App;

import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import styled from 'styled-components/native';

import Navigator from './Navigator';

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <SafeArea>
        <StatusBar barStyle="dark-content" />
        <Navigator />
      </SafeArea>
    </SafeAreaProvider>
  );
};

export default App;

const SafeArea = styled(SafeAreaView)`
  flex: 1;
`;

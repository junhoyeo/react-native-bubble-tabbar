import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import Navigator from './Navigator';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Navigator />
      </SafeAreaView>
    </>
  );
};

export default App;

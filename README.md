<h1 align="center">
  🧼 react-native-bubble-tabbar
</h1>
<p align="center">
  <img alt="cover with mockup" src="./docs/images/cover.png" width="512px">
  <br />
  <a href="https://www.npmjs.org/package/react-native-bubble-tabbar">
    <img alt="npm version" src="https://img.shields.io/npm/v/react-native-bubble-tabbar.svg?style=for-the-badge" />
  </a>
  <a href="https://www.npmjs.org/package/react-native-bubble-tabbar">
    <img alt="weekly downloads" src="https://img.shields.io/npm/dw/react-native-bubble-tabbar.svg?style=for-the-badge" />
  </a>
  <a href="https://www.npmjs.org/package/react-native-bubble-tabbar">
    <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/react-native-bubble-tabbar.svg?style=for-the-badge" />
  </a>
  <a href="./LICENSE">
    <img alt="license" src="https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge" />
  </a>
  <br />
  <a href="https://nodei.co/npm/react-native-bubble-tabbar/">
    <img alt="NPM" src="https://nodei.co/npm/react-native-bubble-tabbar.png" />
  </a>
</p>

> Bubble Tab Bar Component for React Native which supports React Navigation V5 and TypeScript

## 🚀 Action

<img alt="showcase about how it works" src="./docs/images/showcase.gif" width="512px">

## 📦 Installation

```bash
npm install react-native-bubble-tabbar
# Or using yarn
yarn add react-native-bubble-tabbar
```

## 🐋 Usage

```tsx
import React from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {
  BubbleTabBar,
  IBubbleTabConfig,
} from 'react-native-bubble-tabbar';

const tabs: IBubbleTabConfig[] = [
  {
    activeColor: '#cc0066',
    activeBackgroundColor: '#f76a8c',
  },
  {
    activeColor: '#ff6f5e',
    activeBackgroundColor: '#f8dc88',
  },
  {
    activeColor: '#1eb2a6',
    activeBackgroundColor: '#ccf0e1',
  },
  {
    activeColor: '#4d80e4',
    activeBackgroundColor: '#9aceff',
    name: 'Last',
    // Override the default RouteName by providing the `name` property
  },
];

const CustomTabBar: React.FC<BottomTabBarProps> = ({
  state, descriptors, navigation,
}) => {
  return (
    <BubbleTabBar
      state={state}
      descriptors={descriptors}
      navigation={navigation}
      tabs={tabs}
    />
  );
};

const Tab = createBottomTabNavigator();

const MainNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      tabBar={({ state, descriptors, navigation }) =>
        <CustomTabBar
          state={state}
          descriptors={descriptors}
          navigation={navigation}
        />
      }
    >
      <Tab.Screen name="One" component={ScreenOne} />
      <Tab.Screen name="Two" component={ScreenTwo} />
      <Tab.Screen name="Three" component={ScreenThree} />
      <Tab.Screen name="Four" component={ScreenFour} />
      <Tab.Screen
        name="ThisRouteDoesNotShowBecauseOnlyFourAreInTabs"
        component={ScreenHiddenFromTabBar}
      />
    </Tab.Navigator>
  );
};
```

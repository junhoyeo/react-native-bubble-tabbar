# 🧼 react-native-bubble-tabbar
> Bubble Tab Bar Component which supports React Navigation V5 and TypeScript

**Warning: This is just specification yet; Will release it soon as possible!**

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
  BubbleTabConfigProp,
} from 'react-native-bubble-tabbar';

const tabs: BubbleTabConfigProp[] = [
  {
    activeIconColor: '#cc0066',
    activeBackgroundColor: '#f76a8c',
  },
  {
    activeIconColor: '#ff6f5e',
    activeBackgroundColor: '#f8dc88',
  },
  {
    activeIconColor: '#1eb2a6',
    activeBackgroundColor: '#ccf0e1',
  },
  {
    activeIconColor: '#4d80e4',
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
      tags={tabs}
    />
  );
};

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

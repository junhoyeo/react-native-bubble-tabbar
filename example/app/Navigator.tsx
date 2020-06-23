import { NavigationContainer } from '@react-navigation/native';
import {
  createBottomTabNavigator,
  BottomTabBarProps,
} from '@react-navigation/bottom-tabs';
import React from 'react';

import CustomTabBar from './CustomTabBar';
import DummyScreen, {
  DummyScreenOne,
  DummyScreenTwo,
  DummyScreenThree,
  DummyScreenFour,
} from './screens';

const Tab = createBottomTabNavigator();

const MainNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="One"
        tabBar={({ state, descriptors, navigation }: BottomTabBarProps) =>
          <CustomTabBar
            state={state}
            descriptors={descriptors}
            navigation={navigation}
          />
        }
      >
        <Tab.Screen name="One" component={DummyScreenOne} />
        <Tab.Screen name="Two" component={DummyScreenTwo} />
        <Tab.Screen name="Three" component={DummyScreenThree} />
        <Tab.Screen name="Four" component={DummyScreenFour} />
        <Tab.Screen
          name="ThisRouteDoesNotShowBecauseOnlyFourAreInTabs"
          component={DummyScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;

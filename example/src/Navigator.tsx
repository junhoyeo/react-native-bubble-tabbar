import { NavigationContainer } from '@react-navigation/native';
import {
  createBottomTabNavigator,
  BottomTabBarProps,
} from '@react-navigation/bottom-tabs';
import React from 'react';

import CustomTabBar from './CustomTabBar';
import { DummyScreen } from './screens';

const Tab = createBottomTabNavigator();

const MainNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={({ state, descriptors, navigation }: BottomTabBarProps) =>
          <CustomTabBar
            state={state}
            descriptors={descriptors}
            navigation={navigation}
          />
        }
      >
        <Tab.Screen name="One" component={DummyScreen} />
        <Tab.Screen name="Two" component={DummyScreen} />
        <Tab.Screen name="Three" component={DummyScreen} />
        <Tab.Screen name="Four" component={DummyScreen} />
        <Tab.Screen
          name="ThisRouteDoesNotShowBecauseOnlyFourAreInTabs"
          component={DummyScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;

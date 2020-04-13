import React, { useEffect } from 'react';
import { Animated, GestureResponderEvent } from 'react-native';
import styled from 'styled-components/native';

import {
  IAccessibility,
  IBubbleTabConfig,
  TIconRenderer,
  TBubbleTabBarIcon,
} from './types';

interface IBubbleTabParent extends
  Omit<IBubbleTabConfig, 'name' | 'activeIcon'>, IAccessibility {}

export interface IBubbleTab extends IBubbleTabParent {
  iconRenderer: TIconRenderer,
  activeTabSize: number;
  disabledTabSize: number;
  tabName: string;
  icon: TBubbleTabBarIcon;
  isActive: boolean;
  testID?: string;
  onPress?: (event: GestureResponderEvent) => void;
  onLongPress?: (event: GestureResponderEvent) => void;
}

const BubbleTab: React.FC<IBubbleTab> = ({
  iconRenderer,
  activeTabSize,
  disabledTabSize,
  tabName,
  icon,
  activeColor,
  isActive,
  onPress,
  onLongPress,
  accessibilityRole,
  accessibilityLabel,
  accessibilityStates = [],
  testID,
}) => {
  const tabWidth = new Animated.Value(isActive ? activeTabSize : disabledTabSize);
  const labelOpacity = new Animated.Value(isActive ? 1 : 0);
  const labelWidth = new Animated.Value(isActive ? 50 : 0);

  const onTabOpen = () => {
    Animated
      .parallel([
        Animated.timing(tabWidth, {
          toValue: activeTabSize,
          duration: 300,
          useNativeDriver: false,
        }),
        Animated.timing(labelWidth, {
          toValue: 50,
          duration: 300,
          useNativeDriver: false,
        }),
        Animated.timing(labelOpacity, {
          toValue: 1,
          duration: 150,
          delay: 150,
          useNativeDriver: true,
        }),
      ])
      .start();
  };

  const onTabHide = () => {
    Animated
      .parallel([
        Animated.timing(tabWidth, {
          toValue: 75,
          duration: 300,
          useNativeDriver: false,
        }),
        Animated.timing(labelWidth, {
          toValue: 0,
          duration: 300,
          useNativeDriver: false,
        }),
        Animated.timing(labelOpacity, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        }),
      ])
      .start();
  };

  useEffect(
    () => {
      if (!isActive) {
        onTabHide();
      } else {
        onTabOpen();
      }
    },
    [isActive],
  );

  const renderedIcon = iconRenderer({ icon, activeColor });

  return (
    <TouchableBubbleTabContainer
      onPress={onPress}
      onLongPress={onLongPress}
      accessibilityRole={accessibilityRole}
      accessibilityStates={accessibilityStates}
      accessibilityLabel={accessibilityLabel}
      testID={testID}
    >
      <AnimatedBubbleTabWrapper>
        {renderedIcon}
        <BubbleTabLabel>
          {tabName}
        </BubbleTabLabel>
      </AnimatedBubbleTabWrapper>
    </TouchableBubbleTabContainer>
  );
};

export default BubbleTab;

const TouchableBubbleTabContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

const AnimatedBubbleTabWrapper = styled(Animated.View)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 20px;
`;

const BubbleTabLabel = styled(Animated.Text)`
  margin-left: 5px;
  font-size: 12px;
  width: auto;
  height: auto;
  font-weight: bold;
`;

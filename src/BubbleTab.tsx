import React, { useEffect, useState } from 'react';
import { Animated, GestureResponderEvent } from 'react-native';
import { useAnimation } from 'react-native-animation-hooks';
import styled, { css } from 'styled-components/native';

import {
  IAccessibility,
  IBubbleTabConfig,
  TIconRenderer,
  TBubbleTabBarIcon,
} from './types';

interface IBubbleTabParent
  extends Omit<IBubbleTabConfig, 'name' | 'activeIcon'>,
    IAccessibility {}

export interface IBubbleTab extends IBubbleTabParent {
  iconRenderer: TIconRenderer;
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
  inactiveColor = '#e0e0e0',
  activeBackgroundColor,
  isActive,
  onPress,
  onLongPress,
  accessibilityRole,
  accessibilityLabel,
  accessibilityState,
  testID,
}) => {
  const [isOpenAnimation, setIsOpenAnimation] = useState(isActive);

  const tabWidth = useAnimation({
    type: 'timing',
    initialValue: isActive ? activeTabSize : disabledTabSize,
    toValue: isOpenAnimation ? activeTabSize : 75,
    duration: 300,
    useNativeDriver: false,
  });

  const labelOpacity = useAnimation({
    type: 'timing',
    initialValue: isActive ? 1 : 0,
    toValue: isOpenAnimation ? 1 : 0,
    duration: isOpenAnimation ? 150 : 100,
    delay: isOpenAnimation ? 150 : 0,
    useNativeDriver: true,
  });

  useEffect(() => setIsOpenAnimation(isActive), [isActive]);

  const color = isActive ? activeColor : inactiveColor;
  const backgroundColor = isActive ? activeBackgroundColor : 'transparent';
  const renderedIcon = iconRenderer({ icon, color });

  return (
    <TouchableBubbleTabContainer
      onPress={onPress}
      onLongPress={onLongPress}
      accessibilityRole={accessibilityRole}
      accessibilityState={accessibilityState}
      accessibilityLabel={accessibilityLabel}
      testID={testID}
    >
      <AnimatedBubbleTabWrapper
        backgroundColor={backgroundColor}
        style={{ width: tabWidth }}
      >
        {renderedIcon}
        {isActive && (
          <BubbleTabLabel
            numberOfLines={1}
            color={color}
            style={{ opacity: labelOpacity }}
          >
            {tabName}
          </BubbleTabLabel>
        )}
      </AnimatedBubbleTabWrapper>
    </TouchableBubbleTabContainer>
  );
};

export default BubbleTab;

const TouchableBubbleTabContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

interface IAnimatedBubbleTabWrapper {
  backgroundColor: string;
}

const AnimatedBubbleTabWrapper = styled(
  Animated.View,
)<IAnimatedBubbleTabWrapper>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 18px;
  border-radius: 20px;

  ${({ backgroundColor }) =>
    backgroundColor &&
    css`
      background-color: ${backgroundColor};
    `};
`;

interface IBubbleTabLabel {
  color: string;
}

const BubbleTabLabel = styled(Animated.Text)<IBubbleTabLabel>`
  margin-left: 10px;
  font-size: 14.5px;
  width: auto;
  height: auto;
  font-weight: bold;

  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `};
`;

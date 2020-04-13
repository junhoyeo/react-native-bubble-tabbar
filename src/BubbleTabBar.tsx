import React, { useCallback, useMemo } from 'react';
import { AccessibilityStates } from 'react-native';
import styled, { css } from 'styled-components/native';

import BubbleTab from './BubbleTab';
import { IBubbleTabBar, IRoute } from './types';

import {
  defaultIconRenderer,
  defaultActiveTabSize,
  defaultDisabledTabSize,
  defaultBackgroundColor,
} from './constants';

const BubbleTabBar: React.FC<IBubbleTabBar> = ({
  iconRenderer = defaultIconRenderer,
  activeTabSize = defaultActiveTabSize,
  disabledTabSize = defaultDisabledTabSize,
  backgroundColor = defaultBackgroundColor,
  tabs,
  style,
  state,
  descriptors,
  navigation,
}) => {
  const tabRoutes = useMemo(
    () => {
      const { routes } = state;
      return routes.slice(0, 4);
    },
    [state.routes],
  );

  return (
    <BubbleTabBarContainer
      style={style}
      backgroundColor={backgroundColor}
    >
      {tabRoutes.map(({ key: routeKey, name: routeName }: IRoute, index: number) => {
        const currentTabConfig = tabs[index];
        const {
          name,
          activeColor,
          activeBackgroundColor,
          activeIcon,
          disabledIcon,
        } = currentTabConfig;
        const { options } = descriptors[routeKey];
        const {
          tabBarLabel: optionTabBarLabel,
          title: optionTitle,
          tabBarAccessibilityLabel: accessibilityLabel,
        } = options;

        const tabName = useMemo(
          () => {
            return name ||
              optionTabBarLabel !== undefined
                ? optionTabBarLabel
                : optionTitle !== undefined
                ? optionTitle
                : routeName;
          },
          [name, optionTabBarLabel, optionTitle],
        );

        const isActive = state.index === index;

        const onPress = useCallback(
          () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: routeKey,
            });

            if (!isActive && !event.defaultPrevented) {
              navigation.navigate(routeName);
            }
          },
          [routeKey, routeName, isActive],
        );

        const onLongPress = useCallback(
          () => {
            navigation.emit({
              type: 'tabLongPress',
              target: routeKey,
            });
          },
          [routeKey],
        );

        const accessibilityStates =
          (isActive ? ['selected'] : []) as AccessibilityStates[];
        const currentIcon =
          disabledIcon ?
            isActive ? activeIcon : disabledIcon
            : activeIcon;

        return (
          <BubbleTab
            iconRenderer={iconRenderer}
            activeTabSize={activeTabSize}
            disabledTabSize={disabledTabSize}
            isActive={isActive}
            icon={currentIcon}
            activeColor={activeColor}
            activeBackgroundColor={activeBackgroundColor}
            tabName={tabName}
            onPress={onPress}
            onLongPress={onLongPress}
            accessibilityRole="button"
            accessibilityStates={accessibilityStates}
            accessibilityLabel={accessibilityLabel}
          />
        );
      })}
    </BubbleTabBarContainer>
  );
};

export default BubbleTabBar;

interface IBubbleTabBarContainer {
  backgroundColor: string;
}

const BubbleTabBarContainer = styled.View<IBubbleTabBarContainer>`
  flex-direction: row;
  border-top-color: #C4C4C4;
  border-top-width: 0.5px;
  height: 70px;
  align-items: center;
  justify-content: center;
  padding: 0 50px;

  ${({ backgroundColor }) => backgroundColor && css`
    background-color: ${backgroundColor};
  `};
`;

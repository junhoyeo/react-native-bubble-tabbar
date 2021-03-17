import React, { useCallback, useMemo } from 'react';
import { AccessibilityState } from 'react-native';
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
  const tabRoutes = useMemo(() => {
    const { routes } = state;
    return routes.slice(0, tabs.length);
  }, [state.routes]);

  return (
    <BubbleTabBarContainer style={style} backgroundColor={backgroundColor}>
      {tabRoutes.map(
        ({ key: routeKey, name: routeName }: IRoute, index: number) => {
          const currentTabConfig = tabs[index];
          const {
            name,
            activeColor,
            activeBackgroundColor,
            inactiveColor,
            activeIcon,
            disabledIcon,
          } = currentTabConfig;
          const { options } = descriptors[routeKey];
          const {
            tabBarLabel: optionTabBarLabel,
            title: optionTitle,
            tabBarAccessibilityLabel: accessibilityLabel,
          } = options;

          const tabName = useMemo(() => {
            return name || optionTabBarLabel || optionTitle || routeName;
          }, [name, optionTabBarLabel, optionTitle]);

          const isActive = state.index === index;

          const onPress = useCallback(() => {
            const event = navigation.emit({
              type: 'tabPress',
              target: routeKey,
            });

            if (!isActive && !event.defaultPrevented) {
              navigation.navigate(routeName);
            }
          }, [routeKey, routeName, isActive]);

          const onLongPress = useCallback(() => {
            navigation.emit({
              type: 'tabLongPress',
              target: routeKey,
            });
          }, [routeKey]);

          const accessibilityState = { selected: isActive };
          const currentIcon = disabledIcon
            ? isActive
              ? activeIcon
              : disabledIcon
            : activeIcon;

          return (
            <BubbleTab
              key={`tab-${tabName}`}
              iconRenderer={iconRenderer}
              activeTabSize={activeTabSize}
              disabledTabSize={disabledTabSize}
              isActive={isActive}
              icon={currentIcon}
              activeColor={activeColor}
              activeBackgroundColor={activeBackgroundColor}
              inactiveColor={inactiveColor}
              tabName={tabName}
              onPress={onPress}
              onLongPress={onLongPress}
              accessibilityRole="button"
              accessibilityState={accessibilityState}
              accessibilityLabel={accessibilityLabel}
            />
          );
        },
      )}
    </BubbleTabBarContainer>
  );
};

export default BubbleTabBar;

interface IBubbleTabBarContainer {
  backgroundColor: string;
}

const BubbleTabBarContainer = styled.View<IBubbleTabBarContainer>`
  flex-direction: row;
  border-top-color: #c4c4c4;
  border-top-width: 0.5px;
  height: 70px;
  align-items: center;
  justify-content: center;
  padding: 0 50px;

  ${({ backgroundColor }) =>
    backgroundColor &&
    css`
      background-color: ${backgroundColor};
    `};
`;

import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import {
  AccessibilityRole,
  AccessibilityState,
  StyleProp,
  ViewStyle,
  ImageSourcePropType,
} from 'react-native';

export type TBubbleTabBarIcon = string | IconDefinition | ImageSourcePropType;

export interface IBubbleTabConfig {
  activeColor: string;
  inactiveColor?: string;
  activeBackgroundColor: string;
  name?: string;
  activeIcon: TBubbleTabBarIcon;
  disabledIcon?: TBubbleTabBarIcon;
}

export interface IIconRenderer {
  icon: TBubbleTabBarIcon;
  color?: string;
}

export type TIconRenderer = React.FC<IIconRenderer>;

export interface IBubbleTabBar extends BottomTabBarProps {
  tabs: readonly IBubbleTabConfig[];
  iconRenderer?: TIconRenderer;
  activeTabSize?: number;
  disabledTabSize?: number;
  backgroundColor?: string;
  style?: StyleProp<ViewStyle>;
}

export interface IRoute {
  key: string;
  name: string;
}

export interface IAccessibility {
  accessibilityRole?: AccessibilityRole;
  accessibilityState?: AccessibilityState;
  accessibilityLabel?: string;
}

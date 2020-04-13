import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import {
  AccessibilityRole,
  AccessibilityStates,
  StyleProp,
  ViewStyle,
  ImageSourcePropType,
} from 'react-native';

export type TBubbleTabBarIcon = string | ImageSourcePropType;

export interface IBubbleTabConfig {
  activeColor: string;
  activeBackgroundColor: string;
  name?: string;
  activeIcon: TBubbleTabBarIcon;
  disabledIcon?: TBubbleTabBarIcon;
}

export interface IIconRenderer {
  icon: TBubbleTabBarIcon;
  activeColor?: string;
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
  accessibilityStates?: AccessibilityStates[];
  accessibilityLabel?: string;
}

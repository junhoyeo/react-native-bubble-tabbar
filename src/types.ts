import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { ImageSourcePropType } from 'react-native';

export type TBubbleTabBarIcon = string | ImageSourcePropType;

export interface IBubbleTabConfig {
  activeColor: string;
  activeBackgroundColor: string;
  name?: string;
  activeIcon?: TBubbleTabBarIcon;
  disabledIcon?: TBubbleTabBarIcon;
}

export interface IIconRenderer {
  icon: ImageSourcePropType;
  activeColor?: string;
}

export type TIconRenderer = React.FC<IIconRenderer>;

export interface IBubbleTabBar extends BottomTabBarProps {
  tabs: readonly IBubbleTabConfig[];
  iconRenderer?: TIconRenderer;
}

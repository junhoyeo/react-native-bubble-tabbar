import {
  faHome,
  faHeart,
  faCommentAlt,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import BubbleTabBar, { IBubbleTabConfig } from 'react-native-bubble-tabbar';

const tabs: IBubbleTabConfig[] = [
  {
    activeColor: '#cc0066',
    activeBackgroundColor: '#f76a8c',
    activeIcon: faHome,
  },
  {
    activeColor: '#ff6f5e',
    activeBackgroundColor: '#f8dc88',
    activeIcon: faHeart,
  },
  {
    activeColor: '#1eb2a6',
    activeBackgroundColor: '#ccf0e1',
    activeIcon: faCommentAlt,
  },
  {
    activeColor: '#4d80e4',
    activeBackgroundColor: '#9aceff',
    activeIcon: faBars,
    name: 'Last',
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
      tabs={tabs}
    />
  );
};

export default CustomTabBar;

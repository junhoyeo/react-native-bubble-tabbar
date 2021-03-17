import * as React from 'react';
import { ImageSourcePropType } from 'react-native';
import styled from 'styled-components/native';

import { TIconRenderer, IIconRenderer } from './types';
import { screenWidth } from './dimensions';

export const defaultIconRenderer: TIconRenderer = ({ icon }: IIconRenderer) => {
  const isImageSource = (icon: any): icon is ImageSourcePropType => icon;

  if (!isImageSource(icon)) {
    return null;
  }

  return <Icon source={icon} />;
};

const Icon = styled.Image.attrs({
  resizeMode: 'contain',
})`
  height: 18px;
  width: 18px;
`;

export const defaultActiveTabSize = (screenWidth - 50) / 3.8;

export const defaultDisabledTabSize = 85;

export const defaultBackgroundColor = 'white';

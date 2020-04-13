import * as React from 'react';
import styled from 'styled-components/native';

import { TIconRenderer } from './types';
import { screenWidth } from './dimensions';

export const defaultIconRenderer: TIconRenderer = ({ icon }) => {
  if (typeof icon === 'string') {
    return (null);
  }

  return (
    <Icon source={icon} />
  );
};

const Icon = styled.Image.attrs({
  resizeMode: 'contain',
})`
  height: 18px;
  width: 18px;
`;

export const defaultActiveTabSize = (screenWidth - 50) / 3.8;

export const defaultDisabledTabSize = 75;

export const defaultBackgroundColor = 'white';

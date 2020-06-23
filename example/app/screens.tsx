import * as React from 'react';
import styled, { css } from 'styled-components/native';

interface IContainer {
  backgroundColor?: string;
}

const DummyScreen: React.FC<IContainer> = ({ backgroundColor = 'white' }) =>
  <Container backgroundColor={backgroundColor} />;

const Container = styled.View<IContainer>`
  flex: 1;

  ${({ backgroundColor }) => backgroundColor && css`
    background-color: ${backgroundColor};
  `};
`;

export default DummyScreen;

export const DummyScreenOne = () =>
  <DummyScreen backgroundColor="#DC143C" />;

export const DummyScreenTwo = () =>
  <DummyScreen backgroundColor="#FF7F50" />;

export const DummyScreenThree = () =>
  <DummyScreen backgroundColor="#20B2AA" />;

export const DummyScreenFour = () =>
  <DummyScreen backgroundColor="#4169E1" />;

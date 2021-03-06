import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
  Container,
  Title,
  Indicator,
} from './styles';

interface Props extends RectButtonProps {
  title: string;
  color?: 'main' | 'success';
  isLoading?: boolean;
}

export function Button({ title, color, isLoading = false, ...rest }: Props){
  return (
    <Container color={color} {...rest}>
      {isLoading ? (
        <Indicator />
      ) : (
        <Title>{title}</Title>
      )}
    </Container>
  );
}

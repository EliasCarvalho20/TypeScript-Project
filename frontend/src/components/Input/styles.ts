import styled, { css } from 'styled-components';

import { ContainerProps } from './interface';

export const Container = styled.div<ContainerProps>`
  align-items: center;
  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129;
  color: #656360;
  display: flex;
  padding: 16px;
  width: 100%;

  & + div {
    margin-top: 8px;
  }

  ${(props) => props.isFocused && css`
    color: #ff9000;
    border-color: #ff9000;
  `}

  ${(props) => props.isFilled && css`
    color: #ff9000;
  `}

  input {
    background: transparent;
    border: 0;
    color: #f4ede8;
    flex: 1;

    &::placeholder {
      color: #656360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

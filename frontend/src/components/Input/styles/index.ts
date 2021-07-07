import styled, { css } from 'styled-components';

import { ContainerProps } from '../interface';
import Tooltip from '../../Tooltip';

export const Container = styled.div<ContainerProps>`
  align-items: center;
  background: var(--background);
  border-radius: 10px;
  border: 2px solid var(--background);;
  color: #656360;
  display: flex;
  padding: 16px;
  width: 100%;

  & + div {
    margin-top: 8px;
  }

  ${(props) => props.isErrored && css`
    border-color: var(--red-error);
  `}

  ${(props) => props.isFocused && css`
    color: var(--orange-primary);
    border-color: var(--orange-primary);
  `}

  ${(props) => props.isFilled && css`
    color: var(--orange-primary);
  `}

  input {
    background: transparent;
    border: 0;
    color: var(--white-orange);
    flex: 1;

    &::placeholder {
      color: var(--grey);
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 10px;

  svg {
    margin: 0;
  }
`;

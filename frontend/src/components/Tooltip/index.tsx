import React, { FC } from 'react';

import { Container } from './styles';
import { TooltipProps } from './interface';

const Tooltip: FC<TooltipProps> = ({ title, className, children }) => (
  <Container className={ className }>
    {children}
    <span>{title}</span>
  </Container>
);

export default Tooltip;

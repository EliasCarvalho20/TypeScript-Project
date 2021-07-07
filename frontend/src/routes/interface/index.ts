import { ComponentType } from 'react';
import { RouteComponentProps } from '@reach/router';

export interface RouterProps extends RouteComponentProps{
  isPrivate?: boolean;
  component: ComponentType;
  exact?: boolean;
}

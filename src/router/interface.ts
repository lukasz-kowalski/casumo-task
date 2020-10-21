import { FC } from 'react';

export interface Route {
  path: string,
  component: FC,
  exact?: boolean,
}

export interface RoutesProps {
  routes: Route[]
}
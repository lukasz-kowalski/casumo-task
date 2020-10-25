import * as p from './routePaths';
import Home from 'pages/Home';
import CardList from 'pages/CardList';
import CardFormEdit from 'pages/CardForm/Edit';
import { Route } from './interface';

export const routes: Route[] = [
  {
    path: p.home,
    component: Home,
    exact: true,
  },
  {
    path: p.cards.list,
    component: CardList,
  },
];

export const modalRoutes: Route[] = [
  {
    path: `${p.cards.edit}/:id`,
    component: CardFormEdit,
  },
];

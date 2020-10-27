import * as p from './routePaths';
import Home from 'pages/Home';
import CardList from 'pages/CardList';
import CardFormAdd from 'pages/CardForm/Add';
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
    path: `${p.cards.add}`,
    component: CardFormAdd,
  },
  {
    path: `${p.cards.edit}/:id`,
    component: CardFormEdit,
  },
];

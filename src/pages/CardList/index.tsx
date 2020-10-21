import React from 'react';
import { cards } from 'router/routePaths';
import CardList from 'components/CardList';

const CardListPage: React.FC = () => {
  return <CardList path={cards.edit} />;
};

export default CardListPage;

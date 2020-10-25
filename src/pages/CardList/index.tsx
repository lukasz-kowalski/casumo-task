import React, { useState, useEffect } from 'react';
import { cards as cardsPath } from 'router/routePaths';
import CardList from 'components/CardList';
import { CardData } from 'components/Card/interface';
import localStorageService from 'services/localStorage';

const CardListPage: React.FC = () => {
  const [cards, setCards] = useState<CardData[]>([]);

  useEffect(() => {
    const cardsFromStorage = localStorageService.getCards();
    setCards(cardsFromStorage);
  }, []);

  return <CardList path={cardsPath.edit} cards={cards} />;
};

export default CardListPage;

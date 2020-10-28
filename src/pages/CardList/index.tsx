import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { cards as cardsPath } from 'router/routePaths';
import CardList from 'components/CardList';
import { CardData } from 'components/Card/interface';
import localStorageService from 'services/localStorage';

const CardListPage: React.FC = () => {
  const [cards, setCards] = useState<CardData[]>([]);
  const location = useLocation();

  useEffect(() => {
    const cardsFromStorage = localStorageService.getCards();
    setCards(cardsFromStorage);
  }, [location.pathname]);

  return <CardList cardPaths={cardsPath} cards={cards} />;
};

export default CardListPage;

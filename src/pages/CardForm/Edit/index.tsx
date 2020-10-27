import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Modal from 'shared/Modal';
import Card from 'components/Card';
import { Params } from './interface';
import { CardData } from 'components/Card/interface';
import { initialCard } from './initialData';
import localStorageService from 'services/localStorage';

const Edit: React.FC = () => {
  const { id } = useParams<Params>();
  const [card, setCard] = useState<CardData>(initialCard);

  useEffect(() => {
    const cardFromStorage = localStorageService.getCard(id);
    console.log(cardFromStorage);
    if (cardFromStorage) {
      setCard(cardFromStorage);
    }
  }, [id]);

  return (
    <Modal title="Edit your card">
      <Card {...card} />
    </Modal>
  );
};

export default Edit;

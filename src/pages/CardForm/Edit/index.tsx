import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Modal from 'shared/Modal';
import Card from 'components/Card';
import { Params } from './interface';
import { CardData } from 'components/Card/interface';
import { initialCard, initialFormData } from './initialData';
import localStorageService from 'services/localStorage';
import CardForm from 'components/CardForm';
import { CardFormData } from 'components/CardForm/interface';
import { DeleteButton } from 'shared/styled/Button';
import { strategyProvider } from '../strategyProvider';
import { Strategy } from '../interface';

const Edit: React.FC = () => {
  const history = useHistory();
  const { id } = useParams<Params>();
  const [card, setCard] = useState<CardData>(initialCard);
  const [formData, setFormData] = useState<CardFormData>(initialFormData);
  const strategy = useMemo(() => strategyProvider(Strategy.EDIT), []);

  useEffect(() => {
    const cardFromStorage = localStorageService.getCard(id);
    if (cardFromStorage) {
      setCard(cardFromStorage);
      setFormData(strategy.mapCardForView!(cardFromStorage));
    }
  }, [id, strategy]);

  const handleSubmit = (values: CardFormData) => {
    localStorageService.editCard(id, strategy.mapCardForSave(values, card));
    history.goBack();
  };

  const handleDelete = () => {
    localStorageService.deleteCard(id);
    history.goBack();
  };

  return (
    <Modal title={strategy.header}>
      <Card {...card} />

      <CardForm onSubmit={handleSubmit} isAddForm={strategy.isAddForm} initialData={formData} />

      <DeleteButton onClick={handleDelete}>Delete card</DeleteButton>
    </Modal>
  );
};

export default Edit;

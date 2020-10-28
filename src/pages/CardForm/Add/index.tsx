import React from 'react';
import { useHistory } from 'react-router-dom';
import Modal from 'shared/Modal';
import CardForm from 'components/CardForm';
import { initialCard } from './initialData';
import localStorageService from 'services/localStorage';
import { CardFormData } from 'components/CardForm/interface';
import { strategyProvider } from '../strategyProvider';
import { Strategy } from '../interface';

const Add: React.FC = () => {
  const history = useHistory();
  const strategy = strategyProvider(Strategy.ADD);

  const handleSubmit = (values: CardFormData) => {
    localStorageService.addCard(strategy.mapCardForSave(values));
    history.goBack();
  };

  return (
    <Modal title={strategy.header}>
      <CardForm onSubmit={handleSubmit} isAddForm={strategy.isAddForm} initialData={initialCard} />
    </Modal>
  );
};

export default Add;

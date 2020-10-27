import React, { useState, useEffect } from 'react';
import Modal from 'shared/Modal';
import { CardData } from 'components/Card/interface';
import { initialCard } from './initialData';
import localStorageService from 'services/localStorage';
import CardForm from 'components/CardForm';
import { CardFormData } from 'components/CardForm/interface';

const Edit: React.FC = () => {
  // useEffect(() => {
  //   const cardFromStorage = localStorageService.getCard(id);
  //   console.log(cardFromStorage);
  //   if (cardFromStorage) {
  //     setCard(cardFromStorage);
  //   }
  // }, []);

  const handleSubmit = (values: CardFormData) => {
    console.log(values);
  };

  return (
    <Modal title="Add your card details">
      <CardForm onSubmit={handleSubmit} />
    </Modal>
  );
};

export default Edit;

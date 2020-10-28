import { v4 as uuidv4 } from 'uuid';
import { Strategy, StrategyProvider } from './interface';
import { CardFormData, FIELDS } from 'components/CardForm/interface';
import { CardData, VARIANT } from 'components/Card/interface';
import { getRandomCardType } from './utils';

export const strategyProvider = (strategy: Strategy) => {
  const defaultStrategy: StrategyProvider = {
    header: '',
    isAddForm: false,
    mapCardForSave: (card: CardFormData): CardData => ({
      id: uuidv4(),
      cvc: '',
      expiryDate: '',
      name: '',
      number: '',
      type: VARIANT.MASTERCARD,
    }),
  };

  const summaryStrategyMap = new Map<Strategy, StrategyProvider>([
    [
      Strategy.ADD,
      {
        header: 'Add your card details',
        isAddForm: true,

        mapCardForSave: (card: CardFormData): CardData => ({
          id: uuidv4(),
          cvc: card.cvc,
          expiryDate: card.expiryDate,
          name: card.name,
          number: card.cardNumber,
          type: getRandomCardType(),
        }),
      },
    ],

    [
      Strategy.EDIT,
      {
        header: 'Edit your card',
        isAddForm: false,

        mapCardForSave: (card: CardFormData, cardFromStore?: CardData): CardData => ({
          cvc: card.cvc,
          expiryDate: card.expiryDate,
          name: card.name,
          number: card.cardNumber,
          type: cardFromStore ? cardFromStore.type : VARIANT.MASTERCARD,
          id: cardFromStore ? cardFromStore.id : '',
        }),

        mapCardForView: (card: CardData): CardFormData => ({
          [FIELDS.NAME]: card.name,
          [FIELDS.CARD_NUMBER]: card.number,
          [FIELDS.EXPIRY_DATE]: card.expiryDate,
          [FIELDS.CVC]: card.cvc,
        }),
      },
    ],
  ]);

  return summaryStrategyMap.get(strategy) || defaultStrategy;
};

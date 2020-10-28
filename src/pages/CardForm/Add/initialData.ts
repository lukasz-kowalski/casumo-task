import { CardFormData, FIELDS } from 'components/CardForm/interface';

export const initialCard: CardFormData = {
  [FIELDS.NAME]: '',
  [FIELDS.CARD_NUMBER]: '',
  [FIELDS.EXPIRY_DATE]: '',
  [FIELDS.CVC]: '',
};

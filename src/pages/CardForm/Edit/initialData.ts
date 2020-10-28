import { VARIANT } from 'components/Card/interface';
import { CardFormData, FIELDS } from 'components/CardForm/interface';

export const initialCard = {
  id: '',
  cvc: '',
  expiryDate: '',
  name: '',
  number: '',
  type: VARIANT.MASTERCARD,
};

export const initialFormData: CardFormData = {
  [FIELDS.NAME]: '',
  [FIELDS.CARD_NUMBER]: '',
  [FIELDS.EXPIRY_DATE]: '',
  [FIELDS.CVC]: '',
};

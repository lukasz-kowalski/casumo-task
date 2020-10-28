export enum FIELDS {
  NAME = 'name',
  CARD_NUMBER = 'cardNumber',
  EXPIRY_DATE = 'expiryDate',
  CVC = 'cvc',
}

export enum FIELDS_QUESTIONS {
  NAME = 'Name in card',
  CARD_NUMBER = 'Card number',
  EXPIRY_DATE = 'Expiry date',
  CVC = 'CVC (security code)',
}

export interface CardFormData {
  [FIELDS.NAME]: string;
  [FIELDS.CARD_NUMBER]: string;
  [FIELDS.EXPIRY_DATE]: string;
  [FIELDS.CVC]: string;
}

export interface CardFormProps {
  onSubmit: (values: CardFormData) => void;
  isAddForm: boolean;
  initialData: CardFormData;
}

export interface FormProps {
  isAddForm: boolean;
}

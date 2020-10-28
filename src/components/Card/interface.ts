export interface CardData {
  cvc: string;
  expiryDate: string;
  name: string;
  number: string;
  type: VARIANT;
  id: string;
}

export enum VARIANT {
  VISA = 'visa',
  MASTERCARD = 'masterCard',
}

interface Variant {
  color: string;
  background: string;
  backgroundImg: string;
}

export interface CardProps extends CardData {
  path?: string;
}

export interface CardVariant {
  [VARIANT.VISA]: Variant;
  [VARIANT.MASTERCARD]: Variant;
}

export interface VariantProps {
  variant: VARIANT;
}

export interface ItemProps {
  small?: boolean;
}

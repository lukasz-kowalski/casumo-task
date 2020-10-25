import { VARIANT } from './interface';
import MasterCard from 'shared/icons/MasterCard';
import Visa from 'shared/icons/Visa';

const variantMap = {
  [VARIANT.MASTERCARD]: MasterCard,
  [VARIANT.VISA]: Visa,
};

export const getCardIcon = (type: VARIANT) => {
  return variantMap[type];
};

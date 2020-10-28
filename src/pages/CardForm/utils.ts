import { VARIANT } from 'components/Card/interface';

export const getRandomCardType = () => {
  const randomNumber = Math.round(Math.random());

  return randomNumber === 0 ? VARIANT.MASTERCARD : VARIANT.VISA;
};

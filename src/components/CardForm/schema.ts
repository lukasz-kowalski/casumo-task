import * as yup from 'yup';
import { FIELDS, CardFormData } from './interface';
import { onlyDigits, creditCard } from 'shared/regex';
import { expiryDateTest } from 'shared/validationTests';

const getRequiredMessage = (fieldName: string) => `Please fill in ${fieldName}`;

export default yup.object().shape<CardFormData>({
  [FIELDS.NAME]: yup.string().required(getRequiredMessage('your name')),
  [FIELDS.CARD_NUMBER]: yup
    .string()
    .matches(creditCard, 'Please enter a valid credit card number')
    .required(getRequiredMessage('card number')),
  [FIELDS.EXPIRY_DATE]: yup
    .string()
    .test('expiryDateTest', 'Please enter a valid expiry date', expiryDateTest)
    .required(getRequiredMessage('expiry date')),
  [FIELDS.CVC]: yup
    .string()
    .matches(onlyDigits, 'Please enter a valid CVC number')
    .required(getRequiredMessage('CVC number')),
});

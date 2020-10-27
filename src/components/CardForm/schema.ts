import * as yup from 'yup';
import { FIELDS, CardFormData } from './interface';

export default yup.object().shape<CardFormData>({
  [FIELDS.NAME]: yup.string().required('This field is required'),
  [FIELDS.CARD_NUMBER]: yup.string(),
  [FIELDS.EXPIRY_DATE]: yup.string(),
  [FIELDS.CVC]: yup.string(),
});

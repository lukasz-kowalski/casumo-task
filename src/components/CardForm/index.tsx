import React from 'react';
import get from 'get-value';
import { Formik, Field } from 'formik';
import { FIELDS, FIELDS_QUESTIONS, CardFormProps } from './interface';
import validationSchema from './schema';
import TextInput from 'shared/styled/inputs/TextInput';
import { Button } from 'shared/styled/Button';
import { creditCardMask, expiryDateMask, cvcMask } from 'shared/inputMasks';
import * as S from './CardForm.styled';

const CardForm: React.FC<CardFormProps> = ({ onSubmit, isAddForm, initialData }) => {
  return (
    <Formik
      initialValues={initialData}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      enableReinitialize={true}>
      {({ errors, touched, isValid, dirty }) => {
        const shouldDisableSubmit = isAddForm ? !isValid || !dirty : !isValid;

        return (
          <S.Form $isAddForm={isAddForm}>
            <Field
              name={FIELDS.NAME}
              label={FIELDS_QUESTIONS.NAME}
              component={TextInput}
              placeholder="John Doe"
              error={get(errors, FIELDS.NAME)}
              wasTouched={get(touched, FIELDS.NAME)}
            />

            <Field
              name={FIELDS.CARD_NUMBER}
              label={FIELDS_QUESTIONS.CARD_NUMBER}
              component={TextInput}
              placeholder="0000 0000 0000 0000"
              error={get(errors, FIELDS.CARD_NUMBER)}
              wasTouched={get(touched, FIELDS.CARD_NUMBER)}
              mask={creditCardMask}
            />

            <Field
              name={FIELDS.EXPIRY_DATE}
              label={FIELDS_QUESTIONS.EXPIRY_DATE}
              component={TextInput}
              placeholder="00/00"
              error={get(errors, FIELDS.EXPIRY_DATE)}
              wasTouched={get(touched, FIELDS.EXPIRY_DATE)}
              mask={expiryDateMask}
            />

            <Field
              name={FIELDS.CVC}
              label={FIELDS_QUESTIONS.CVC}
              component={TextInput}
              placeholder="000"
              error={get(errors, FIELDS.CVC)}
              wasTouched={get(touched, FIELDS.CVC)}
              mask={cvcMask}
            />

            <Button type="submit" disabled={shouldDisableSubmit}>
              Confirm
            </Button>
          </S.Form>
        );
      }}
    </Formik>
  );
};

export default CardForm;

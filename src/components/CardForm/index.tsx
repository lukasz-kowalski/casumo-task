import React from 'react';
import get from 'get-value';
import { Formik, Form, Field } from 'formik';
import { FIELDS, FIELDS_QUESTIONS, CardFormProps } from './interface';
import validationSchema from './schema';
import { initialCard } from './initialData';
import TextInput from 'shared/styled/inputs/TextInput';

const CardForm: React.FC<CardFormProps> = ({ onSubmit }) => {
  return (
    <Formik initialValues={initialCard} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ errors, touched }) => {
        return (
          <Form>
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
            />

            <Field
              name={FIELDS.EXPIRY_DATE}
              label={FIELDS_QUESTIONS.EXPIRY_DATE}
              component={TextInput}
              placeholder="00/00"
              error={get(errors, FIELDS.EXPIRY_DATE)}
              wasTouched={get(touched, FIELDS.EXPIRY_DATE)}
            />

            <Field
              name={FIELDS.CVC}
              label={FIELDS_QUESTIONS.CVC}
              component={TextInput}
              placeholder="000"
              error={get(errors, FIELDS.CVC)}
              wasTouched={get(touched, FIELDS.CVC)}
            />
          </Form>
        );
      }}
    </Formik>
  );
};

export default CardForm;

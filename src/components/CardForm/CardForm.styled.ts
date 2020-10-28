import styled from 'styled-components';
import { Form as FormikForm } from 'formik';
import { FormProps } from './interface';

export const Form = styled(FormikForm)<FormProps>((p) => ({
  marginTop: p.$isAddForm ? p.theme.spacing[40] : p.theme.spacing[24],
}));

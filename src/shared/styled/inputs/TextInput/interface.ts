import { FieldProps } from 'formik';
import { InputHTMLAttributes } from 'react';

export enum INPUT_STATE {
  NORMAL = 'normal',
  ERROR = 'error',
  VALID = 'valid',
}

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error: string;
  wasTouched: boolean;
  mask?: (string | RegExp)[];
}

export type Props = FieldProps & TextInputProps;

export interface StyledInputProps {
  state: INPUT_STATE;
}

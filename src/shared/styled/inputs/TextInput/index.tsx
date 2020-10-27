import React from 'react';
import * as S from './TextInput.styled';
import { Props, INPUT_STATE } from './interface';
import { setInputState } from './utils';
import X from 'shared/icons/X';
import Valid from 'shared/icons/Valid';

const TextInput: React.FC<Props> = ({ field, placeholder, label, error, wasTouched }) => {
  const inputState = setInputState(error, wasTouched);
  const hasError = inputState === INPUT_STATE.ERROR;
  const isValid = inputState === INPUT_STATE.VALID;

  return (
    <S.InputContainer>
      <S.Label>
        {label}
        <S.TextInput {...field} placeholder={placeholder} state={inputState} />
      </S.Label>

      <S.IconContainer>
        {isValid && <Valid />}

        {hasError && <X error={hasError} />}
      </S.IconContainer>
    </S.InputContainer>
  );
};

export default TextInput;

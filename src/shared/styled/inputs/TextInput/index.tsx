import React from 'react';
import * as S from './TextInput.styled';
import { Props, INPUT_STATE } from './interface';
import { setInputState } from './utils';
import X from 'shared/icons/X';
import Valid from 'shared/icons/Valid';

const TextInput: React.FC<Props> = ({ field, placeholder, label, error, wasTouched, mask }) => {
  const inputState = setInputState(error, wasTouched);
  const hasError = inputState === INPUT_STATE.ERROR;
  const isValid = inputState === INPUT_STATE.VALID;

  return (
    <S.InputContainer>
      <S.Label>
        {label}
        {mask ? (
          <S.MaskedTextInput {...field} placeholder={placeholder} state={inputState} mask={mask} guide={true} />
        ) : (
          <S.TextInput {...field} placeholder={placeholder} state={inputState} />
        )}
        {hasError && <S.ErrorMessage>{error}</S.ErrorMessage>}
      </S.Label>

      <S.IconContainer>
        {isValid && <Valid />}

        {hasError && <X error={hasError} />}
      </S.IconContainer>
    </S.InputContainer>
  );
};

export default TextInput;

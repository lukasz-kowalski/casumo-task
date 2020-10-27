import styled from 'styled-components';
import { StyledInputProps } from './interface';
import { getColor } from './utils';

export const TextInput = styled.input<StyledInputProps>((p) => ({
  width: '100%',
  outline: 0,
  borderWidth: '0 0 1px',
  borderColor: p.theme.colors[getColor(p.state)],
  paddingBottom: p.theme.spacing[4],
  marginTop: p.theme.spacing[8],
  fontSize: p.theme.fontSize.base,

  [`&::placeholder`]: {
    color: p.theme.colors.grey20,
  },
}));

export const Label = styled.label((p) => ({
  color: p.theme.colors.grey90,
  fontWeight: 'bold',
}));

export const InputContainer = styled.div((p) => ({
  paddingBottom: p.theme.spacing[40],
  position: 'relative',
}));

export const IconContainer = styled.div((p) => ({
  position: 'absolute',
  top: '25%',
  right: '0',
}));
